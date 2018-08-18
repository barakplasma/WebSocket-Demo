import * as React from 'react';
import { EventData } from './IEventData';

interface Props {
  event: EventData;
}

const Event = ({ event }: Props) => (
  <li className={'event'}>
    <img src={event.logo} width="100%" height="100%" />
    <span>{event.name}</span>
    <span className="event_value">{`${event.value} ${event.unit}`}</span>
    <span className="event_date">{new Date(event.date).toLocaleString('en-US')}</span>
  </li>
);

export default Event;
