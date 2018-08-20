let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.base.js');

exports.config = merge(wdioConfBase.config, {

  capabilities: [{
    browserName:   'chrome',
    chromeOptions: {
      args: ['--reduce-security-for-testing']
    }
  }],

  before: function (capabilities, specs) {

    let chai = require('chai');
    global.expect = chai.expect;

    browser.timeouts('page load', 60000);
    browser.params = this.params = [];
  },

});
