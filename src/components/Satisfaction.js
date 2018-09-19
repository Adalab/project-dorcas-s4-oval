import React from "react";
import "../styles/Satisfaction.css";
import OptionsSatisfaction from "./OptionsSatisfaction";
import MediaSatisfaction from "./MediaSatisfaction";
import ChartsSatisfaction from "./ChartsSatisfaction";

const dataUserSatisfaction = [
	{
	  user: "User 1",
	  initialstate: 8,
	  finalestate: 10,
	  dailysatisfaction: 9
	},
	{
	  user: "User 2",
	  initialstate: 2,
	  finalestate: 8,
	  dailysatisfaction: 6
	},
	{
	  user: "User 3",
	  initialstate: 3,
	  finalestate: 9,
	  dailysatisfaction: 7
	},
	{
	  user: "User 4",
	  initialstate: 7,
	  finalestate: 3,
	  dailysatisfaction: 4
	},
	{
	  user: "User 5",
	  initialstate: 5,
	  finalestate: 4,
	  dailysatisfaction: 5
	},
	{
	  user: "User 6",
	  initialstate: 1,
	  finalestate: 3,
	  dailysatisfaction: 10
	},
];

class Satisfaction extends React.Component {
  render() {
    return (
      <section className="section__satisfaction">
        <div className="row h-100">
          <OptionsSatisfaction />
          <div className="col-10 h-100 satisfation__info">
            <MediaSatisfaction
				dataUserSatisfaction={dataUserSatisfaction}
			/>
            <ChartsSatisfaction
				dataUserSatisfaction={dataUserSatisfaction}
			 />
          </div>
        </div>
      </section>
    );
  }
}

export default Satisfaction;
