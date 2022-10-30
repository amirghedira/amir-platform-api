const Slack = require('node-slack');
const slack = new Slack('https://hooks.slack.com/services/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', {});

const sendSlackMessage = (message) => {
    slack.send({
        text: message,
        channel: '#amir-platform-api',
        username: 'amir-platform-api'
    });
}

module.exports = sendSlackMessage