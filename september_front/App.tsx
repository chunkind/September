import React, {useEffect} from 'react';
import Main from './src/com/ck/september/layout/Main';
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
    <Main/>
  );
}
export default App;