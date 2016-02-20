App.info({
  id: 'com.stopped.app',
  name: 'Stopped Demo',
  description: 'A demo repo for the stopped bug',
  version: '1.5.0'
});


//Deployment Target
App.setPreference('deployment-target', '8.0');

//Set Android minSdkVersion so it matches the facebook plugin
App.setPreference('android-minSdkVersion', '15');

//Fixed orientation
App.setPreference('Orientation', 'portrait');

//Remove splash screen spinner
App.setPreference('ShowSplashScreenSpinner', 'false');

//Allows keyboard to be focused
App.setPreference('KeyboardDisplayRequiresUserAction', 'false');


//Allow domains 
//App.accessRule('*'); 
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

// App.configurePlugin('cordova-plugin-facebook4', {
//   APP_ID: '1594557434131117',
//   APP_NAME: 'Waited'
// });

// App.configurePlugin('phonegap-facebook-plugin', {
//   APP_ID: '1594557434131117',
//   APP_NAME: 'Waited'
// });

// App.configurePlugin('phonegap-facebook-plugin', {
//   APP_ID: '1594557434131117',
//   APP_NAME: 'Waited'
// });

App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1594557434131117',
  APP_NAME: 'Waited'
});

