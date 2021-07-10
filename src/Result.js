import React, { useEffect, useRef, useState } from 'react'
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
    const data = route.params.data
    const [index, setIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(null);
    const [dataResult, setDataResult] = useState([
        { level: 0, ket: 'Status kehamilan resiko rendah, perawatan dengan bidan, tidak perlu dirujuk, bertempat di polindes, dan ditolong oleh bidan.' },
        { level: 1, ket: 'Status kehamilan resiko tinggi, perawatan dengan bidan dan dokter, perlu dirujuk ke puskesmas/RS, bertempat di puskesmas/RS, ditolong oleh bidan dan dokter.' },
        { level: 2, ket: 'Status kehamilan resiko sangat tinggi, perawatan dengan dokter, perlu dirujuk ke RS, bertempat di RS, ditolong oleh dokter.' },
    ])
    useEffect(() => {
        // alert(arrayChats)
        // const reference = database().ref('/users/123');
        // alert(JSON.stringify(route)) 
        olahHasil()
    }, [])

    const olahHasil = () => {
        let total = 2
        let arrayResult = data.filter((val) => val.jawab == 1)
        // alert(arrayResult)
        arrayResult.map((item, index) => {
            total += item.score
            // alert(total)
        })
        setTotalScore(total)
        if (total >= 2 && total < 6) {
            setIndex(0)
        } else if (total >= 6 && total < 12) {
            setIndex(1)
        } else {
            setIndex(2)
        }
        // alert(JSON.stringify(data))
        // forceUpdate()
        // alert(index)
        // alert(dataResult[index])
        // alert(count)
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#c2e8f2'} />
            <Toast ref={toast} />
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ height: '60%', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 50 }}>
                        Score bunda: {totalScore}
                    </Text>
                    <Text>
                        Ket: {dataResult[index].ket}
                    </Text>
                    <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175, marginTop: 10 }} />
                </View>
                <View style={{ height: '40%', width: '100%', alignItems: 'center', paddingTop: 50 }}>

                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                        <Text style={{ marginVertical: 10, textAlign: 'center', color: '#538491', fontWeight: 'bold' }}>
                            Lihat perlengkapan ibu yang harus dibawa
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                if (index === 0) {
                                    navigation.navigate('Perlengkapan', { params: index })
                                } else {
                                    navigation.navigate('Perlengkapan1', { params: index })
                                }
                            }}
                            style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
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
    );
}

export default Result;