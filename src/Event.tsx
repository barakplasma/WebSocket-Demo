import * as React from "react";
import { IEventData } from "./IEventData";

interface Props {
  event: IEventData;
}

const Event = ({ event }: Props) => <li>{event.name}</li>;

export default Event;
