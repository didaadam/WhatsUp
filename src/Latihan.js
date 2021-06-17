import React from 'react'
import { View, Text } from 'react-native'

function Latihan() {
    return (
        <View style={{ flex: 1, backgroundColor: 'green', paddingTop: 25 }}>
            <View style={{ height: '50%', backgroundColor: 'pink', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text>atas kiri</Text>
                <Text>atas kanan</Text>
            </View>

            <View style={{ height: '50%', backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-end' }}>
                <Text>bawah kiri</Text>
                <Text>bawah kanan</Text>
            </View>
        </View>
    )
}

const style = {
    Head: {
        flex: 1,
        backgroundColor: 'red'
    }
}


export default Latihan;