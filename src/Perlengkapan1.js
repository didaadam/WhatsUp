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
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#538491', textAlign: 'center', marginVertical: 20 }}>Perlengkapan melahirkan untuk ibu ke RS</Text>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.pembalutBersalin} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Pembalut Bersalin</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.dasterKancing} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Daster kancing depan</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.kainPanjang} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Kain panjang</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.bhMenyusui} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>BH menyusui</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.gurita} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Gurita</Text>
                        </View>
                        <View style={{ width: '33%' }}>
                            <Image source={images.peralatanMandi} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>Peralatan mandi</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <Image source={images.cdBersalin} style={{ width: 100, height: 100, borderRadius: 175 }} />
                            <Text style={{ textAlign: 'center', color: '#538491' }}>CD</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
