import ws from './openConnection';
import connectToWebSocketMessageStream from './connectToWebSocketMessageStream';

import { EventReceiver } from '../IEventData';

const webSocketController = (connectToWebsocket: EventReceiver): void => {
  connectToWebSocketMessageStream(ws, connectToWebsocket);
};

export default webSocketController;
