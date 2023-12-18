
import React from "react";
import card from "../Mockdata/card.json";


const CardData = () => {
  return (
    <div>
      <h3 className="taskname">Card data</h3>
      {card.map((data) => {
        return (
          <div className="cardcontainer">
            <p className="dataname">{data.name}</p>
            <p className="datavalue">{data.value}</p>
            <p className="datadate">{data.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardData;
