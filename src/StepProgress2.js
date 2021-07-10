import { Radio } from 'native-base';
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import StepIndicator from 'react-native-step-indicator';

function StepProgress2(props) {
    const [currentPosition] = React.useState(1)
    const [arrayPertanyaan, setstate] = React.useState([
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan dengan operasi caesar?' },
        { jawab: '', pertanyaan: 'Apakah ibu mengalami kurang darah (anemia) ?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah mengalami penyakit malaria ?' },
        { jawab: '', pertanyaan: 'Apakah ibu punya riwayat penyakit TBC sebelum hamil ?' },
        { jawab: '', pertanyaan: 'Apakah ibu/keluarga memiliki riwayat penyakit jantung atau sesak berkepanjangan?' },
        { jawab: '', pertanyaan: 'Apakah ibu memiliki riwayat penyakit diabetes melitus (kencing manis) ?' },
        { jawab: '', pertanyaan: 'Apakah ibu ada penyakit menular seksual ?' },
        { jawab: '', pertanyaan: 'Apakah ibu selama kehamilan pernah terjadi pembengkakan pada muka atau tungkai?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah mempunyai keturunan kembar ?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah mengalami bayi lahir prematur (hydramnion) ?' },
        { jawab: '', pertanyaan: 'Apakah ibu sebelumnya pernah mengalami kematian janin dalam kandungan ?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah hamil lebih bulan ?' },
    ])

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const handleNext = () => { 
        props.changePosition(2)
    }

    const backAction = () => {
        props.changePosition(0)
        return true;
    };

    React.useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    return (
        <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
            {arrayPertanyaan && arrayPertanyaan.map((item, index) => {
                return (
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: index === 0 ? 0 : 10 }} key={index} >
                        <View style={{ width: '15%', justifyContent: 'space-between', height: '100%' }}>
                            <View style={{ borderRadius: 20, height: 30, width: 30, borderColor: '#3b5998', borderWidth: 3, justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ textAlign: 'center', fontWeight: '800' }}>{index + 13}</Text>
                            </View>
                            <View style={{ borderColor: '#3b5998', borderWidth: 1, width: 2, alignSelf: 'center', height: '65%', marginTop: 5 }}>

                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', width: '85%' }}>
                            <View style={{ marginTop: 3 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {item.pertanyaan}
                                </Text>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Radio
                                            color={"#3b5998"}
                                            onPress={() => {
                                                arrayPertanyaan[index].jawab = '1'
                                                forceUpdate()
                                            }}
                                            selected={arrayPertanyaan[index].jawab === '1' ? true : false}
                                        />
                                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13, fontWeight: '800' }}>Ya</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Radio
                                            color={"#3b5998"}
                                            style={{ marginTop: 5 }}
                                            onPress={() => {
                                                arrayPertanyaan[index].jawab = '0'
                                                forceUpdate()
                                            }}
                                            selected={arrayPertanyaan[index].jawab === '0' ? true : false}
                                        />
                                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13, fontWeight: '600' }}>Tidak</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
            <TouchableOpacity onPress={() => handleNext()} style={{ marginTop: 20, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '800', color: 'white' }}>Selanjutnya</Text>
                </View>
                {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                <FA5 name={'angle-double-right'} size={30} color={'white'} />
                {/* </View> */}
            </TouchableOpacity>
        </ScrollView>
    )
}


export default StepProgress2;