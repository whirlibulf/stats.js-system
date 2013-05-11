var Stats = require('stats.js');

function System() {
  this.updateStats = new Stats();
  this.renderStats = new Stats();

  this.updateStats.domElement.style.position = 'absolute';
  this.updateStats.domElement.style.top = '0px';
  this.updateStats.domElement.style.right = '0px';

  this.renderStats.domElement.style.position = 'absolute';
  this.renderStats.domElement.style.top = '0px';
  this.renderStats.domElement.style.right = '80px';

  document.body.appendChild(this.updateStats.domElement);
  document.body.appendChild(this.renderStats.domElement);
}

System.prototype.init = function (engine) {
  var that = this;

  console.log('Stats.js system loaded');

  engine.on('updateBegin', function () {
    that.updateStats.begin();
  });

  engine.on('updateEnd', function () {
    that.updateStats.end();
  });

  engine.on('renderBegin', function () {
    that.renderStats.begin();
  });

  engine.on('renderEnd', function () {
    that.renderStats.end();
  });
};
