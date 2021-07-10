import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import images from './lib/image'
import FA5 from 'react-native-vector-icons/FontAwesome5'

export default function TerimaKasih({ navigation, route }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#c2e8f2'} />
            <LinearGradient colors={['#c2e8f2', 'rgb(250, 202, 220)', 'rgb(250, 202, 220)', '#c2e8f2']} style={{ alignItems: 'center', flex: 1, backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ elevation: 10, margin: 10, backgroundColor: 'transparent', borderRadius: 175, marginTop: '60%' }}>
                    <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175, }} />
                </View>
                <View style={{ borderBottomColor: 'rgb(250, 202, 220)', borderBottomWidth: 3, width: '50%' }}></View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#538491', fontWeight: 'bold', fontSize: 24 }}>TERIMA KASIH</Text>
                </View>
                <Text style={{ color: '#538491', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Telah menggunakan aplikasi dan motivasi</Text>
                <Text style={{ color: '#538491', fontWeight: 'bold', fontSize: 24 }}>Happy Baby Happy Mom</Text>
                <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Login')}
                        style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: '800', color: 'white' }}>Home</Text>
                        </View>
                        <FA5 name={'angle-double-right'} size={30} color={'white'} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                        - STIKes Abdi Nusantara Jakarta -
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}