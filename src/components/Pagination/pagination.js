import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getChampionData } from '../../actions';

class Pagination extends Component {
    constructor (props){
        super(props);
        this.state = {
            championsList: this.props.champions,
            currentPage: 1,
            championsPerPage: 4
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
        });
    }

    // renderNewChampionList = (champions) => {
    //     var newChampions = champions.slice(0,3);
    //     this.setState({
    //         championsList: newChampions
    //     });
    // }

    // componentDidMount() {
    //     this.props.getChampionData();
    // }

    render() {
        const { championsList, currentPage, championsPerPage } = this.state;
        // const { champion : { champion : { champions } } } = this.props;
        // if(champions.length > 0){
        //     this.renderNewChampionList(champions);
        // }

        console.log("this is champions list: ", this.state.championsList);

        //logic for displaying current todos
        const indexOfLastChampion = currentPage * championsPerPage;
        const indexOfFirstChampion = indexOfLastChampion - championsPerPage;
        const currentChampions = championsList.slice(indexOfFirstChampion, indexOfLastChampion);

        const renderChampions = currentChampions.map((champion, index) => {
            return <div key={index}>{champion.name}</div>
        });

        //logic for displaying page numbers
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(currentChampions.length / championsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
            <li key = {number} id= {number} onClick = {this.handleClick}>
                {number}
            </li>
            );
        });

        return (
            <div>
                <ul>{renderChampions}</ul>
                <ul id= "page-numbers">{renderPageNumbers}</ul>
            </div>
        );
    }
}

export default Pagination
