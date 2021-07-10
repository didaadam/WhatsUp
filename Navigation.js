import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import Login from './src/Login'
import SignUp from './src/SignUp'
import Home from './src/Home'
import Latihan from './src/Latihan'
import StepProgress from './src/StepProgress'
import StepProgress2 from './src/StepProgress2'
import StepProgress3 from './src/StepProgress3'
import Result from './src/Result'
import Stepper from './src/Stepper'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="SignUp" component={SignUp} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="Latihan" component={Latihan} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="Stepper" component={Stepper} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="StepProgress" component={StepProgress} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="StepProgress2" component={StepProgress2} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="StepProgress3" component={StepProgress3} options={({ navigation, route }) => ({ headerShown: false })} />
                <Stack.Screen name="Result" component={Result} options={({ navigation, route }) => ({ headerShown: false })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;