import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../views/Login'
import Tab from '../routes/Tab'

const routeStack = createStackNavigator()

const Stack = () => {
    
    return (
        <routeStack.Navigator 
            initialRouteName="Login"  
            screenOptions={{
                    headerShown: false 
                }}
        >
            <routeStack.Screen name="Login" component={Login}/>
            <routeStack.Screen name="Tab" component={Tab}/>
           
        </routeStack.Navigator>
    )
}

export default Stack;