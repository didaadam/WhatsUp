import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function SignUp({ navigation, route }) {
    const toast = useRef(null)

    return (
        // <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Toast ref={toast} />
            <LinearGradient colors={['#c2e8f2', '#87ddf5', '#87ddf5', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ height: '50%', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ height: 100, width: 100, backgroundColor: '#87ddf5', borderRadius: 20, alignItems:'center', justifyContent:'center' }}>
                        <FA5 name='galactic-senate' size={100} style={{transform: [{rotate: '180deg'}]}}/>
                    </View>
                </View>
                <View style={{ height: '50%', width: '100%', alignItems: 'center', paddingTop: 60 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Whats Down Wkwk
                    </Text>
                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                        Ini adalah karya anak bangsa untuk menemani kegabutan yang sangat tinggi, thanks.
                    </Text>

                    <TouchableOpacity onPress={() => toast.current.show(' Belum dibikin euy..', {type: 'success', icon: <FA5 name="grin-beam-sweat" size={25} color={'white'}/>})} style={{ marginTop: 80, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: 'transparent', width: '100%', flexDirection: 'row', borderColor: 'white', borderWidth: .3 }}>
                        <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: '#d60d0d', borderRadius: 50, justifyContent: 'center' }}>
                            <MaterialCommunityIcons name={'email'} size={20} color={'white'} />
                        </View>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginLeft: -25 }}>
                            <Text style={{fontWeight: '800'}}>Login with Email</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toast.current.show(' Dah dibilang belum dibikin buset!', {type: 'danger', icon: <FA5 name="head-side-virus" size={25} color={'white'}/>})} style={{ marginTop: 10, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                        {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                            <FA5 name={'facebook'} size={30} color={'white'} />
                        {/* </View> */}
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginLeft: -25 }}>
                            <Text style={{fontWeight: '800', color: 'white'}}>Login with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop: 10, width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                        <Text style={{fontSize: 12}}>Don't have an account?</Text>
                        <Text style={{color: '#5891a1', fontWeight: 'bold', fontSize: 13}}> Signup</Text>
                    </View>
                </View>
            </LinearGradient>
            {/* <Text>Details Screen</Text>
            <TouchableOpacity onPress={() => navigation.push('Details2', { asd: 'das', route })}><Text>press btn</Text></TouchableOpacity> */}
        </View>
    );
}

export default SignUp;