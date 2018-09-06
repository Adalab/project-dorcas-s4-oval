import React from "react";
import "../styles/MediaSatisfaction.css";

class MediaSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-equip">
        <div className="satisfaction__media-equip--data media-equip__title">
          title
        </div>
        <div className="satisfaction__media-equip--data media-equip__initial-data">
          initial media
        </div>
        <div className="satisfaction__media-equip--data media-equip__end-data">
          final media
        </div>
        <div className="satisfaction__media-equip--data media-equip__job-data">
          job media
        </div>
      </div>
    );
  }
}

export default MediaSatisfaction;
