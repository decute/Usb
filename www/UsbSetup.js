var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UsbSetup', 'coolMethod', [arg0]);
};

//This will give information about the list of device connected too
module.exports.findUsbDevices = function (success, error) {
    exec(success, error, 'UsbSetup', 'findUsbDevices', []);
};