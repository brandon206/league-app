import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getItemData } from '../../actions';
import items from './items.scss';

class Items extends Component {

    componentDidMount() {
        this.props.getItemData();
    }

    render () {
        const { item: {item : { items } } } = this.props;
        console.log("this is the ITEMstate: ", this.state);
        console.log("this is the ITEMprops: ", this.props);
        console.log("these are the items: ", items);

        if(items.length === 0){    
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

        const renderItems = items.data.map((item, index) => {
            return (
                <div className = "itemInfo" key = {index}>
                    <div className="itemImage">
                        <img src={item.image_url} alt="item_image"/>
                    </div>
                    <div className="itemContainer center white-text btn grey ">
                        <div className="itemName">{item.name}</div>
                        <div className="itemPrice">{`Buy Price: ${item.gold_total}`}</div>
                        <div className="itemSellPrice">{`Sell Price: ${item.gold_sell}`}</div>
                    </div>
                </div>
            );
        });

        return (
            <Fragment>
                <h1 className = "center white-text">Items Page</h1>
                <div className = "itemData">{renderItems}</div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state
    }
}

export default connect(mapStateToProps, {
    getItemData
})(Items);