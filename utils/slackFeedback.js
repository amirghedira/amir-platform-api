const Slack = require('node-slack');
const slack = new Slack(`https://hooks.slack.com/services/${process.env.FEEDBACK_SLACK_TOKEN}`, {});

const sendSlackFeedback = (message) => {
    slack.send({
        text: message,
        channel: '#feedback',
        username: 'anonymos'
    });
}

module.exports = sendSlackFeedback