# Strapi application

A quick description of your strapi application
```
const io = require("socket.io-client");
const API_URL = "http://localhost:1337/";
const token = "JWT HERE";

// Handshake required, token will be verified against strapi
const socket = io.connect(API_URL, {
    query: { token },
});

socket.emit('subscribe', 'mynotifications');
socket.emit('subscribe', 'notification');

socket.on("create", async (data) => {
    //do something
    console.log("CREATE");
    console.log(data);
});
socket.on("update", (data) => {
    // do something
    console.log("UPDATE");
    console.log(data);
});
socket.on("delete", (data) => {
    // do something
    console.log("DELETE");
    console.log(data);
});
socket.on("got_notification", (data) => {
    // do something
    console.log("SAAD");
    console.log(data);
});
```