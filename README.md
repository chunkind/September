# 프로잭트 생성

## 프로잭트 생성 실행 명령어들

```
npm install -g create-react-native-app
npx create-react-native-app ./
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0

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

* Path 설정으로 해결
/usr/local/opt/openjdk@11/bin
/Library/Java/JavaVirtualMachines

vi ~/.bash_profile
source ~/.bash_profile

```

## ios 빌드 에러

```
npx expo start 로 해결
```

# 참고용

## 안드로이드 실행이 안됨...

```
npx create-expo-app
```
