import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getChampionData } from '../../actions';
import championscss from './champions.scss';

class Champions extends Component {

    componentDidMount() {
        this.props.getChampionData();
    }

    render(){
        const { champion : { champion : { champions } } } = this.props;
        const championData = champions.map ((item, index) => {
            return(
                <div key = {index}>
                    <div className="championImage">
                        <img src={item.image_url} alt="champion_image"/>
                    </div>
                    <div className="championName center">{item.name}</div>
                </div>
            );
            
        });
        console.log("this is the champion: ",champions);
        return (
            <div>
                <h1 className = "center">Champions</h1>
                <div className = "championData">
                    {championData}
                </div>
            </div>
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