import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Login({ navigation, route }) {
    const toast = useRef(null)

    return (
        // <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Toast ref={toast} />
            <LinearGradient colors={['#c2e8f2', '#F6A9C6', '#F6A9C6', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ height: '60%', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175 }} />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Latihan')} style={{ height: 100, width: 100, backgroundColor: '#87ddf5', borderRadius: 20, alignItems:'center', justifyContent:'center'}}>
                        <FA5 name='galactic-senate' size={100}/>
                    </TouchableOpacity> */}
                </View>
                <View style={{ height: '40%', width: '100%', alignItems: 'center', paddingTop: 60 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Diary Pregnancy
                    </Text>
                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                        Aplikasi karya mahasiswi Sarjana Kebidanan Angkatan 2019 untuk ibu hamil , Semoga bermanfaat 🤍
                    </Text>
                    {/* toast.current.show(' Dah dibilang belum dibikin buset!', { type: 'danger', icon: <FA5 name="head-side-virus" size={25} color={'white'} /> }) */}
                    <TouchableOpacity onPress={() => navigation.navigate('Stepper')} style={{ marginTop: 40, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                            <Text style={{ fontWeight: '800', color: 'white' }}>Continue</Text>
                        </View>
                        {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                        <FA5 name={'angle-double-right'} size={30} color={'white'} />
                        {/* </View> */}
                    </TouchableOpacity>
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

export default Login;