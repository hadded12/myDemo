import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from "./Acceuil";
import Login from "./Login";

const Stack = createStackNavigator();
class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Login"}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
