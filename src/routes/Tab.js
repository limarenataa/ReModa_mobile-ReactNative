
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Home from '../views/Home';
import Produtos from '../views/Produtos';


const routeTab = createBottomTabNavigator()

const Tab = () => {
    return (
        <routeTab.Navigator 
    
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor:'#F1C517',
                inactiveTintColor: '#504D4D',
                labelStyle: {fontSize: 25, marginBottom: 10}
            }}
        >
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Produtos" component={Produtos}/>
        </routeTab.Navigator>
    )
}

export default Tab;

