import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home';
import InfoScreen from './src/screen/Info';
import ManagerScreen from './src/screen/Manager';
import AddScreen from './src/screen/Add';
import Update from './src/screen/Update';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Manager" component={ManagerScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="Update" component={Update} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
