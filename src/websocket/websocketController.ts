import ws from "./openConnection";
import connectToWebSocketMessageStream from "./connectToWebSocketMessageStream";

import { IEventReceiver } from "../IEventData";

const webSocketController = (connectToWebsocket: IEventReceiver): void => {
  connectToWebSocketMessageStream(ws, connectToWebsocket);
};

export default webSocketController;
