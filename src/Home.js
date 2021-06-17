import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Tabs, Tab, TabHeading, ScrollableTab } from 'native-base'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Toast from "react-native-fast-toast";
import database from '@react-native-firebase/database';

function Home({ navigation, routre }) {
    const [arrayChats, setArrayChats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const toast = useRef(null)

    useEffect(() => {
        // alert(arrayChats)
        // const reference = database().ref('/users/123');
        // console.log(reference) = 
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Toast ref={toast} />
            <StatusBar barStyle={'dark-content'} backgroundColor={'#87ddf5'} translucent={false} />
            <View style={{ width: '100%', backgroundColor: '#9ae1f5', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Whats Up</Text>
                    <FA5 name={'search'} size={15} style={{ color: 'black' }} />
                    {/* <Text>Search</Text> */}
                </View>
                <FA5 name={'ellipsis-v'} size={15} style={{ alignSelf: 'center', marginLeft: 25, marginRight: 10, color: 'black' }} />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: '#9ae1f5',
                zIndex: 0,
                // paddingHorizontal: 10
                // paddingTop: 20
            }}>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#4cc9f0' }} tabContainerStyle={{ borderTopLeftRadius: 32, borderTopRightRadius: 32, zIndex: 0 }} renderTabBar={() => <ScrollableTab backgroundColor={'transparent'} tabsContainerStyle={{ borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: 'transparent', zIndex: 0 }} />}>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: 'transparent' }}>
                            <FA5 name={'camera'} size={20} />
                        </TabHeading>}>
                        <View style={{ paddingHorizontal: 20, flex: 1, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text>
                                Coming Soon Brother!
                            </Text>
                        </View>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: 'transparent' }}>
                            <Text>Chats</Text>
                        </TabHeading>}>
                        <View style={{ paddingHorizontal: 10, flex: 1, backgroundColor: 'white' }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {arrayChats.map((item, index) => {
                                    return (
                                        <View key={index} style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#4cc9f0', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>{item}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, height: 50, paddingLeft: 10, justifyContent: 'center' }}>
                                                <Text>Name {item}</Text>
                                                <Text>Last Chat</Text>
                                            </View>
                                            <View style={{ width: '15%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 10 }}>Time LC</Text>
                                                <Text style={{ fontSize: 10 }}>Icon</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                            <TouchableOpacity onPress={() => toast.current.show(' Sabar yaak', {type: 'success', icon: <FA5 name="smile" size={25} color={'white'}/>})} style={{ zIndex: 1, position: 'absolute', height: 50, width: 50, backgroundColor: '#4cc9f0', bottom: 10, right: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={'message-text-outline'} size={25} color={'white'} style={{ transform: [{ rotate: '180deg' }] }} />
                            </TouchableOpacity>
                        </View>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: 'transparent' }}>
                            <Text>Status</Text>
                        </TabHeading>}>
                        <View style={{ paddingHorizontal: 10, flex: 1, backgroundColor: 'white' }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {arrayChats.map((item, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#4cc9f0', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>{item}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, height: 50, paddingLeft: 10, justifyContent: 'center' }}>
                                                <Text>Status Name {item}</Text>
                                                <Text>History Status</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: 'transparent' }}>
                            <Text>Calls</Text>
                        </TabHeading>}>
                        <View style={{ paddingHorizontal: 10, flex: 1, backgroundColor: 'white' }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {arrayChats.map((item, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#4cc9f0', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>{item}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, height: 50, paddingLeft: 10, justifyContent: 'center' }}>
                                                <Text>Name {item}</Text>
                                                <Text>History Call</Text>
                                            </View>
                                            <View style={{ width: '15%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                <FA5 name={'phone-alt'} size={20} color={'#4cc9f0'} />

                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </Tab>
                </Tabs>
            </View>
        </View>
    )
}

export default Home;