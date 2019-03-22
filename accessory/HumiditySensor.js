'use strict';

const {Accessory}  = require('../util/Accessory');
const {addCurrentRelativeHumidityCharacteristic} = require('./characteristic/Numeric');
const {addBatteryWarningCharacteristic} = require('./characteristic/Battery');

class HumiditySensorAccessory extends Accessory {
    _getPrimaryService() {
        this._log.debug(`Creating humidity sensor service for ${this.name}`);
        let primaryService = new this.Service.HumiditySensor(this.name);
        addCurrentRelativeHumidityCharacteristic.bind(this)(primaryService);
        addBatteryWarningCharacteristic.bind(this)(primaryService);
        return primaryService;
    }
}

const type = "humidity";

function createAccessory(platform, config) {
    return new HumiditySensorAccessory(platform, config, 'Humidity Sensor');
}

module.exports = {createAccessory, type};

