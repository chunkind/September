import * as React from 'react';
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/com/ck/september/layout/Main'
import LoginScreen from './src/com/ck/september/users/Login'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavi = ({navigation}) => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'accessibility' : 'accessibility-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'add' : 'add-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
  );
};

const WholeStack = () =>{
  return (
    <Stack.Navigator initialRouteName='TabNavi'>
      <Stack.Screen name="TabNavi" component={TabNavi} options={{ headerShown: false, animationEnabled: false}} />
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false, animationEnabled: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animationEnabled: false}}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer style={styles}>
      <WholeStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.compose({
  basicPosition: {
    position: 'static !important',
    backgroundColor: 'red'
  }
})

export default App;


// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };