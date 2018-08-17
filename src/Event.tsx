import * as React from 'react';
import { EventData } from './IEventData';

interface Props {
  event: EventData;
}

const Event = ({ event }: Props) => (
  <li key={event.date} className={'event'}>
    <img src={event.logo} width="100%" height="100%" />
    <span>{event.name}</span>
    <span>{`${event.value} ${event.unit}`}</span>
    <span>{new Date(Date.parse(event.date)).toLocaleString('en-US')}</span>
  </li>
);

export default Event;
