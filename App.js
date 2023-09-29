import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NewScreen from './NewScreen';
import PicScreen from './PicScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile Screen'}}/>
                <Stack.Screen name="New" component={NewScreen} options={{title: 'New Screen'}} />
                <Stack.Screen name="Pic" component={PicScreen} options={{title: 'Pic Screen'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
