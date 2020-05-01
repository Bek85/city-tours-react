import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
    console.log(this.state.showInfo);
  };

  render() {
    if (this.state.showInfo) {
    }
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt='tour cover' />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <FontAwesomeIcon icon='window-close' />
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info{" "}
            <span onClick={this.handleInfo}>
              <FontAwesomeIcon icon='caret-square-down' />
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}
