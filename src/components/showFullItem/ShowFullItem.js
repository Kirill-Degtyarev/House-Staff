import React, { Component } from "react";
import "./showFullItem.css";

export class ShowFullItem extends Component {
    render() {
        return (
            <div className="full-item">
                <div className="full-item-body">
                    <img src={"./img/" + this.props.item.img} alt="img" className="full-item-img" onClick={() => this.props.onShowItem(this.props.item)} />
                    <h2 className="full-item-title">{this.props.item.title}</h2>
                    <p className="full-item-desc">{this.props.item.desc}</p>
                    <b className="full-item-price">{this.props.item.price}$</b>
                    <div className="full-add-to-card" onClick={() => this.props.onAdd(this.props.item)}>
                        +
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;
