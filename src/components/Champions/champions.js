import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getChampionData } from '../../actions';
import championscss from './champions.scss';

class Champions extends Component {
    constructor (props){
        super(props);
        this.state = {
            championsList: [],
            currentPage: 1,
            championsPerPage: 20,
            loading: false
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
            loading: true
        });
    }

    componentDidMount() {
        this.props.getChampionData();
    }

    static getDerivedStateFromProps(props, state) {
        const { champion : { champion : { champions } } } = props;
        if (champions !== state.championsList) {
            return {
                championsList: champions
            };
        }else {
            return null;
        }
    }

    //beginning of every action, create a separate action for loading to true
    // call another action to set loading to false

    render(){
        console.log("this is the state: ", this.state);
        console.log("this is the props: ", this.props);

        const { champion : { champion : { champions } } } = this.props;
        const { championsList, currentPage, championsPerPage } = this.state;

        if(this.state.championsList.length === 0){
            return (
                <div className="spinner-container">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }

        console.log("this is the champion: ",champions);

        console.log("this is champions list: ", this.state.championsList);

        //logic for displaying current todos
        const indexOfLastChampion = currentPage * championsPerPage;
        const indexOfFirstChampion = indexOfLastChampion - championsPerPage;
        const currentChampions = championsList.slice(indexOfFirstChampion, indexOfLastChampion);
        
        const renderChampions = currentChampions.map((champion, index) => {
            return (
                <div className = "championInfo" key = {index}>
                    <div className="championImage">
                        <img src={champion.image_url} alt="champion_image"/>
                    </div>
                    <div className="championName center white-text btn grey ">{champion.name}</div>
                </div>
            );
        });

        //logic for displaying page numbers
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(championsList.length / championsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
            <li className = "btn blue lighten-1 page-numbers" key = {number} id= {number} onClick = {this.handleClick}>
                {number}
            </li>
            );
        });
        return (
            <Fragment>
                <div>
                    <h1 className = "center white-text">Champions</h1>
                    <div className = "championData">{renderChampions}</div>
                    <div className="pagination-container">
                        <ul id= "page-numbers">{renderPageNumbers}</ul>
                    </div>
                </div>
            </Fragment>
        );
    }

}

function mapStateToProps(state) {
    return {
        champion: state
    }
}

export default connect(mapStateToProps, {
    getChampionData
})(Champions);