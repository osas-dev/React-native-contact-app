import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

//screens
import Home from './screens/Home';
import Login from './screens/Login';
import Logout from './screens/Logout';
import Profile from './screens/Profile';
import DrawerNavigator, { Drawer } from './components/DrawerNavigator';

// icons
import {
  FontAwesome,
  Feather
} from '@expo/vector-icons'
import { Colors } from './components/styles';
import CustomDrawer from './components/CustomDrawer';

// colors
const { gray } = Colors;

export default function App() {
  return (
    <DrawerNavigator
      initialRouteName='Home'>
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Feather name='power' size={20} color={gray} />
          )
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: () => null
        }}
      />
    </DrawerNavigator>
  );
}
