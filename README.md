# Strapi with socket.io application

This application has a custom controller which adds "likes" to a user profile.
When a like is received for a profile, the user receives a notification via socket.io


strapi-plugin-socket-io will create the socket server in strapi
```
npm i -s strapi-plugin-socket-io
```

socket.io-client is used on the front end application to connect with the socket.io server
```
npm i -s socket.io-client
```


```
const io = require("socket.io-client");
const API_URL = "http://localhost:1337/";
const token = "JWT HERE";

// Handshake required, token will be verified against strapi
const socket = io.connect(API_URL, {
    query: { token },
});

socket.emit('subscribe', 'mynotifications');

// <user-id> is the id of the user, the event on the strapi is bind to this id 
// so that only the relevant user receives the notification 
socket.on("my_notification_<user-id>", (data) => {
    console.log("RECEIVED NEW NOTIFICATION");
    console.log(data);
});
```