import React from "react";
import Itinarery from "../../components/Itinarery/Itinarery";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tab from "../../components/Tab/Tab";
import Day from "../../components/Day/Day";
import Card from "../../components/Card/Card";
import Route from "../../components/Route/Route";
import ReactTable from "react-table";
import naraData from "../../nara";

import {
  MdDirectionsWalk,
  MdDirectionsTransit,
  MdRestaurant
} from "react-icons/md";

import "react-table/react-table.css";

class Nara extends React.Component {
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
    nara: [
      {
        day: 1,
        date: "23/10",
        description: "Tsukiji Fish Market...Shinjuku"
      }
    ]
  };

  handleActiveIndex = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { nara, activeIndex, columns } = this.state;

    return (
      <div className="container">
        <Itinarery>
          <Dropdown day="1" dates={nara} getIndex={this.handleActiveIndex} />
          <Tab activeIndex={activeIndex}>
            <Day day="1">
              <ReactTable data={naraData[0].fields} columns={columns} />
            </Day>
          </Tab>
        </Itinarery>
      </div>
    );
  }
}

export default Nara;
