import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, ScrollView, Keyboard, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Latihan({ navigation, route }) {
    const [username, setUsername] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <View style={{ flex: 1, paddingTop: 25 }}>
            <StatusBar backgroundColor={'#fff'} />
            <LinearGradient colors={['#fff', '#fff', '#fff', '#fff']} style={{ flex: 1, alignItems: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20, }}>
                <Text style={{ textAlign: 'center', fontSize: 24, marginTop: 25 }}>Profile Bunda</Text>
                <View style={{ backgroundColor: 'transparent', width: '100%', height: '50%', margin: 5, borderRadius: 5, padding: 5, flex: 1, marginTop: 40 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 0 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Usia Ibu (Tahun)</Text>
                                <TextInput placeholder={'Masukkan Usia Anda'} style={{ padding: 0, fontSize: 16 }} returnKeyType="next" onSubmitEditing={() => ref_input2.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 27</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'grey', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Usia Kehamilan (Bulan)</Text>
                                <TextInput placeholder={'Masukkan Usia Kehamilan Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input2} returnKeyType="next" onSubmitEditing={() => ref_input3.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5  }}>Contoh: 7</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Kehamilan Keberapa</Text>
                                <TextInput placeholder={'Masukkan Kehamilan Keberapa Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input3} returnKeyType="next" onSubmitEditing={() => ref_input4.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5  }}>Contoh: 1</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Tempat Tanggal Lahir</Text>
                                <TextInput placeholder={'Masukkan Tempat Tanggal Lahir Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input4} returnKeyType="next" onSubmitEditing={() => ref_input5.current.focus()} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5  }}>Contoh: 29 Feb 1998</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Alamat Rumah</Text>
                                <TextInput placeholder={'Masukkan Alamat Rumah Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input5} returnKeyType="next" onSubmitEditing={() => ref_input6.current.focus()} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5  }}>Contoh: Jl. Mawar 2 No. 11, Jakarta</Text>
                        </View>
                        <View style={{ marginVertical: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Nomor Telepon</Text>
                                <TextInput placeholder={'Masukan Nomor Telepon Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input6} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5  }}>Contoh: 0813xxxxxxx</Text>
                        </View>
                    </ScrollView>

                </View>
                { !isKeyboardVisible && <TouchableOpacity onPress={() => navigation.navigate('StepProgress')} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#f781ad', width: '100%', flexDirection: 'row', borderColor: 'gray', borderWidth: .3, zIndex: 0 }}>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '800', color: 'white' }}>Selanjutnya</Text>
                    </View>
                    {/* <View style={{ paddingHorizontal: 7, paddingVertical: 7, backgroundColor: 'transparent', borderRadius: 50, justifyContent: 'center' }}> */}
                    <FA5 name={'angle-double-right'} size={30} color={'white'} />
                    {/* </View> */}
                </TouchableOpacity>}
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


export default Latihan;