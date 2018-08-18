import * as React from 'react';
// import { registerObserver } from 'react-perf-devtool';

import { EventData } from './IEventData';
import webSocketController from './websocket/websocketController';

import './App.css';

import Event from './Event';

interface AppState {
  eventData: EventData[];
  eventsToDisplay: EventData[];
  filterForEvents: string | false;
  limitResultsInMemory: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      eventData: [],
      eventsToDisplay: [],
      filterForEvents: false,
      limitResultsInMemory: true
    };
    // registerObserver();
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.toggleOnLimit = this.toggleOnLimit.bind(this);

    webSocketController(this.handleNewEvent);
  }

  handleNewEvent(newEvent: EventData) {
    const previousEventsToSaveInMemory = this.state.limitResultsInMemory
      ? this.state.eventData.slice(-999)
      : this.state.eventData;

    this.setState({
      eventData: [...previousEventsToSaveInMemory, newEvent]
    });

    this.sliceAndFilterEvents();
  }

  setEventsToDisplay = (eventsToDisplay: EventData[]) =>
    this.setState({
      eventsToDisplay: eventsToDisplay
    })

  filterEvents = (filter: string, eventsToFilter: EventData[]): EventData[] =>
    eventsToFilter.filter(event =>
      event.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )

  displayManagableAmountOfEvents = (events: EventData[]): EventData[] =>
    events.slice(-10)

  sliceAndFilterEvents() {
    const shouldFilter = this.state.filterForEvents;

    if (typeof shouldFilter === 'string') {
      this.setEventsToDisplay(
        this.filterEvents(shouldFilter, this.state.eventData)
      );
    } else {
      this.setEventsToDisplay(this.state.eventData);
    }
  }

  handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterForEvents: inputValue.length > 0 ? inputValue : false
    });
  }

  toggleOnLimit(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.checked;
    this.setState({ limitResultsInMemory: inputValue });
  }

  render() {
    return (
      <div className="App">
        <ul className="EventContainer">
          <li>
            🔎
            <input
              type="search"
              name="filter"
              id="filter"
              onChange={this.handleFilterChange}
            />
          </li>
          {this.displayManagableAmountOfEvents(this.state.eventsToDisplay).map(
            event => (
              <Event
                event={event}
                key={event.date}
                filter={this.state.filterForEvents}
              />
            )
          )}
        </ul>
        <div className="counter">
          Count of Events: {this.state.eventsToDisplay.length}
          <div>
            Limit Events In Memory to Improve Performance
            <input
              type="checkbox"
              name="limitOn"
              id="limitOn"
              onChange={this.toggleOnLimit}
              checked={this.state.limitResultsInMemory}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
