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
      {new Date(event.date).toLocaleString('en-US')}
    </span>
  </li>
);

export default Event;
