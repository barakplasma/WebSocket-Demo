import * as React from 'react';
// import { registerObserver } from 'react-perf-devtool';

import { EventData } from './IEventData';
import webSocketController from './websocket/websocketController';

import './App.css';

import Event from './Event';

interface AppState {
  eventData: EventData[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      eventData: []
    };
    // registerObserver();
    this.handleNewEvent = this.handleNewEvent.bind(this);

    webSocketController(this.handleNewEvent);
  }

  handleNewEvent(newEvent: EventData) {
    // console.log(newEvent); // uncomment to view stream of messages in console
    // console.log(this.state.eventData);

    this.setState({
      eventData: [...this.state.eventData, newEvent]
    });
  }

  render() {
    return (
      <div className="App">
        <ul className="EventContainer">
          {this.state.eventData.slice(-10).map(event => (
            <Event event={event} key={event.date} />
          ))}
        </ul>
        <div className="counter">Count of Events: {this.state.eventData.length}</div>
      </div>
    );
  }
}

export default App;
