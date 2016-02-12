//Set Android minSdkVersion so it matches the facebook plugin
App.setPreference('android-minSdkVersion', '15');

App.configurePlugin('cordova-plugin-facebook4', {
  APP_ID: '1594557434131117',
  APP_NAME: 'Waited'
});