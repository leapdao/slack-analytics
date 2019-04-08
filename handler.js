"use strict";

const fetch = require('node-fetch');

module.exports.slack = (event, context, callback) => {
  fetch(`https://slack.com/api/users.list?token=${process.env.SLACK_TOKEN}`)
    .then(response => response.json())
    .then(data => {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        data: data.members.length
      };
      callback(null, response);
    });
};
