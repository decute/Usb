var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UsbSetup', 'coolMethod', [arg0]);
};

//This will give information about the list of device connected too
module.exports.findUsbDevices = function (success, error) {
    exec(success, error, 'UsbSetup', 'findUsbDevices', []);
};

//This will give information about whether device is attached or detached
module.exports.isUsbDeviceConnected = function (success, error) {
    exec(success, error, 'UsbSetup', 'isUsbDeviceConnected', []);
};


//with the help of productId and VendorID , usb connection will be setup
module.exports.setUsbDevice = function (productId,vendorId, success, error) {
    exec(success, error, 'UsbSetup', 'setUsbDevice', [productId,vendorId]);
};

//This method will help us to close all the connection.
module.exports.openUsbConnection = function (success, error) {
    exec(success, error, 'UsbSetup', 'openUsbConnection', []);
};

//This method will help us to close all the connection.
module.exports.closeUsbConnection = function (success, error) {
    exec(success, error, 'UsbSetup', 'closeUsbConnection', []);
};

//with the help of productId and VendorID , send Remote command
module.exports.sendCommand = function (success, error) {
    exec(success, error, 'UsbSetup', 'sendCommand', []);
};

//with the help of productId and VendorID , get ASCAN Result
module.exports.getAscan = function (success, error) {
    exec(success, error, 'UsbSetup', 'getAscanResult', []);
};

