"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
    process.nextTick(() => {
        var io = require('socket.io')(strapi.server);
        io.on('connection', async function (socket) {

            console.log(`a user connected`)
            // send message on user connection
            socket.emit('hello', { message: "hello" });


            // listen for user diconnect
            socket.on('disconnect', () => {
                console.log('a user disconnected')
            });
        });
        strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
        // strapi.emitToAllUsers = food => io.emit('food_ready', food);
    })

};