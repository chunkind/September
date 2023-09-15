# 프로잭트 생성

## Create React Native App CLI
```
$npm install -g create-react-native-app
$npx create-react-native-app myProject (혹은 create-react-native-app myProject)
```

## React Native CLI
```
$npm install -g react-native-cli
$npx react-native init myProject (혹은 react-native init myProject)
```

# 콘솔창에서 Expo Cli 설치, 프로젝트(my-project) 생성하기
```
$npm install -g expo cli
$npm init my-project
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


# 참고용
## 프로잭트 생성 실행 명령어들
```
npm install -g create-react-app
npm install -g create-react-native-app
npm install -g react-native-cli

npm install -g expo cli

npx create-react-native-app ./

npx expo install @expo/webpack-config@^0.17.2

npm install
npm start

```