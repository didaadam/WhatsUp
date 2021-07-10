import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, ScrollView, Keyboard, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import images from './lib/image'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import firebase from './firebase/config'
import RNFetchBlob from 'react-native-fetch-blob';

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width

function Latihan({ navigation, route }) {
    const toast = useRef(null)
    const [username, setUsername] = useState('');
    const [usia, setUsia] = useState('');
    const [usiaHamil, setUsiaHamil] = useState('');
    const [kehamilan, setKehamilan] = useState('');
    const [bod, setBod] = useState('');
    const [alamat, setAlamat] = useState('');
    const [noHp, setNoHp] = useState('');
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

    const validate = () => {
        console.log();
        if (usia === "") {
            toast.current.show('Usia Ibu wajib diisi', { type: 'danger', position: "top" })
        } else if (usiaHamil === "") {
            toast.current.show('Usia Kehamilan wajib diisi', { type: 'danger', position: "top" })
        } else if (kehamilan === "") {
            toast.current.show('Kehamilan keberapa wajib diisi', { type: 'danger', position: "top" })
        } else if (bod === "") {
            toast.current.show('Tempat tanggal lahir wajib diisi', { type: 'danger', position: "top" })
        } else if (alamat === "") {
            toast.current.show('Alamat wajib diisi', { type: 'danger', position: "top" })
        } else if (noHp === "") {
            toast.current.show('Nomor telepon wajib diisi', { type: 'danger', position: "top" })
        } else {
            navigation.navigate('StepProgress')
        }
    }

    const cobadonlot = () => {

        const values = [
            ['build', '2017-11-05T05:40:35.515Z'],
            ['deploy', '2017-11-05T05:42:04.810Z']
        ];

        // construct csvString
        const headerString = 'event,timestamp\n';
        const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
        const csvString = `${headerString}${rowString}`;

        // write the current list of answers to a local csv file
        const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
        console.log('pathToWrite', pathToWrite);
        // pathToWrite /storage/emulated/0/Download/data.csv
        RNFetchBlob.fs
            .writeFile(pathToWrite, csvString, 'utf8')
            .then(() => {
                console.log(`wrote file ${pathToWrite}`);
                // wrote file /storage/emulated/0/Download/data.csv
            })
            .catch(error => console.error(error));
    }

    const getRestaurants = async () => {
        try {
            const list = [];
            var snapshot = await firebase.firestore().collection('askeb').get()
            //   firestore().collection("Restaurants").get();
            console.log(snapshot)
            console.log("Here");
            let array = []
            snapshot.forEach((doc) => {
                array.push(doc._data)
                // list.push(doc.data());
            });
            console.log(array)
            //   setRestaurantsList(list);
        } catch (e) {
            console.log(e)
            //   setErrorMessage(
            //     "There's nae bleeding restaurants, I told you to upload them!"
            //   );
        }
    };


    const tambahData = () => {
        firebase.firestore()
            .collection('askeb')
            .add({
                name: 'test yosssss',
                age: 28,
            })
            .then(() => {
                console.log('User added!');
            });
    }

    return (
        <View style={{ flex: 1, paddingTop: 25 }}>
            <StatusBar backgroundColor={'#fff'} />
            <Toast ref={toast} />
            <LinearGradient colors={['#fff', '#fff', '#fff', '#fff']} style={{ flex: 1, alignItems: 'center', backgroundColor: '#94b8f2', padding: 20, paddingTop: 20, }}>
                <Text style={{ textAlign: 'center', fontSize: 24, marginTop: 25 }}>Profile Bunda</Text>
                <View style={{ backgroundColor: 'transparent', width: '100%', height: '50%', margin: 5, borderRadius: 5, padding: 5, flex: 1, marginTop: 40 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 0 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Usia Ibu (Tahun)</Text>
                                <TextInput onChangeText={(text) => setUsia(text)} placeholder={'Masukkan Usia Anda'} style={{ padding: 0, fontSize: 16 }} returnKeyType="next" onSubmitEditing={() => ref_input2.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 27</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'grey', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Usia Kehamilan (Bulan)</Text>
                                <TextInput onChangeText={(text) => setUsiaHamil(text)} placeholder={'Masukkan Usia Kehamilan Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input2} returnKeyType="next" onSubmitEditing={() => ref_input3.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 7</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Kehamilan Keberapa</Text>
                                <TextInput onChangeText={(text) => setKehamilan(text)} placeholder={'Masukkan Kehamilan Keberapa Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input3} returnKeyType="next" onSubmitEditing={() => ref_input4.current.focus()} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 1</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Tempat Tanggal Lahir</Text>
                                <TextInput onChangeText={(text) => setBod(text)} placeholder={'Masukkan Tempat Tanggal Lahir Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input4} returnKeyType="next" onSubmitEditing={() => ref_input5.current.focus()} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 29 Feb 1998</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Alamat Rumah</Text>
                                <TextInput onChangeText={(text) => setAlamat(text)} placeholder={'Masukkan Alamat Rumah Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input5} returnKeyType="next" onSubmitEditing={() => ref_input6.current.focus()} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: Jl. Mawar 2 No. 11, Jakarta</Text>
                        </View>
                        <View style={{ marginVertical: 15 }}>
                            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, backgroundColor: 'rgba(250, 202, 220, .4)' }}>
                                <Text style={{ fontSize: 14, color: '#4b4b4b', opacity: .9 }}>Nomor Telepon</Text>
                                <TextInput onChangeText={(text) => setNoHp(text)} placeholder={'Masukan Nomor Telepon Anda'} style={{ padding: 0, fontSize: 16 }} ref={ref_input6} keyboardType={'number-pad'} />
                            </View>
                            {/* <View style={{ width: '100%', height: .5, backgroundColor: 'black' }} /> */}
                            <Text style={{ fontSize: 12, color: '#4b4b4b', opacity: .5, marginTop: 5, fontStyle: 'italic', marginLeft: 5 }}>Contoh: 0813xxxxxxx</Text>
                        </View>
                    </ScrollView>

                </View>
                {!isKeyboardVisible && <TouchableOpacity onPress={() => validate()} style={{ borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#f781ad', width: '100%', flexDirection: 'row', borderColor: 'gray', borderWidth: .3, zIndex: 0 }}>
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