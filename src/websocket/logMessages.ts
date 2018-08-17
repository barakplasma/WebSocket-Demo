const logMessages = (ws: WebSocket) => {
  const extractData = (ev: MessageEvent): string => ev.data;
  const logData = (data: string) => console.log(data);

  ws.onmessage = ev => {
    const data = extractData(ev);
    logData(data);
  };
};

export default logMessages;
