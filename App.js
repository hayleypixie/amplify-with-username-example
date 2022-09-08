import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator()

import { Amplify, Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(awsconfig)

function Home() {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => Auth.signOut({global: true})}>
        <Text>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Username',
      key: 'preferred_username',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password'
    },
  ]
};

export default withAuthenticator(App, {
  signUpConfig: signUpConfig
})
