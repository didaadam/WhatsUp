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
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, textAlign: 'center', color: '#538491', marginVertical: 20 }}>Perlengkapan melahirkan untuk bayi ke RS</Text>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bajuPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Baju lengan panjang celana panjang</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bajuPendek} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Baju lengan pendek celana pendek</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.jumperPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Jumper lengan panjang jumper lengan pendek</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.popokKainClodi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Popok kain + clodi</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.diapersNB} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Diapers NB</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.guritaBayi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Gurita bayi</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bedongBayi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Bedong bayi</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.sarungTangan} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Sarung kaki, tangan & topi</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bib} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Sapu tangan & bib</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.sudoCream} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Sudocream Baby cream</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.babyOil} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Baby oil, lotion, hair lotion, cologne, powder</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.minyakTelon} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>minyak telon</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
