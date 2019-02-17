import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getChampionData } from '../../actions';
import championscss from './champions.scss';
import Pagination from '../Pagination/pagination';

class Champions extends Component {
    constructor (props){
        super(props);
        this.state = {
            championsList: [],
            currentPage: 1,
            championsPerPage: 20
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
        });
    }
    

    componentDidMount() {
        this.props.getChampionData();
    }

    render(){
        
        const { champion : { champion : { champions } } } = this.props;
        const { championsList, currentPage, championsPerPage } = this.state;

        if(champions.length === 0){
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

        if(champions.length > 0){
            if(championsList.length === 0){
                this.setState({
                    championsList: champions
                });
            }
        }

        // const championData = champions.map ((item, index) => {
        //     return(
        //         <div className = "championInfo" key = {index}>
        //             <div className="championImage">
        //                 <img src={item.image_url} alt="champion_image"/>
        //             </div>
        //             <div className="championName center white-text btn grey ">{item.name}</div>
        //         </div>
        //     );
            
        // });
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
                {/* <div className = "championBG">
                    <h1 className = "center white-text">Champions</h1>
                    <form>
                        <div class="input-field search-bar">
                            <input id="search" type="search" required/>
                            <label class="label-icon white-text" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                    <div className = "championData">
                        {championData}
                    </div>
                </div> */}
                <div>
                    <div className = "championData">{renderChampions}</div>
                    <div className="pagination-container">
                        <ul id= "page-numbers">{renderPageNumbers}</ul>
                    </div>
                </div>
                {/* <Pagination champions = {champions}/> */}
                {/* <div className = "pagination-container">
                    <ul className="pagination center">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div> */}
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