const Slack = require('node-slack');
const slack = new Slack(`https://hooks.slack.com/services/${process.env.SLACK_TOKEN}`, {});

const sendSlackMessage = (message) => {
    if (process.env.ENV != 'production')
        return
    slack.send({
        text: message,
        channel: '#amir-platform-api',
        username: 'amir-platform-api'
    });
}

module.exports = sendSlackMessage