import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, ScrollView, Modal } from 'react-native'
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
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(null);
    const [arrayYesBunda, setArrayYesBunda] = useState([])
    const [dataResult, setDataResult] = useState([
        { level: 0, ket: 'Perawatan dengan bidan, tidak perlu dirujuk, bertempat di polindes, dan ditolong oleh bidan.', status: 'Status kehamilan resiko rendah' },
        { level: 1, ket: 'Perawatan dengan bidan dan dokter, perlu dirujuk ke puskesmas/RS, bertempat di puskesmas/RS, ditolong oleh bidan dan dokter.', status: 'Status kehamilan resiko tinggi' },
        { level: 2, ket: 'Perawatan dengan dokter, perlu dirujuk ke RS, bertempat di RS, ditolong oleh dokter.', status: 'Status kehamilan resiko sangat tinggi' },
    ])

    useEffect(() => {
        olahHasil()
    }, [])

    const olahHasil = () => {
        let total = 2
        let arrayResult = data.filter((val) => val.jawab == 1)
        setArrayYesBunda(arrayResult)
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
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#c2e8f2'} />
            <Toast ref={toast} />
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,.6)' }}>
                        <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 10 }}>
                            <View style={{ height: 50, width: '100%', backgroundColor: '#c2e8f2', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Info Score</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <View style={{ borderBottomColor: '#c2e8f2', borderBottomWidth: 3, width: '100%', marginVertical: 5 }}></View> */}
                                    <Text>Jawaban Bunda : </Text>
                                </View>
                                <ScrollView style={{ height: 200, marginTop: 10 }}>
                                    {arrayYesBunda.map((item, indexs) => {
                                        return (
                                            <View key={indexs} style={{ marginTop: indexs === 0 ? 0 : 20, marginBottom: indexs === arrayYesBunda.length - 1 ? 20 : 0, flexDirection: 'row'}}>
                                                <View>
                                                <Text>{indexs + 1}. </Text>
                                                </View>
                                                <View style={{flex: 1}}>
                                                <Text>{item.jawabanYa}.</Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ borderBottomColor: '#c2e8f2', borderBottomWidth: 3, width: '100%', marginVertical: 5 }} />
                                    <Text>Rules :</Text>
                                </View>
                                {dataResult.map((item, indexs) => {
                                    return (
                                        <View key={indexs} style={{ marginTop: indexs === 0 ? 2 : 5, marginBottom: indexs === 2 ? 10 : 0 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Text>{indexs + 1}.</Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ marginLeft: 5 }}>Jika score Bunda {indexs === 0 ? 'antara 2 - 5' : indexs === 1 ? 'antara 6  - 11' : '12 keatas'}, maka :</Text>
                                                    <Text style={{ color: indexs === 0 ? '#00b853' : indexs === 1 ? '#ded600' : '#db3939', marginLeft: 5 }}>{item.status}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 5 }}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                            <Text style={{ fontWeight: '800', color: 'white' }}>Tutup</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            Score Bunda: {totalScore}
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: index === 0 ? '#00b853' : index === 1 ? '#ded600' : '#db3939' }}>
                                {dataResult[index].status}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={{ color: 'black', textDecorationLine: 'underline', fontStyle: 'italic', marginTop: 5 }}>{'>>>'} Info Detail {'<<<'}</Text>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', color: '#538491', marginTop: 5 }}>
                            Saran: {dataResult[index].ket}
                        </Text>
                        <View>
                            {index === 0 ?
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={images.polindes} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                        <Text>Polindes</Text>
                                    </View>
                                    <Text style={{ marginHorizontal: 20 }}>Ditolong oleh</Text>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={images.bidan} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                        <Text>Bidan</Text>
                                    </View>
                                </View>
                                :
                                (index === 1 ?
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={images.rumahSakit} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                                <Text>Rumah Sakit</Text>
                                            </View>
                                            <Text style={{ marginHorizontal: 20 }}>Atau</Text>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={images.puskesmas} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                                <Text>Polindes</Text>
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                            <Text>Ditolong oleh</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={images.dokter} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                                <Text>Dokter</Text>
                                            </View>
                                            <Text style={{ marginHorizontal: 20 }}>Atau</Text>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={images.bidan} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                                <Text>Bidan</Text>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={images.rumahSakit} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                            <Text>Rumah Sakit</Text>
                                        </View>
                                        <Text style={{ marginHorizontal: 20 }}>Ditolong oleh</Text>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={images.dokter} style={{ width: 100, height: 100, borderRadius: 100, marginTop: 10, marginTop: 20, resizeMode: 'contain' }} />
                                            <Text>Dokter</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                        <View style={{ borderBottomColor: '#c2e8f2', borderBottomWidth: 3, width: '50%', marginTop: 20 }}></View>
                    </View>
                    {index === 0 ?
                        <View>
                            <Perlengkapan />
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderBottomColor: '#c2e8f2', borderBottomWidth: 3, width: '50%', marginTop: 20 }}></View>
                            </View>
                            <PerlengkapanBayi />
                        </View>
                        :
                        <View>
                            <Perlengkapan1 index={index} />
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderBottomColor: '#c2e8f2', borderBottomWidth: 3, width: '50%', marginTop: 20 }}></View>
                            </View>
                            <PerlengkapanBayi1 index={index} />
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