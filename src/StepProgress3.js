import { Radio } from 'native-base';
import React, { useEffect, useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import StepIndicator from 'react-native-step-indicator';
import Toast from "react-native-fast-toast";

function StepProgress3({ navigation, route }) {
    const toast = useRef(null)
    const [currentPosition] = React.useState(2)
    const data = route.params.data
    const [arrayPertanyaan, setstate] = React.useState([
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan letak sungsang?', score: 8 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah mengalami kehamilan lintang?', score: 8 },
        { jawab: '', pertanyaan: 'Apakah ibu pernah mengalami perdarahan dalam kehamilan ini?', score: 8 },
        { jawab: '', pertanyaan: 'Apakah ibu selama hamil pernah mengalami pre-eclampsia kejang-kejang?', score: 8 }
    ])

    useEffect(() => {
        // alert(arrayChats)
        // const reference = database().ref('/users/123');
        // alert(JSON.stringify(route)) 
    }, [])

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const validate = () => {
        let arrayCheck = arrayPertanyaan.filter((val) => val.jawab == '')
        if (arrayCheck.length > 0) {
            toast.current.show(' Semua pertanyaan harus dijawab', { type: 'danger', position: "top" })
        } else {
            navigation.navigate('Result', { data: data.concat(arrayPertanyaan) })
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Toast ref={toast} />
            <StatusBar backgroundColor={'#c2e8f2'} />
            <LinearGradient colors={['#c2e8f2', '#fff', '#fff', '#fff']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <StepIndicator
                        stepCount={3}
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                    // labels={labels}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Jawablah pertanyaan berikut dengan sejujur-jujurnya</Text>
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, marginTop: 10 }} />
                    <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
                        {arrayPertanyaan && arrayPertanyaan.map((item, index) => {
                            return (
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: index === 0 ? 0 : 10 }} key={index} >
                                    <View style={{ width: '15%' }}>
                                        <View style={{ borderRadius: 20, height: 30, width: 30, borderColor: '#3b5998', borderWidth: 3, justifyContent: 'center', alignSelf: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontWeight: '800' }}>{index + 25}</Text>
                                        </View>
                                        <View style={{ borderColor: '#3b5998', borderWidth: 2, width: 2, alignSelf: 'center', height: 50, marginTop: 10 }}>

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
                                                        color={"#3b5998"}
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
                                                        color={"#3b5998"}
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
                    </ScrollView>
                    <TouchableOpacity onPress={() => validate()} style={{ marginTop: 20, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: '800', color: 'white' }}>Hasil</Text>
                        </View>
                        {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                        <FA5 name={'angle-double-right'} size={30} color={'white'} />
                        {/* </View> */}
                    </TouchableOpacity>
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
    stepStrokeCurrentColor: '#3b5998',
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

export default StepProgress3;