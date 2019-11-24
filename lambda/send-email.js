const emailClient = require("@sendgrid/mail");
emailClient.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
    const { body } = event;
    if (!body) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: "Missing request body"
            })
        });
    }
    const { from, name, text } = JSON.parse(body);
    const missingParams = [];
    if (!from) {
        missingParams.push("from");
    }
    if (!name) {
        missingParams.push("name");
    }
    if (!text) {
        missingParams.push("text");
    }
    if (missingParams.length > 0) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: `Missing request body params: ${missingParams.join(
                    ", "
                )}`
            })
        });
    }
    try {
        await emailClient.send({
            to: process.env.TO_ADDRESS,
            from,
            subject: `Richiesta di informazioni da ${name}`,
            text
        });
        callback(null, { statusCode: 204 });
    } catch (error) {
        console.log("error sending email", error);
        callback(null, { statusCode: 500 });
    }
};
