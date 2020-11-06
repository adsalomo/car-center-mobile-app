import React from 'react';

import { Icon } from 'react-native-elements';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthLoading from "../screens/login/AuthLoading";
import Login from "../screens/login/Login"

import HomeMecanic from "../screens/mecanic/Home";
import Profile from "../screens/shared/Profile";
import HomeClient from '../screens/client/Home';
import Car from '../screens/client/Car';

const profileScreenStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: ({ nav }) => ({
                title: "Profile"
            })
        }
    }
);

const homeMecanicScreenStack = createStackNavigator(
    {
        Profile: {
            screen: HomeMecanic,
            navigationOptions: ({ nav }) => ({
                title: "Home"
            })
        }
    }
);

const homeClientScreenStack = createStackNavigator(
    {
        Home: {
            screen: HomeClient,
            navigationOptions: ({ nav }) => ({
                title: "Home"
            })
        },
        Car: {
            screen: Car,
            navigationOptions: ({ nav }) => ({
                title: "Car"
            })
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const mecanicRootStack = createBottomTabNavigator(
    {
        Home: {
            screen: homeMecanicScreenStack,
            navigationOptions: ({ nav }) => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="compass-outline"
                        type="material-community"
                        size={25}
                        color={tintColor} />
                )
            })
        },
        Profile: {
            screen: profileScreenStack,
            navigationOptions: ({ nav }) => ({
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="account-circle-outline"
                        type="material-community"
                        size={25}
                        color={tintColor} />
                )
            })
        }
    }
);

const clientRootStack = createBottomTabNavigator(
    {
        Home: {
            screen: homeClientScreenStack,
            navigationOptions: ({ nav }) => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="compass-outline"
                        type="material-community"
                        size={25}
                        color={tintColor} />
                )
            })
        },
        Profile: {
            screen: profileScreenStack,
            navigationOptions: ({ nav }) => ({
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="account-circle-outline"
                        type="material-community"
                        size={25}
                        color={tintColor} />
                )
            })
        }
    }
);

const baseStack = createSwitchNavigator(
    {
        AuthLoading,
        Login,
        Mecanic: mecanicRootStack,
        Client: clientRootStack
    },
    {
        initialRouteName: "AuthLoading"
    }
);

export default createAppContainer(baseStack);
