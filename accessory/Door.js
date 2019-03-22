'use strict';

const {Accessory} = require('../util/Accessory');
const {addCurrentPositionCharacteristic, addTargetPositionCharacteristic, addPositionStateCharacteristic, addHoldPositionCharacteristic} = require('./characteristic/CurrentTargetPosition');

class DoorAccessory extends Accessory {
    _getPrimaryService() {
        this._log.debug(`Creating door service for ${this.name}`);
        let primaryService = new this.Service.Door(this.name);
        addCurrentPositionCharacteristic.bind(this)(primaryService);
        addTargetPositionCharacteristic.bind(this)(primaryService);
        addPositionStateCharacteristic.bind(this)(primaryService);
        addHoldPositionCharacteristic.bind(this)(primaryService);
        return primaryService;
    }
}

const type = "door";

function createAccessory(platform, config) {
    return new DoorAccessory(platform, config, 'Door');
}

module.exports = {createAccessory, type};

