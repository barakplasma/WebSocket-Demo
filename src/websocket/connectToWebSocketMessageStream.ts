import { IEventReceiver } from "../IEventData";

const connectToWebSocketMessageStream = (
  ws: WebSocket,
  callback: IEventReceiver
) => {
  ws.onmessage = ev => {
    callback(ev.data);
  };
};

export default connectToWebSocketMessageStream;
