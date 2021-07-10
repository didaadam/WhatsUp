import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import images from './lib/image';

export default function Perlengkapan1({ navigation, route }) {
    const index = React.useState(0)

    React.useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'rgb(250, 202, 220)'} />
            <LinearGradient colors={['rgb(250, 202, 220)', '#fff', '#fff', '#fff']} style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Perlengkapan melahirkan untuk ibu ke RS</Text>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.pembalutBersalin} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>Pembalut Bersalin</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.dasterKancing} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>Daster kancing depan</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.kainPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>Kain panjang</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bhMenyusui} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>BH menyusui</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.gurita} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>Gurita</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.peralatanMandi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>Peralatan mandi</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.cdBersalin} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center' }}>CD</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                        <Text style={{ marginVertical: 10, textAlign: 'center', color: '#538491', fontWeight: 'bold' }}>
                            Lihat perlengkapan bayi yang harus dibawa
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('PerlengkapanBayi1', { params: index })} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                <Text style={{ fontWeight: '800', color: 'white' }}>Selanjutnya</Text>
                            </View>
                            <FA5 name={'angle-double-right'} size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                            - STIKes Abdi Nusantara Jakarta -
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
