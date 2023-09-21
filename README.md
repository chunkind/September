# 프로잭트 생성

## 프로잭트 생성 실행 명령어들

```
* version 1
npm install -g create-react-native-app
npx create-react-native-app ./
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
npx expo start 치고 w로 실행, 애뮬레이터 있으면 i, a (아이폰, 안드로이드)로 실행 가능

* version 2 (expo 이용)
yarn create expo-app ./
yarn ios
```

## Create React Native App CLI

```
npm install -g create-react-native-app
npx create-react-native-app myProject (혹은 create-react-native-app myProject)
```

## React Native CLI

```
npm install -g react-native-cli
npx react-native init myProject (혹은 react-native init myProject)
```

# 콘솔창에서 Expo Cli 설치, 프로젝트(my-project) 생성하기

```
npm install -g expo cli
npm init my-project
```

# 프로잭트 실행

```
$yarn android
$yarn ios
$yarn web
```

# git에서 다운받고 설치

```
$npm install
$npm start
```

# 푸쉬 알림 관련 라이브러리

```
# 안드로이드
npm i @react-native-firebase/analytics @react-native-firebase/app @react-native-firebase/messaging

# IOS
npm i react-native-push-notification @react-native-community/push-notification-ios

# Typescript
npm i -D @types/react-native-push-notification
npx pod-install

관련 블로그
https://maejing.tistory.com/entry/Android-FCM%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-Push-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
https://jake-seo-dev.tistory.com/295
```

# Error 정리

## FetchError: request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: self signed certificate in certificate chain

```
$ npm config set strict-ssl false
$ yarn config set "strict-ssl" false
$ npm install -g create-react-app

$ which create-react-app
/usr/local/bin/create-react-app
$ rm -rf /usr/local/bin/create-react-app
```

## request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: self signed certificate in certificate chain

```
package.json 에서 "expo": "~49.0.10" => "expo": "^41.0.0" 변경
npm install
npm start
package.json 에서 "expo": "^41.0.0" => "expo": "^49.0.10" 변경
```

## 설치후 안드로이드 에러 :

```
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'septemberfront'.
> Could not determine the dependencies of null.
   > Could not resolve all task dependencies for configuration ':classpath'.
      > Could not resolve com.android.tools.build:gradle:7.4.2.
        Required by:
            project :
         > No matching variant of com.android.tools.build:gradle:7.4.2 was found. The consumer was configured to find a library for use during runtime, compatible with Java 8, packaged as a jar, and its dependencies declared externally, as well as attribute 'org.gradle.plugin.api-version' with value '8.0.1' but:
             - Variant 'apiElements' capability com.android.tools.build:gradle:7.4.2 declares a library, packaged as a jar, and its dependencies declared externally:
                 - Incompatible because this component declares a component for use during compile-time, compatible with Java 11 and the consumer needed a component for use during runtime, compatible with Java 8
                 - Other compatible attribute:
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
             - Variant 'javadocElements' capability com.android.tools.build:gradle:7.4.2 declares a component for use during runtime, and its dependencies declared externally:
                 - Incompatible because this component declares documentation and the consumer needed a library
                 - Other compatible attributes:
                     - Doesn't say anything about its target Java version (required compatibility with Java 8)
                     - Doesn't say anything about its elements (required them packaged as a jar)
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
             - Variant 'runtimeElements' capability com.android.tools.build:gradle:7.4.2 declares a library for use during runtime, packaged as a jar, and its dependencies declared externally:
                 - Incompatible because this component declares a component, compatible with Java 11 and the consumer needed a component, compatible with Java 8
                 - Other compatible attribute:
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
             - Variant 'sourcesElements' capability com.android.tools.build:gradle:7.4.2 declares a component for use during runtime, and its dependencies declared externally:
                 - Incompatible because this component declares documentation and the consumer needed a library
                 - Other compatible attributes:
                     - Doesn't say anything about its target Java version (required compatibility with Java 8)
                     - Doesn't say anything about its elements (required them packaged as a jar)
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
      > Could not resolve com.facebook.react:react-native-gradle-plugin.
        Required by:
            project :
         > No matching variant of project :gradle-plugin was found. The consumer was configured to find a library for use during runtime, compatible with Java 8, packaged as a jar, and its dependencies declared externally, as well as attribute 'org.gradle.plugin.api-version' with value '8.0.1' but:
             - Variant 'apiElements' capability com.facebook.react:react-native-gradle-plugin:unspecified declares a library, packaged as a jar, and its dependencies declared externally:
                 - Incompatible because this component declares a component for use during compile-time, compatible with Java 11 and the consumer needed a component for use during runtime, compatible with Java 8
                 - Other compatible attribute:
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
             - Variant 'mainSourceElements' capability com.facebook.react:react-native-gradle-plugin:unspecified declares a component, and its dependencies declared externally:
                 - Incompatible because this component declares a component of category 'verification' and the consumer needed a library
                 - Other compatible attributes:
                     - Doesn't say anything about its target Java version (required compatibility with Java 8)
                     - Doesn't say anything about its elements (required them packaged as a jar)
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
                     - Doesn't say anything about its usage (required runtime)
             - Variant 'runtimeElements' capability com.facebook.react:react-native-gradle-plugin:unspecified declares a library for use during runtime, packaged as a jar, and its dependencies declared externally:
                 - Incompatible because this component declares a component, compatible with Java 11 and the consumer needed a component, compatible with Java 8
                 - Other compatible attribute:
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
             - Variant 'testResultsElementsForTest' capability com.facebook.react:react-native-gradle-plugin:unspecified:
                 - Incompatible because this component declares a component of category 'verification' and the consumer needed a library
                 - Other compatible attributes:
                     - Doesn't say anything about how its dependencies are found (required its dependencies declared externally)
                     - Doesn't say anything about its target Java version (required compatibility with Java 8)
                     - Doesn't say anything about its elements (required them packaged as a jar)
                     - Doesn't say anything about org.gradle.plugin.api-version (required '8.0.1')
                     - Doesn't say anything about its usage (required runtime)

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* 해결 : Path 설정
/usr/local/opt/openjdk@11/bin
/Library/Java/JavaVirtualMachines

vi ~/.bash_profile
source ~/.bash_profile

```

## yarn android 하면 에러남..

```
CommandError: No Android connected device found, and no emulators could be started automatically.
Please connect a device or create an emulator (https://docs.expo.dev/workflow/android-studio-emulator).
Then follow the instructions here to enable USB debugging:
https://developer.android.com/studio/run/device.html#developer-device-options. If you are using Genymotion go to Settings -> ADB, select "Use custom Android SDK tools", and point it at your Android SDK directory.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

* 해결
애뮬레이터를 패쓰에 등록
/Users/ck/Library/Android/sdk/emulator

echo 'export PATH=$PATH:~/Library/Android/sdk/emulator/' >>  ~/.bash_profile
source ~/.bash_profile
emulator -list-avds
emulator @Pixel_XL_API_33_ck

참고: https://stackoverflow.com/questions/67182016/why-react-native-couldnt-start-project-on-android-connection-with-expo
```

## yarn ios 하면 에러남..

```
CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.
To view more error logs, try building the app with Xcode directly, by opening /Users/ck/git/September/september-front/ios/septemberfront.xcodeproj.

Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -project /Users/ck/git/September/september-front/ios/septemberfront.xcodeproj -configuration Debug -scheme septemberfront -destination id=E66079AC-5984-46E0-B4C3-E5293EE2F218

User defaults from command line:
    IDEPackageSupportUseBuiltinSCM = YES

note: Using new build system
note: Planning
Analyze workspace

* 해결
Delete Derived Data in Xcode
https://www.youtube.com/watch?v=f8bTvx0Aoyo

참고: https://positiveko-til.vercel.app/til/react-native/error65.html#_1-xcode%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-derived-data-%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5
```

## yarn ios 2번째 에러

```
⚠️  Something went wrong running `pod install` in the `ios` directory.
Command `pod install` failed.
└─ Cause: `GoogleAppMeasurement` requires CocoaPods version `>= 1.10.2`, which is not satisfied by your current version, `1.10.1`.

* 해결
cocoapods 설치
brew install cocoapods

그래도 똑같은 에러가 나서 버전을 확인해보니..
ck@gimjunseong-ui-MacBookPro pod % pod --version
1.10.1
1.12.1를 깔았는데 cocoapods가 여러개 깔린듯하다..

gem uninstall cocoapods 제거...

brew link cocoapods


https://2vup.com/mac-cocoapods-install-error/
https://dblog.tech/32#iOS%--%ED%--%--%EB%A-%-C%EC%A-%-D%ED%-A%B-%EC%--%--%--CocoaPods%--%EB%--%A-%EA%B-%B-
https://velog.io/@kipsong/FlutterErrorXcodePod-Error-pod-install%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-%EC%8B%9C-%EB%8C%80%EC%B2%98%EB%B0%A9%EB%B2%95-%EB%A6%AC%EC%8A%A4%ED%8A%B8
```

## yarn ios 3번째 에러

```
⚠️  Something went wrong running `pod install` in the `ios` directory.
Command `pod install` failed.
└─ Cause: The following Swift pods cannot yet be integrated as static libraries:

The Swift pod `FirebaseCoreInternal` depends upon `GoogleUtilities`, which does not define modules. To opt into those targets generating module maps (which is necessary to import them from Swift when building as static libraries), you may set `use_modular_headers!` globally in your Podfile, or specify `:modular_headers => true` for particular dependencies.

* 해결
pod install --repo-update
```

## yarn ios 4번째 에러

```


[!] The following Swift pods cannot yet be integrated as static libraries:

The Swift pod `FirebaseCoreInternal` depends upon `GoogleUtilities`,
which does not define modules. To opt into those targets generating module maps
(which is necessary to import them from Swift when building as static libraries),
you may set `use_modular_headers!` globally in your Podfile, or specify `:
modular_headers => true` for particular dependencies.

* 해결
pod install하다 난 에러...

podfile에 use_native_modules! 아래에
pod 'GoogleUtilities', :modular_headers => true
적은 뒤 pod install 다시 하시면 됩니다.

```

## yarn ios 5번째 에러

```
CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.
또 발생...

* 해결
cd /Users/userName/Library/Developer/Xcode/DerivedData/
ls -al // 을 통해 리스트를 보고 삭제를 하거나,
open . // 을 통해 DerivedData 폴더를 열어서 내부에 있는 폴더 전체 삭제 진행.
// 다시 react-native 프로젝트 폴더로 돌아와서
cd ./ios
pod cache clean -all
pod install
cd ../
npx react-native run-ios
```

# 참고용

## 안드로이드 실행이 안됨...

```
npx create-expo-app
```

# 푸쉬 알람 사용기

```
$ expo install expo-notifications

```
