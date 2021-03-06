# Web Socket Demo in React
by Michael Salaverry

UPDATE: The websocket event server I was using is currently down, and I haven't had a chance to rewrite one for myself. So you won't see events at the moment.

## Features
This project uses a publicy available web socket provider to get fake sensor readings.
It displays the events in real time.
The search field allows you to filter events by substring in the name (case-insensitive).

### Implementation details
1. I am aware that there are performance issues for some devices (like my Samsung S7 smartphone) above 1000 events in memory. Eventually, memory usage will crash the tab without some kind of limit. There is a checkbox to add or remove a 1000 event limit on demand.
1. The web socket data provider slows down after a few thousand events, and slows down to almost 0 after ~10k events
1. I considered using a different data structure to improve the array manipulation, but keeping it simple seemed better.
1. I really enjoyed using CSS Grid for this project, it is much more intuitive than flexbox
1. I am also aware that the datetime locale formatter is CPU intensive, but it seems short sighted to rewrite it to parse the string manually. To reduce dependencies, I used the native date formatter, but easy performance improvements (I wrote a jsperf test to check) are listed in [issue #1](https://github.com/barakplasma/WebSocket-Demo/issues/1)

### Future ideas
1. It would be fun to add some reducers on the event arrays which would update the averages for each measurement. Some kind of dashboard like meter for instance.
1. A React Native Version is mostly complete: https://snack.expo.io/@barakplasma/websocket-react-native-demo (I throttled it so that the svg images would load since they don't cache the same way as on a browser).
