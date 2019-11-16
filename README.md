# Bungi
"Take the leap"

### Getting Started
Make sure you have the latest version of node 
```
nvm install 12.13.0
```

Download the expo CLI tool
```
npm install expo-cli -g
```

Download and install [Android Studio](https://developer.android.com/studio) to simulate Android OS
* Go to `Preferences` -> `Appearance & Behavior` -> `System Settings` -> `Android SDK`. Click on the "SDK Tools" tab and make sure you have at least one version of the "Android SDK Build-Tools" installed.
* Copy or remember the path listed in the box that says "Android SDK Location."
* Add the following lines to your `~/.bash_profile`
    * `export ANDROID_SDK=/Users/myuser/Library/Android/sdk`
    * `export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH`
* Make sure that you can run `adb` from your terminal.

Download and install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) (if you don't already have it) to simulate iOS
* Open Xcode, then choose `Preferences` from the Xcode menu (or press `⌘+`,). Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

> NOTE: these instructions assume you are running on a Mac. If you are on a Windows machine, you cannot simulate iOS, as it doesn't support XCode.

Download the Expo client on your mobile device if you want to run the application from there.

### Running
1. Run `yarn` to install dependencies
2. Run `yarn start`

A new tab should open in your browser with the Expo client.

* To run the app on your mobile device, select the `tunnel` option in the bottom, left-hand corner and scan the QR code with your Expo app.
* To run the app with the Android emulator, click on `Run on Android device/emulator` and it should automatically open in the Android Studio Emulator. You can also launch into Android by pressing `a` in the terminal where the expo client is running.
* To run the app with the iPhone emulator, run an emulator from XCode and then click on `Run on iOS simulator`. You can also launch into iOS by pressing `i` in the terminal where the expo client is running.


