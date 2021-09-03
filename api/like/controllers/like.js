'use strict';


module.exports = {
    async update(ctx) {
        const { id } = ctx.params;
        const current_user = ctx.state.user;
        let user = await strapi.plugins['users-permissions'].services.user.fetch({ id })
        user.liked_by.push(current_user)
        await strapi.plugins['users-permissions'].services.user.edit({ id }, { liked_by: user.liked_by });
        await strapi.services.notification.create({
            title: "New Notification", body: current_user.username + " has liked your profile",
            sender: current_user, receiver: { id }
        })

        return { "status": "success" }
    },
};
