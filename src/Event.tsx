import * as React from 'react';
import { EventData } from './IEventData';

interface Props {
  event: EventData;
  filter: string | false;
}

const insertBoldForFilter = (filter: string, name: string) => {
  return name
    .replace(new RegExp(filter, 'ig'), `,$&,`)
    .split(',')
    .map(
      (substr, i) =>
        substr.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ? (
          <span className="boldSubstring" key={i}>
            {substr}
          </span>
        ) : (
          <span key={i}>{substr}</span>
        )
    );
};

const Event = ({ event, filter }: Props) => (
  <li className={'event'}>
    <img src={event.logo} width="100%" height="100%" />
    <span className="event_name">
      {typeof filter === 'string'
        ? insertBoldForFilter(filter, event.name)
        : event.name}
    </span>
    <span className="event_value">{`${event.value} ${event.unit}`}</span>
    <span className="event_date">
      {/* I prefer using the native Date.toLocaleString('en-US'),
       but manual formatting is 100x faster https://jsperf.com/date-formatting-library-performance */}
      {`${event.date.substr(5, 2)}/${event.date.substr(
        8,
        2
      )}/${event.date.substr(0, 4)}, ${
        Number.parseInt(event.date.substr(11, 2), 10) < 11
          ? event.date.substr(11, 2)
          : Number.parseInt(event.date.substr(11, 2), 10) - 12
      }${event.date.substr(13, 6)} ${
        Number.parseInt(event.date.substr(11, 2), 10) < 11 ? 'AM' : 'PM'
      }`}
    </span>
  </li>
);

export default Event;
