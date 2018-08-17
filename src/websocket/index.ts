import ws from "./openConnection";
import logMessages from "./logMessages";

const startWebsocketHandler = () => {
  logMessages(ws);
};

export default startWebsocketHandler;
