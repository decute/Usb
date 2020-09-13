package cordova.plugin.usbsetup;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.hardware.usb.UsbDevice;
import android.hardware.usb.UsbDeviceConnection;
import android.hardware.usb.UsbEndpoint;
import android.hardware.usb.UsbInterface;
import android.hardware.usb.UsbManager;

import java.util.HashMap;
import java.util.Iterator;

/**
 * This class echoes a string called from JavaScript.
 */
public class UsbSetup extends CordovaPlugin {

    HashMap<String, UsbDevice> connectedDevices = null;
     /* USB system service */
    private UsbManager mUsbManager;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void isUsbDeviceConnected(CallbackContext callbackContext) {
            callbackContext.success("device is conneted");
            callbackContext.error("Expected one non-empty string argument.");
    }

    private void findUsbDevices(CallbackContext callbackContext) {

            mUsbManager = (UsbManager) cordova.getActivity().getSystemService(Context.USB_SERVICE);
            connectedDevices = mUsbManager.getDeviceList();

            if (connectedDevices.isEmpty()) {
                callbackContext.success("No Devices Currently Connected");
            }else{
            Iterator<UsbDevice> deviceIterator = connectedDevices.values().iterator();
            JSONObject device = null;
            JSONArray devices = new JSONArray();
            while (deviceIterator.hasNext()) {
                    UsbDevice device = deviceIterator.next();  
                    try{
                    device = new JSONObject();    
                    device.put("DeviceID", device.getDeviceId());
                    device.put("DeviceName", device.getDeviceName());
                    device.put("DeviceClass", device.getDeviceClass());
                    device.put("DeviceSubClass", device.DeviceSubClass());
                    device.put("VendorID", device.getVendorId());
                    device.put("ProductID", device.getProductId());
                    device.put("InterfaceCount", device.getInterfaceCount());    
                    devices.put(device); 
                    } catch (JSONException e) {
                     // TODO Auto-generated catch block                        
                       callbackContext.error("Failed to bind Device Information" + e.printStackTrace());
                    } 
              }
                callbackContext.success(devices);
            }
    }


}
