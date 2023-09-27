import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/com/ck/september/layout/Main';
import LoginScreen from './src/com/ck/september/users/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNav from './src/com/ck/september/layout/DrawerNav'

const StackNav = createNativeStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavi = ({navigation}) => {
  return (
    <TabNav.Navigator
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
        <TabNav.Screen name="Main" component={MainScreen} />
        <TabNav.Screen name="Login" component={LoginScreen} />
      </TabNav.Navigator>
  );
};

const WholeStack = () =>{
  return (
    <StackNav.Navigator initialRouteName='TabNavi'>      
      <StackNav.Screen name="DrawerNav" component={DrawerNav} />
      <StackNav.Screen name="TabNavi" component={TabNavi} options={{ headerShown: false, animationEnabled: false}} />
      <StackNav.Screen name="Main" component={MainScreen} options={{ headerShown: false, animationEnabled: false}}/>
      <StackNav.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animationEnabled: false}}/>
    </StackNav.Navigator>
  );
};

export default class App extends Component{
  render (){
    return (
      <NavigationContainer>
        <WholeStack />
      </NavigationContainer>
    )
  }
}

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