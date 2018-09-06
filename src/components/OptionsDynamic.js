import React from "react";
import "../styles/OptionsDynamic.css";

class OptionsDynamic extends React.Component {
  render() {
    return (
      <div className="options__container">
        <p>OptionsDynamic</p>
        <select className="options__select-user" name="user">
          <option value="">User</option>
          <option value="user1">Anna Branco</option>
          <option value="user2">Laura Moñino</option>
          <option value="user3">Laura Domingo</option>
          <option value="user3">Aylén Ortiz</option>
          <option value="user3">Carlos del Castillo</option>
          <option value="user3">Héctor Martos</option>
        </select>
        <select className="options__select-label" name="label">
          <option value="">Label</option>
          <option value="label1">XS</option>
          <option value="label2">S</option>
          <option value="label3">M</option>
          <option value="label4">L</option>
          <option value="label5">XL</option>
        </select>
        <select className="options__select-list" name="list">
          <option value="">List</option>
          <option value="value1">Backlog</option>
          <option value="value2">Next Sprint</option>
          <option value="value3">To do</option>
          <option value="value4">Doing</option>
          <option value="value5">Blocked or Testing</option>
          <option value="value6">Done</option>
          <option value="value7">Dismiss</option>
          <option value="value8">...</option>
        </select>
      </div>
    );
  }
}

export default OptionsDynamic;
