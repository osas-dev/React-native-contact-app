import { View, Text } from 'react-native'
import React, { useState } from 'react'

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer'
import { Colors, Hr, Icon, ProfilePic } from './styles'

//icons
import { Feather, FontAwesome } from "@expo/vector-icons"
import Profile from '../screens/Profile'
import { useNavigation } from '@react-navigation/native';

//colors
const { gray, secondary } = Colors;

const CustomDrawer = (props, { navigation }) => {

    const [collapsed, setCollapsed] = useState(false);


    return (
        <DrawerContentScrollView {...props}>
            <Icon>
                <ProfilePic
                    drawer={true}
                    resizeMode='cover'
                    source={require('./../assets/img/default.png')}
                />
            </Icon>
            <Hr drawer={true} />
            <View>
                <DrawerItem
                    icon={({ color, size, focused }) => (
                        <FontAwesome
                            name='lock'
                            size={20}
                            color={!collapsed ? color : secondary}
                        />
                    )}
                    label={({ focused, color }) =>
                        <View
                            style={{ marginLeft: -25, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            {!collapsed ?
                                (<>
                                    <Text style={{ fontSize: 17, color, marginHorizontal: 20, }}>
                                        Profile
                                    </Text>
                                    <Feather
                                        name='chevron-down'
                                        size={20}
                                        style={{
                                            marginLeft: 20
                                        }}
                                    />
                                </>
                                ) : (<>
                                    <Text style={{ fontSize: 17, color: secondary, marginHorizontal: 20, }}>
                                        Profile
                                    </Text>
                                    <Feather
                                        name='chevron-up'
                                        size={20}
                                        style={{
                                            color,
                                            marginLeft: 20
                                        }}
                                    />
                                </>
                                )
                            }
                        </View>
                    }
                    onPress={() => { collapsed ? setCollapsed(false) : setCollapsed(true) }}
                />
                {collapsed ?
                    (<DrawerItem
                        icon={({ color, size, focused }) => (
                            <Feather name='list' size={20} color={color} style={{ marginLeft: 30 }} />
                        )}
                        label={({ focused, color }) => <Text style={{ fontSize: 17, color, marginLeft: -20 }}>My Profile</Text>}
                        onPress={() => { navigation.navigate('Home') }}
                    />) :
                    ""
                }
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer