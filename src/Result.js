import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Result({ navigation, route }) {
    const toast = useRef(null)

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#c2e8f2'} />
            <Toast ref={toast} />
            <LinearGradient colors={['#c2e8f2', '#F6A9C6', '#F6A9C6', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ height: '60%', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 50 }}>
                        Result
                    </Text>
                    <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175 }} />
                </View>
                <View style={{ height: '40%', width: '100%', alignItems: 'center', paddingTop: 60 }}>

                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                        Congrats bunda, kamu gajadi remed 🤍
                    </Text>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Latihan')} style={{ marginTop: 40, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                            <Text style={{ fontWeight: '800', color: 'white' }}>Continue</Text>
                        </View>
                        <FA5 name={'angle-double-right'} size={30} color={'white'} />
                    </TouchableOpacity> */}
                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                        <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                            - STIKes Abdi Nusantara Jakarta -
                        </Text>
                    </View>

                </View>
            </LinearGradient>
        </View>
    );
}

export default Result;