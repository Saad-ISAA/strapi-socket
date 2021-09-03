'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
    process.nextTick(() => {
        strapi.StrapIO = new (require("strapio"))(strapi);
        // var io = require('socket.io')(strapi.server);
        // io.on('connection', async function (socket) {
        //     console.log(`a user connected`)
        //     socket.emit('hello', { message: "hello" });

        //     socket.on('disconnect', () => {
        //         console.log('a user disconnected')
        //     });
        // });
        // strapi.io = io;
    })
};
