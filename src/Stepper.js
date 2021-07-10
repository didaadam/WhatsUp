import { Radio } from 'native-base';
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, BackHandler, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import StepIndicator from 'react-native-step-indicator';
import StepProgress from './StepProgress';
import StepProgress2 from './StepProgress2';
import StepProgress3 from './StepProgress3';

function Stepper({ navigation, route }) {
    const [currentPosition, setCurrentPosition] = React.useState(0)
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
        { jawab: '', pertanyaan: 'Apakah ibu pernah melahirkan dengan operasi caesar?' },
    ])

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const handleResult = () => {
        navigation.navigate('Result')
    }

    return (
        <LinearGradient colors={['#c2e8f2', '#F6A9C6', '#F6A9C6', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <StepIndicator
                    stepCount={3}
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                // labels={labels}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Jawablah pertanyaan berikut dengan sejujur-jujurnya</Text>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, marginTop: 10 }} />
                {currentPosition === 0 ?
                    <StepProgress
                        changePosition={(e) => {
                            setCurrentPosition(e)
                            forceUpdate()
                        }}
                    />
                    : currentPosition === 1 ?
                        <StepProgress2
                            changePosition={(e) => {
                                setCurrentPosition(e)
                                forceUpdate()
                            }}
                        />
                        :
                        <StepProgress3
                            handleResult={() => handleResult()}
                            changePosition={(e) => {
                                setCurrentPosition(e)
                                forceUpdate()
                            }}
                        />
                }
            </View>
        </LinearGradient>
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

export default Stepper;