import * as React from "react";

import { IEventData } from "./IEventData";
import webSocketController from "./websocket/websocketController";

import "./App.css";

import Event from "./Event";

interface AppState {
  eventData: IEventData[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      eventData: []
    };

    this.handleNewEvent = this.handleNewEvent.bind(this);

    webSocketController(this.handleNewEvent);
  }

  handleNewEvent(newEvent: IEventData) {
    // console.log(newEvent); // uncomment to view stream of messages in console
    // console.log(this.state.eventData);

    // to prevent memory issues, only saves the last 1000 events
    // to save memory, we can use a data structure here
    this.setState({
      eventData: [...this.state.eventData.slice(-9), newEvent]
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.eventData.map(event => (
            <Event event={event} key={event.date} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
