import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getItemData } from '../../actions';
import items from './items.scss';

class Items extends Component {
    constructor (props){
        super(props);
        this.state = {
            itemsList: [],
            currentPage: 1,
            itemsPerPage: 40,
            loading: false
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
            loading: true
        });
        setTimeout(() => this.doneLoading(), 1000);
    }

    componentDidMount() {
        this.props.getItemData();
    }

    doneLoading(){
        this.setState({
            loading: false
        });
    }

    static getDerivedStateFromProps(props, state) {
        const { item : { item : { items } } } = props;
        if (items !== state.itemsList) {
            return {
                itemsList: items
            };
        }else {
            return null;
        }
    }

    render () {
        const { item: {item : { items } } } = this.props;
        const { itemsList, currentPage, itemsPerPage } = this.state;
        console.log("this is the ITEMstate: ", this.state);
        console.log("this is the ITEMprops: ", this.props);
        // console.log("these are the items: ", items);

        if(this.state.itemsList.length === 0 || this.state.loading){    
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

        console.log("this is the items: ", items);
        console.log("this is the items list: ", this.state.itemsList);

        //logic for displaying current todos
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((item, index) => {
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

        //logic for displaying page numbers
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(itemsList.length / itemsPerPage); i++){
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
                <h1 className = "center white-text">Items Page</h1>
                <div className = "itemData">{renderItems}</div>
                <div className="pagination-container">
                    <ul id="page-numbers">{renderPageNumbers}</ul>
                </div>
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