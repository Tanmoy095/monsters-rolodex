import React from "react";
import { Component } from "react";
import "./CardList.style.css";
import Card from "../card/Card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
