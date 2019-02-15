import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getChampionData } from '../../actions';

class Champions extends Component {

    componentDidMount() {
        this.props.getChampionData();
    }

    render(){
        return (
            <div>
                <h1>Champion Data</h1>
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