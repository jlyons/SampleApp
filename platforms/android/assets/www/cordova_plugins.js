cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.jason.cameraplugin/www/CameraConstants.js",
        "id": "com.jason.cameraplugin.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/com.jason.cameraplugin/www/CameraPopoverOptions.js",
        "id": "com.jason.cameraplugin.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/com.jason.cameraplugin/www/Camera.js",
        "id": "com.jason.cameraplugin.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/com.jason.cameraplugin/www/CameraPopoverHandle.js",
        "id": "com.jason.cameraplugin.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jason.cameraplugin": "1.0.0",
    "cordova-plugin-compat": "1.0.0"
}
// BOTTOM OF METADATA
});