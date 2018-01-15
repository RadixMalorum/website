import React, {Component} from 'react';
import classNames from 'classnames';

export default class Accordion extends Component{
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  AccordionClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render(){
    const accordionClass = classNames("section", this.state.open ? "open" : " ");
    return (
      <div className={accordionClass}>
        <button>toggle</button>
        <div className="sectionhead" onClick={() => this.AccordionClick()}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
