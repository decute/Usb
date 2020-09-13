var exec = require('cordova/exec');

module.exec.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UsbSetup', 'coolMethod', [arg0]);
};

//This will give information about the list of device connected too
module.exec.findUsbDevices = function (success, error) {
    exec(success, error, 'UsbSetup', 'findUsbDevices', []);
};



