import { Radio } from 'native-base';
import React, { useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import StepIndicator from 'react-native-step-indicator';
import Toast from "react-native-fast-toast";

function StepProgress({ navigation, route }) {
    const toast = useRef(null)
    const [currentPosition] = React.useState(0)
    const [arrayPertanyaan, setstate] = React.useState([
        { jawab: '', pertanyaan: 'Apakah ibu mulai hamil di usia kurang dari 16 tahun?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu mulai hamil di usia lebih dari 35 tahun?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu terlambat hamil di usia kawin lebih dari 4 tahun ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu terlalu lama untuk hamil lagi lebih dari 10 tahun ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah jarak ibu hamil dari kehamilan sebelumnya kurang dari 2 tahun ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu mempunyai anak, 4 atau lebih ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah umur ibu lebih dari 35 tahun?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah tinggi badan ibu kurang dari 145 cm?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah gagal kehamilan ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan dengan tarikan tang atau vakum ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu selama kehamilan pernah melahirkan dengan uri dirogoh ?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah diberi infus/transfuse?', score: 4 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan dengan operasi caesar?', score: 8 },
    ])

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const validate = () => {
        let arrayCheck = arrayPertanyaan.filter((val) => val.jawab == '')
        if (arrayCheck.length > 0) {
            toast.current.show(' Semua pertanyaan harus dijawab', { type: 'danger', position: "top" })
        } else {
            navigation.navigate('StepProgress2', { data: arrayPertanyaan })
        }
    }

    const handleNext = () => {
        let idxKosong = arrayPertanyaan.findIndex((val) => val.jawab === '')
        if (idxKosong > -1) {
            Alert.alert("Wajib mengisi semua pertanyaan")
        } else {
            props.changePosition(1)
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'rgb(250, 202, 220)'} />
            <Toast ref={toast} />
            <LinearGradient colors={['rgb(250, 202, 220)', '#fff', '#fff', '#fff']} style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <StepIndicator
                        stepCount={3}
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                    // labels={labels}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Jawab Pertanyaan Berikut</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 0 }}>Sesuai Dengan Kondisi Bunda</Text>
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, marginTop: 10 }} />
                    <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                        {arrayPertanyaan && arrayPertanyaan.map((item, index) => {
                            return (
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: index === 0 ? 0 : 10 }} key={index} >
                                    <View style={{ width: '15%' }}>
                                        <View style={{ borderRadius: 20, height: 30, width: 30, borderColor: 'rgb(250, 202, 220)', borderWidth: 3, justifyContent: 'center', alignSelf: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontWeight: '800' }}>{index + 1}</Text>
                                        </View>
                                        <View style={{ borderColor: 'rgb(250, 202, 220)', borderWidth: 2, width: 2, alignSelf: 'center', height: 50, marginTop: 10 }}>

                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', width: '85%' }}>
                                        <View style={{ marginTop: 3 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                {item.pertanyaan}
                                            </Text>
                                            <View style={{ marginTop: 10 }}>
                                                <TouchableOpacity style={{ flexDirection: 'row' }}
                                                    onPress={() => {
                                                        arrayPertanyaan[index].jawab = '1'
                                                        forceUpdate()
                                                    }}>
                                                    <Radio
                                                        onPress={() => {
                                                            arrayPertanyaan[index].jawab = '1'
                                                            forceUpdate()
                                                        }}
                                                        color={"rgb(250, 202, 220)"}
                                                        selectedColor={"rgb(250, 202, 220)"}
                                                        selected={arrayPertanyaan[index].jawab === '1' ? true : false}
                                                    />
                                                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13, fontWeight: '800' }}>Ya</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ flexDirection: 'row' }}
                                                    onPress={() => {
                                                        arrayPertanyaan[index].jawab = '0'
                                                        forceUpdate()
                                                    }}>
                                                    <Radio
                                                        onPress={() => {
                                                            arrayPertanyaan[index].jawab = '0'
                                                            forceUpdate()
                                                        }}
                                                        color={"rgb(250, 202, 220)"}
                                                        selectedColor={"rgb(250, 202, 220)"}
                                                        style={{ marginTop: 5 }}
                                                        selected={arrayPertanyaan[index].jawab === '0' ? true : false}
                                                    />
                                                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13, fontWeight: '600' }}>Tidak</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                        <TouchableOpacity onPress={() => validate()} style={{ marginTop: 20, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#f781ad', width: '100%', flexDirection: 'row', borderColor: 'gray', borderWidth: .3 }}>
                            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                <Text style={{ fontWeight: '800', color: 'white' }}>Selanjutnya</Text>
                            </View>
                            {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                            <FA5 name={'angle-double-right'} size={30} color={'white'} />
                            {/* </View> */}
                        </TouchableOpacity>
                    </ScrollView>
                </View>
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

const labels = ["1", "2"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'rgb(250, 202, 220)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#3b5998',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#3b5998',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#3b5998',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#3b5998',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#3b5998'
}

export default StepProgress;