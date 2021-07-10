import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, PermissionsAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Login({ navigation, route }) {
    const toast = useRef(null)

    useEffect(() => {
        requestCameraPermission()
        requestCameraPermissionRead()
    }, [])

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Askeb App Storage Permission",
                    message:
                        "Askeb App needs access to your storage" +
                        "so you can download a file.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const requestCameraPermissionRead = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Askeb App Storage Permission",
                    message:
                        "Askeb App needs access to your storage" +
                        "so you can download a file.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#c2e8f2'} />
            <Toast ref={toast} />
            <LinearGradient colors={['#c2e8f2', 'rgb(250, 202, 220)', 'rgb(250, 202, 220)', '#c2e8f2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20 }}>
                <View style={{ height: '50%', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ elevation: 10, margin: 10, backgroundColor: 'transparent', borderRadius: 175 }}>
                        <Image source={images.logoApp} style={{ width: 175, height: 175, borderRadius: 175 }} />
                    </View>
                </View>
                <View style={{ height: '50%', width: '100%', alignItems: 'center', paddingTop: 25 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Diary Pregnancy
                    </Text>
                    <Text style={{ marginTop: 10, textAlign: 'center', color: '#538491' }}>
                        Aplikasi karya mahasiswi Sarjana Kebidanan Angkatan 2019 untuk ibu hamil , Semoga bermanfaat.
                    </Text>
                    {/* navigation.navigate('Latihan') */}
                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Latihan')} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#3b5998', width: '100%', flexDirection: 'row', borderColor: '#3b5998', borderWidth: .3 }}>
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

export default Login;