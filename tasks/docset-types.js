module.exports = [
  {
    match: {
      name: 'can.util.bind'
    },
    type: null
  },
  {
    match: {
      type: 'typedef',
      parent: 'can.events'
    },
    type: 'Event'
  },
  {
    match: {
      type: 'page',
      parent: /plugins$|can\.(?:Mustache|stache)\.pages/
    },
    type: 'Plugin'
  },
  {
    match: {
      type: 'page',
      name: 'can.event'
    },
    type: 'Plugin'
  },
  {
    match: {
      parent: 'guides'
    },
    type: 'Guide'
  }
];
