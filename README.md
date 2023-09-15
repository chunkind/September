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