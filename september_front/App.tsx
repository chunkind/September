import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('[Background Remote Message]', remoteMessage);
});

const App = () => {

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('[FCM Token] ', fcmToken);
  };

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('[Remote Message] ', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Text> 드디어 완성 g</Text>
    </View>
  );
}
export default App;