import { Radio } from 'native-base';
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, BackHandler, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import StepIndicator from 'react-native-step-indicator';

function StepProgress(props) {
    const [currentPosition] = React.useState(0)
    const [arrayPertanyaan, setstate] = React.useState([
        { jawab: '', pertanyaan: 'Apakah ibu mulai hamil di usia kurang dari 16 tahun?' },
        { jawab: '', pertanyaan: 'Apakah ibu mulai hamil di usia lebih dari 35 tahun?' },
        { jawab: '', pertanyaan: 'Apakah ibu terlambat hamil di usia kawin lebih dari 4 tahun ?' },
        { jawab: '', pertanyaan: 'Apakah ibu terlalu lama untuk hamil lagi lebih dari 10 tahun ?' },
        { jawab: '', pertanyaan: 'Apakah jarak ibu hamil dari kehamilan sebelumnya kurang dari 2 tahun ?' },
        { jawab: '', pertanyaan: 'Apakah ibu mempunyai anak, 4 atau lebih ?' },
        { jawab: '', pertanyaan: 'Apakah umur ibu lebih dari 35 tahun?' },
        { jawab: '', pertanyaan: 'Apakah tinggi badan ibu kurang dari 145 cm?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah gagal kehamilan ?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan dengan tarikan tang atau vakum ?' },
        { jawab: '', pertanyaan: 'Apakah ibu selama kehamilan pernah melahirkan dengan uri dirogoh ?' },
        { jawab: '', pertanyaan: 'Apakah ibu pernah diberi infus/transfuse?' },
    ])

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const handleNext = () => { 
        let idxKosong = arrayPertanyaan.findIndex((val) => val.jawab === '')
        if (idxKosong > -1) {
            Alert.alert("Wajib mengisi semua pertanyaan")
        } else {
            props.changePosition(1)
        }
            
    }

    return (
        <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
            {arrayPertanyaan && arrayPertanyaan.map((item, index) => {
                return (
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: index === 0 ? 0 : 10 }} key={index} >
                        <View style={{ width: '15%', justifyContent: 'space-between', height: '100%' }}>
                            <View style={{ borderRadius: 20, height: 30, width: 30, borderColor: '#3b5998', borderWidth: 3, justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ textAlign: 'center', fontWeight: '800' }}>{index + 1}</Text>
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

export default StepProgress;