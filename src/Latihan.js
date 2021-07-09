import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Latihan({navigation, route}) {
    const [username, setUsername] = useState('');
    return (
        <View style={{ flex: 1, paddingTop: 25 }}>
            <LinearGradient colors={['#c2e8f2', '#c2e8f2', '#c2e8f2', '#F6A9C6']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 24 }}>DATA DIRI IBU HAMIL</Text>
                <View style={{ backgroundColor: 'white', width: '80%', height: '50%', margin: 5, borderRadius: 5, borderColor: '#9e9e9e', borderWidth: 0, padding: 10 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text>Usia Ibu (tahun)</Text>
                        <TextInput placeholder={'contoh: 27'} style={{ padding: 0 }} selectTextOnFocus={false} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Usia Kehamilan (bulan)</Text>
                        <TextInput placeholder={'contoh: 7'} style={{ padding: 0 }} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Kehamilan Keberapa</Text>
                        <TextInput placeholder={'contoh: 1'} style={{ padding: 0 }} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Tempat Tanggal Lahir</Text>
                        <TextInput placeholder={'contoh: Jakarta, xx xxx xxxx'} style={{ padding: 0 }} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Alamat Rumah</Text>
                        <TextInput placeholder={'contoh: Jln Puri xxx'} style={{ padding: 0 }} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Nomor Telepon</Text>
                        <TextInput placeholder={'contoh: 08xxxxxx'} style={{ padding: 0 }} />
                        <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('StepProgress')} style={{ marginTop: 40, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '800', color: 'white' }}>Selanjutnya</Text>
                    </View>
                    {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                    <FA5 name={'angle-double-right'} size={30} color={'white'} />
                    {/* </View> */}
                </TouchableOpacity>
            </LinearGradient>
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