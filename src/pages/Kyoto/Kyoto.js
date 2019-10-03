import React from "react";
import Itinarery from "../../components/Itinarery/Itinarery";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tab from "../../components/Tab/Tab";
import Day from "../../components/Day/Day";
import Card from "../../components/Card/Card";
import Route from "../../components/Route/Route";
import ReactTable from "react-table";
import kyotoData from "../../kyoto";

import {
  MdDirectionsWalk,
  MdDirectionsTransit,
  MdRestaurant
} from "react-icons/md";

import "react-table/react-table.css";

class Kyoto extends React.Component {
  state = {
    columns: [
      {
        Header: "Schedule",
        accessor: "itinerary.schedule" // String-based value accessors!
      },
      {
        Header: "Location",
        accessor: "itinerary.location",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      }
    ],
    activeIndex: 0,
    kyoto: [
      {
        day: 1,
        date: "1/11",
        description: ""
      },
      {
        day: 2,
        date: "2/11",
        description: ""
      },
      {
        day: 3,
        date: "3/11",
        description: ""
      },
      {
        day: 4,
        date: "4/11",
        description: ""
      }
    ]
  };

  handleActiveIndex = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { kyoto, activeIndex, columns } = this.state;

    return (
      <div className="container">
        <Itinarery>
          <Dropdown day="1" dates={kyoto} getIndex={this.handleActiveIndex} />
          <Tab activeIndex={activeIndex}>
            <Day day="1">
              <ReactTable data={kyotoData[0].fields} columns={columns} />
            </Day>
            <Day day="2">
              <ReactTable data={kyotoData[1].fields} columns={columns} />
            </Day>

            <Day day="3">
              <ReactTable data={kyotoData[2].fields} columns={columns} />
            </Day>

            <Day day="4">
              <ReactTable data={kyotoData[3].fields} columns={columns} />
            </Day>
          </Tab>
        </Itinarery>
      </div>
    );
  }
}

export default Kyoto;
