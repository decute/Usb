var exec = require('cordova/exec');

//This will give information about whether device is attached or detached
module.exec.isUsbDeviceConnected = function (success, error) {
    exec(success, error, 'UsbSetup', 'isUsbDeviceConnected', []);
};

//This will give information about the list of device connected too
module.exec.findUsbDevices = function (success, error) {
    exec(success, error, 'UsbSetup', 'findUsbDevices', []);
};

//with the help of productId and VendorID , usb connection will be setup
module.exec.setUsbDevice = function (productId,vendorId, success, error) {
    exec(success, error, 'UsbSetup', 'setUsbDevice', [productId,vendorId]);
};

//This method will help us to close all the connection.
module.exec.openUsbConnection = function (success, error) {
    exec(success, error, 'UsbSetup', 'openUsbConnection', []);
};

//This method will help us to close all the connection.
module.exec.closeUsbConnection = function (success, error) {
    exec(success, error, 'UsbSetup', 'closeUsbConnection', []);
};

//with the help of productId and VendorID , send Remote command
module.exec.sendCommand = function (success, error) {
    exec(success, error, 'UsbSetup', 'sendCommand', []);
};

//with the help of productId and VendorID , get ASCAN Result
module.exec.getAscan = function (success, error) {
    exec(success, error, 'UsbSetup', 'getAscanResult', []);
};

