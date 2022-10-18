import React, { Component } from "react";
import Item from "../item/Item";
import "./items.css";

export class Items extends Component {
    render() {
        return (
            <main className="main">
                {this.props.items.map((el) => (
                    <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </main>
        );
    }
}

export default Items;
