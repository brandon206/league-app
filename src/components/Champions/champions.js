import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getChampionData } from '../../actions';
import championscss from './champions.scss';

class Champions extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

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
                    <div className="championName center white-text btn grey ">{item.name}</div>
                </div>
            );
            
        });
        console.log("this is the champion: ",champions);
        return (
            <Fragment>
                <div className = "championBG">
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
                </div>
                <div className = "pagination-container">
                    <ul className="pagination center">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
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