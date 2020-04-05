import React from "react";
import "../App.css";

class TopContainer extends React.Component {
  state = {
    text: ""
  };
  handleChange = e => {
    let textValue = e.target.value;
    this.setState({ text: textValue });
  };

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.props.onChange(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div className="top-container">
        <input
          type="text"
          placeholder="Search here..."
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default TopContainer;
