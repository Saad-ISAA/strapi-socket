'use strict';


module.exports = {
    lifecycles: {
        async afterCreate(data) {
            strapi.StrapIO.io.in('mynotifications').emit('my_notification_' + data.receiver.id, data)
        }
    },
};
