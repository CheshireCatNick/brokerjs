'use strict';

class NBroker {




  get asset() { 
    return this._asset;
  }
  constructor(asset) {
    this._asset = asset;

  }
}

module.exports = NBroker;