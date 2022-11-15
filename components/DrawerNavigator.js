import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './styles';
import CustomDrawer from './CustomDrawer';


// colors
const { secondary, gray } = Colors

export const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ children, initialRouteName }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: secondary,
        drawerActiveBackgroundColor: '#fff',
        drawerPosition: 'right',
        drawerLabelStyle: {
          marginLeft: -10,
          fontSize: 17,
        }
      }}
        initialRouteName={initialRouteName}
      >
        {children}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator