import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../modules/login";
import Profile from '../modules/profile';
import  Home  from '../modules/home'
import  Cart  from '../modules/cart';
import PaymentScreen from '../modules/pagamento';
import Perfil from '../modules/Perfil';

const {Screen, Navigator, Group} = createNativeStackNavigator ()

export function StackNavigator() {
    return (
        <Navigator initialRouteName='Login'>
            <Group
                screenOptions={{
                    headerTintColor: 'navy'
                }}>
            <Screen name='Login' component={Login} />
            <Screen name='Profile' component={Profile}/>
            <Screen name='Home' component={Home}/>
            <Screen name='Cart' options={{headerShown: false}} component={Cart}/>
            <Screen name='PaymentScreen' component={PaymentScreen}/>
            <Screen name='Perfil' component={Perfil}/>
            </Group>

        </Navigator>
    )
}