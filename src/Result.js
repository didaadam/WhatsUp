import React from 'react'
import { View, Text } from 'react-native'

function Result({ navigation, route }) {
    return (
        <View style={{ flex: 1, paddingTop: 25 }}>
            <Text>RESULT</Text>
        </View>
    )
}

const style = {
    Head: {
        flex: 1,
        backgroundColor: 'red'
    }
}


export default Result;