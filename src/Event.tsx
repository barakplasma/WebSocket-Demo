import * as React from 'react';
import { EventData } from './IEventData';

interface Props {
  event: EventData;
}

const Event = ({ event }: Props) => <li key={event.date} >{event.name}</li>;

export default Event;
