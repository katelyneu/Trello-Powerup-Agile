/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

// this is a temp icon, it doesn't render currently
var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';


var boardButtonCallback = function (t) {
  return t.popup({
    title: 'App Functionalities',
    items: [
      {
        text: 'Import CSV',
        callback: function (t) {
          return t.modal({
            url: './import-csv.html',
            accentColor: '#F2D600',
            height: 500,
            fullscreen: true,
            callback: () => console.log('Goodbye.'),
            title: 'Import CSV',
          })
        }
      },
    ]
  });
};

TrelloPowerUp.initialize(
  {
    'board-buttons': function (t, options) {
      return [
        {
          icon: WHITE_ICON,
          text: 'SOME NAME',
          callback: boardButtonCallback
        },
      ];
    },
    'card-badges': function (t, options) {
      return t.get('card', 'shared', 'estimate')
      .then(function(estimate) {
        return [{
          title: 'Estimate',
          text: estimate || 'No Estimate!',
          color: estimate ? null : 'red',
          callback: function(t) {
            return t.popup({
              title: "Estimation",
              url: 'estimate.html',
            });
          }
        }]
      });
    },
    'card-buttons': function(t, options){
      return [{
        text: 'Estimate Size',
      }];
    },
    'card-detail-badges': function(t, options) {
      return [{
        title: 'Estimate',
        color: 'red',
        text: 'No Estimate',
        callback: function(t) {
          return t.popup({
            title: "Estimation",
            url: 'estimate.html',
          });
        }
      }]
    },
    'authorization-status': function (t, options) {
      return t.get('member', 'private', 'token')
        .then(function (token) {
          if (token) {
            return { authorized: true };
          }
          return { authorized: false };
        });
    },
    'show-authorization': function (t, options) {
      // If we want to ask the user to authorize our Power-Up to make full use of the Trello API
      // you'll need to add your API from trello.com/app-key below:
      let trelloAPIKey = '';
      if (trelloAPIKey) {
        return t.popup({
          title: 'My Auth Popup',
          args: { apiKey: trelloAPIKey },
          url: './authorize.html',
          height: 140,
        });
      } else {
        console.log("🙈 Looks like you need to add your API key to the project!");
      }
    }
  },
);

console.log('Loaded by: ' + document.referrer);
