import React from "react";
import { MdExpandMore } from "react-icons/md";
import Loading from "../Loading/Loading";
import "./Dropdown.scss";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  state = {
    isOpen: false,
    day: 1 && this.props.day
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  handleClick = (e, index, item) => {
    e.preventDefault();
    this.setState({ day: item.day, isOpen: false });
    this.props.getIndex(index);
  };

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderDate = () => {
    return this.props.dates.map((item, index) => {
      return (
        <li className="dropdown-list" key={index}>
          <a href="/" onClick={e => this.handleClick(e, index, item)}>
            <div className="dropdown-date">{item.date}</div>
            <div className="dropdown-day">
              <span>Day {item.day}</span>
              <div className="description">{item.description}</div>
            </div>
          </a>
        </li>
      );
    });
  };

  render() {
    let className = this.state.isOpen ? "active show" : "hidden";

    return (
      <div ref={this.setWrapperRef} className="dropdown">
        <button
          className="dropdown-header d-flex space-between"
          onClick={this.toggleDropdown}
        >
          <span>
            Day {this.state.day}
            {/* {this.props.dates[0].date} */}
          </span>
          <div className="flex-center">
            <span className="text-capitalize">Change</span>
            <MdExpandMore />
          </div>
        </button>

        <ul className={`dropdown-body ${className}`}>
          {this.props.dates ? this.renderDate() : <Loading />}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
