const wsAddress: string = `wss://events-stream.herokuapp.com/`;

const ws = new WebSocket(wsAddress);

ws.onopen = event => {
  ws.send("connected");
  console.log("Connection opened at ", Date());
};

export default ws;
