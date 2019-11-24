const emailClient = require("@sendgrid/mail");
emailClient.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
    const {
        body: { from, name, text }
    } = event;
    if (!from || !name || !text) {
        return callback({
            statusCode: 400
        });
    }
    try {
        await emailClient.send({
            to: process.env.TO_ADDRESS,
            from,
            subject: `Richiesta di informazioni da ${name}`,
            text
        });
        callback({ statusCode: 204 });
    } catch (error) {
        console.log("error sending email", error);
        callback({ statusCode: 500 });
    }
};
