import { EventReceiver } from '../IEventData';

const connectToWebSocketMessageStream = (
  ws: WebSocket,
  callback: EventReceiver
) => {
  ws.onmessage = ev => {
    callback(JSON.parse(ev.data));
  };
};

export default connectToWebSocketMessageStream;
