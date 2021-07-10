import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import images from './lib/image';

export default function PerlengkapanBayi1({ navigation, route }) {
    const index = React.useState(0)

    React.useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'rgb(250, 202, 220)'} />
            <LinearGradient colors={['rgb(250, 202, 220)', '#fff', '#fff', '#fff']} style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Perlengkapan melahirkan untuk bayi ke RS</Text>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '33%' }}>
                                <Image source={images.bajuPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Baju lengan panjang celana panjang</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.bajuPendek} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Baju lengan pendek celana pendek</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.jumperPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Jumper lengan panjang jumper lengan pendek</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '33%' }}>
                                <Image source={images.popokKainClodi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Popok kain + clodi</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.diapersNB} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Diapers NB</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.guritaBayi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Gurita bayi</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '33%' }}>
                                <Image source={images.bedongBayi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Bedong bayi</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.sarungTangan} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Sarung kaki, tangan & topi</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.bib} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Sapu tangan & bib</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '33%' }}>
                                <Image source={images.sudoCream} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Sudocream Baby cream</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.babyOil} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>Baby oil, lotion, hair lotion, cologne, powder</Text>
                            </View>
                            <View style={{ width: '33%' }}>
                                <Image source={images.minyakTelon} style={{ width: 100, height: 100, borderRadius: 175 }} />
                                <Text style={{ textAlign: 'center' }}>minyak telon</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ justifyContent: 'flex-end', paddingBottom: 20 }}>
                        {/* <Text style={{ marginVertical: 10, textAlign: 'center', color: '#538491', fontWeight: 'bold' }}>
                            Lihat perlengkapan bayi yang harus dibawa
                        </Text> */}
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                <Text style={{ fontWeight: '800', color: 'white' }}>Home</Text>
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
