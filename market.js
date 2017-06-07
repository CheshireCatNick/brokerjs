'use strict';
const bitcoinRate = require('./data/bitcoinRate');
const Broker = require('./broker/NBroker');

const broker = new Broker(1000);
console.log(broker.asset);

console.log(bitcoinRate);










