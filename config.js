module.exports = {
  'public': '/Users/ann/Documents/Netease/epay-loan',
  port: '80',
  ftl: {
    base: '',
    global: {
 
    },
    'productDetail_000008_new.ftl': function(req, res) {
      return {
        saleActivityMap: {
          "000008": {
            activityStatus: 'actived'
          }
        }
      }
    }
 
  },
  mock: [{
    url: '/request',
    method: 'get',
    status: '200',
    header: {
 
    },
    response: function(req, res) {
      return {
        a: 1,
        B: 2
      }
    }
  }],
  proxy: [{
    path: '/proxy1',
    target: 'http://localhost:3000'
    }
  ]
}