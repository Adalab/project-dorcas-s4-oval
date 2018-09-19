import React from "react";
import "../styles/MediaSatisfaction.css";

let initialMedia = [];
let finalMedia = [];
let jobMedia = [];

class MediaSatisfaction extends React.Component {

  componentDidMount() {
    this.calculateMedias();
  }

  calculateMedias = () => {
    const dataUserSatisfaction = this.props.dataUserSatisfaction;

    for (const user of dataUserSatisfaction) {
      initialMedia.push(user.initialstate);
      finalMedia.push(user.finalestate);
      jobMedia.push(user.dailysatisfaction);
    }

    initialMedia = Math.round((initialMedia.reduce((a, b) => a + b) / initialMedia.length) * 10) / 10
    finalMedia = Math.round((finalMedia.reduce((a, b) => a + b) / finalMedia.length) * 10) / 10
    jobMedia = Math.round((jobMedia.reduce((a, b) => a + b) / jobMedia.length) * 10) / 10
  }

  render() {
    return (
      <div className="satisfation__media-equip">
        <div className="satisfaction__media-equip--data media-equip__title">
          Team Media
        </div>
        <div className="satisfaction__media-equip--data media-equip__initial-data">
          Initial media
          <span className={`media_numbers`}>{initialMedia}</span>
        </div>
        <div className="satisfaction__media-equip--data media-equip__end-data">
          Final media
          <span className="media_numbers">{finalMedia}</span>
        </div>
        <div className="satisfaction__media-equip--data media-equip__job-data">
          Job media
          <span className="media_numbers">{jobMedia}</span>
        </div>
      </div>
    );
  }
}

export default MediaSatisfaction;
