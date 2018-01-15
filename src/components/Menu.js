import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class Menu extends Component{
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }
  menuItemClick(){
    this.setState({
      active:false
    });
  }
  render(){
    const btnClass = classNames("button-container", this.state.active ? "active" : " ");
    const menuClass= classNames("overlay", this.state.active ? "open" : " ");
    return (
      <div>
        <div className={btnClass} onClick={() => this.handleClick()} >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
        <div className={menuClass} id="overlay">
          <nav className="overlay-menu">
            <ul>
              <li ><Link to="/" onClick={() => this.menuItemClick()}>HOME</Link></li>
              <li><Link to="/portfolio" onClick={() => this.menuItemClick()}>PORTFOLIO</Link></li>
              <li><Link to="/skills" onClick={() =>this.menuItemClick()}>SKILLS</Link></li>
              <li><Link to="/contacts" onClick={() => this.menuItemClick()}>CONTACTS</Link></li>
            </ul>
          </nav>
          <div className="policies"><Link to="/cookie-policy" onClick={() => this.menuItemClick()}>Cookie Policy</Link> | <Link className="privacy" to="privacy-policy" onClick={() => this.menuItemClick()}>Privacy Policy</Link></div>
          <div className="copyright">Copyright &copy;2017 <strong>Fabio Picciau</strong> - all rights reserved </div>
        </div>
      </div>
    );
  }
}

export { Menu };
