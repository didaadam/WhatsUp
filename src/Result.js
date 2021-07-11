import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'
import Perlengkapan from './Perlengkapan';
import PerlengkapanBayi from './PerlengkapanBayi';
import Perlengkapan1 from './Perlengkapan1';
import PerlengkapanBayi1 from './PerlengkapanBayi1';

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Result({ navigation, route }) {
    const toast = useRef(null)
    const data = route.params.data
    const [index, setIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(null);
    const [dataResult, setDataResult] = useState([
        { level: 0, ket: 'Perawatan dengan bidan, tidak perlu dirujuk, bertempat di polindes, dan ditolong oleh bidan.', status: 'Status kehamilan resiko rendah' },
        { level: 1, ket: 'Perawatan dengan bidan dan dokter, perlu dirujuk ke puskesmas/RS, bertempat di puskesmas/RS, ditolong oleh bidan dan dokter.', status: 'Status kehamilan resiko tinggi' },
        { level: 2, ket: 'Perawatan dengan dokter, perlu dirujuk ke RS, bertempat di RS, ditolong oleh dokter.', status: 'Status kehamilan resiko sangat tinggi' },
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
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            Score bunda: {totalScore}
                        </Text>
                        <Text style={{ textAlign: 'center',fontSize: 20, fontWeight: 'bold', color: index === 0 ? '#00b853' : index === 1 ? '#ded600' : '#db3939' }}>
                            {dataResult[index].status}
                        </Text>
                        <Text style={{ textAlign: 'center', color: '#538491', marginTop: 10 }}>
                            Saran: {dataResult[index].ket}
                        </Text>
                        <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175, marginTop: 10, marginTop: 20 }} />
                        <View style={{ borderBottomColor: 'rgb(250, 202, 220)', borderBottomWidth: 3, width: '50%', marginTop: 10 }}></View>
                    </View>
                    {index === 0 ?
                        <View>
                            <Perlengkapan />
                            <PerlengkapanBayi />
                        </View>
                        :
                        <View>
                            <Perlengkapan1 />
                            <PerlengkapanBayi1 />
                        </View>
                    }
                    <View style={{ flex: 1, width: '100%', alignItems: 'center', paddingTop: 50 }}>

                        <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('TerimaKasih')}
                                style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '800', color: 'white' }}>Selesai</Text>
                                </View>
                                <FA5 name={'angle-double-right'} size={30} color={'white'} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                                - STIKes Abdi Nusantara Jakarta -
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

export default Result;