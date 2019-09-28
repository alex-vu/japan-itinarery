import React from "react";
import Itinarery from "../../components/Itinarery/Itinarery";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tab from "../../components/Tab/Tab";
import Day from "../../components/Day/Day";
import Card from "../../components/Card/Card";
import Route from "../../components/Route/Route";
import ReactTable from "react-table";
import tokyoData from "../../tokyo";

import {
  MdDirectionsWalk,
  MdDirectionsTransit,
  MdRestaurant
} from "react-icons/md";

import "react-table/react-table.css";

class Home extends React.Component {
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
    tokyo: [
      {
        day: 1,
        date: "23/10",
        description: "Tsukiji Fish Market...Shinjuku"
      },
      {
        day: 2,
        date: "24/10",
        description: "Meiji Shrine...Shibuya"
      },
      {
        day: 3,
        date: "25/10",
        description: "Sensoji Temple...Asakusa"
      },
      {
        day: 4,
        date: "26/10",
        description: "Imperial Palace...Tokyo Tower...Chiyoda"
      },
      {
        day: 5,
        date: "27/10",
        description: "Team Lab Museum...Odaiba"
      },
      {
        day: 6,
        date: "28/10",
        description: "Ginza..."
      },
      {
        day: 7,
        date: "29/10",
        description: "Meiji Shrine...Shinjuku"
      },
      {
        day: 8,
        date: "30/10",
        description: "Meiji Shrine...Shinjuku"
      }
    ]
  };

  handleActiveIndex = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { tokyo, activeIndex, columns } = this.state;

    return (
      <div className="container">
        <Itinarery>
          <Dropdown day="1" dates={tokyo} getIndex={this.handleActiveIndex} />
          <Tab activeIndex={activeIndex}>
            <Day day="1">
              <ReactTable data={tokyoData[0].fields} columns={columns} />
            </Day>
            {/* <Day day="1">
              <Card time="8:30" timeperiod="am" location="Leave Hotel" />
              <Route directions="30 mins">
                <MdDirectionsTransit />
              </Route>
              <Card
                time="9:00"
                timeperiod="am"
                location="Tsukiji Fish Market"
                timesuggest="2 hours"
              />
              <Route directions="3 mins">
                <MdDirectionsWalk />
              </Route>
              <Card time="11:00" timeperiod="am" location="Lunch Time" />
              <Route directions="1-2 hours break">
                <MdRestaurant />
              </Route>
              <Card time="12:30" timeperiod="pm" location="Take Metro" />
              <Route directions="25 mins">
                <MdDirectionsTransit />
              </Route>
              <Card
                time="1:00"
                timeperiod="pm"
                location="Gyoen Garden"
                timesuggest="1-2 hours"
              />
              <Route directions="16 mins" metro="Marunouchi Line">
                <MdDirectionsTransit />
              </Route>
              <Card
                time="2:30"
                timeperiod="pm"
                location="Tokyo Metropolitain"
                timesuggest="1-2 hours"
              />
              <Route directions="13 mins" metro="Marunouchi Line">
                <MdDirectionsTransit />
              </Route>
              <Card
                time="3:30"
                timeperiod="pm"
                location="Isetan Department Store"
                timesuggest="1-2 hours"
              />
              <Route directions="4 mins">
                <MdDirectionsWalk />
              </Route>
              <Card
                time="5:00"
                timeperiod="pm"
                location="Walk Around Shinjuku"
                timesuggest="1-2 hours"
              />
              <Route directions="4 mins">
                <MdDirectionsWalk />
              </Route>
              <Card
                time="6:00"
                timeperiod="pm"
                location="Hang out at Golden Gai/ Omoide Yokocho (night street)"
                timesuggest="1-2 hours"
              />
            </Day> */}

            <Day day="2">
              <ReactTable data={tokyoData[1].fields} columns={columns} />
            </Day>

            <Day day="3">
              <ReactTable data={tokyoData[2].fields} columns={columns} />
            </Day>

            <Day day="4">
              <ReactTable data={tokyoData[3].fields} columns={columns} />
            </Day>

            <Day day="5">
              <ReactTable data={tokyoData[4].fields} columns={columns} />
            </Day>

            <Day day="6">
              <ReactTable data={tokyoData[5].fields} columns={columns} />
            </Day>

            <Day day="7">
              <ReactTable data={tokyoData[6].fields} columns={columns} />
            </Day>
            <Day day="8">
              <ReactTable data={tokyoData[7].fields} columns={columns} />
            </Day>
          </Tab>
        </Itinarery>
      </div>
    );
  }
}

export default Home;
