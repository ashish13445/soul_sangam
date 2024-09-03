export default {
    install(app) {
        app.config.globalProperties.$geolocation = {
            getCurrentLocation(successCallback, errorCallback) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
                } else {
                    console.error("Geolocation is not supported by this browser.");
                    if (errorCallback) errorCallback({ message: "Geolocation not supported" });
                }
            }
        };
    }
    
};
