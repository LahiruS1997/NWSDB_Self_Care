import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView,
    Image,
    Divider,
    ImageBackground
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Line from './Line'


function BillCalculator({navigation}) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [consumption, setConsumption] = useState('')
    

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>

                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Plumbers</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 120}}>

                    

                    <View style={styles.rectangle}>
                        <Text style={styles.firstText}>The Objective of this feature is to assist general public to get the service of qualified plumbers based on their proximity. This contains the details of plumbers who trained by the National Water Supply and Board.</Text>
                    </View>

                    <ScrollView>
                    <View style={styles.dataRectangle1}>
                    <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{width: 370,
                        height: 60, 
                        marginLeft:0,
                        marginTop: 0,
                        borderRadius: 25,}}>

                        <FontAwesome5 name="search" size={35} color="black"  style={{marginTop:10, marginLeft: 30}}/>
                        <Text style={{marginTop: -35, marginLeft: 120, fontSize: 30}}>Search</Text>
                        <AntDesign name="closecircleo" size={30} color="black" style={{marginTop: -35, marginLeft: 320 }} />


                    </LinearGradient>
                    </View>
                    {/* <ImageBackground source={require('../../assets/11.jpeg')} style={{width: '100%', height: '100%'}} >
                        
                    </ImageBackground> */}
                                
                    <View style={styles.dataRectangle2}> 
                    
                                
                            <View style={styles.databox}>
                                <Image 
                                    style={{width:100, height:100, borderRadius:25, marginTop:10, marginLeft:10}}
                                    source ={{uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'}}
                                 />  
                                <Text style={styles.charge1}></Text>

                                <AntDesign name="rightcircleo" size={24} color="black" style={styles.charge2} />
                            </View> 

                            <View style={styles.detailsList}>
                                <Text style={styles.details}>W.P.C. Sdakalum</Text>
                                <Text style={styles.details}>Colombo 10</Text>
                                <Text style={styles.details}>5 Years Experince</Text>
                                <Text style={styles.details}>07759831648</Text>
                            </View>
                            
                            <Line />

                            <View style={styles.databox}>
                                <Image 
                                    style={{width:100, height:100, borderRadius:25, marginTop:10, marginLeft:10}}
                                     
                                    source ={{uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'}}
                                /> 
                                <Text style={styles.charge1}></Text>

                                <AntDesign name="rightcircleo" size={24} color="black" style={styles.charge2} />

                            </View>

                            <View style={styles.detailsList}>
                                <Text style={styles.details}>W.P.C. Sdakalum</Text>
                                <Text style={styles.details}>Colombo 10</Text>
                                <Text style={styles.details}>5 Years Experince</Text>
                                <Text style={styles.details}>07759831648</Text>
                            </View> 
                            
                            <Line /> 

                            <View style={styles.databox}>
                                <Image 
                                    style={{width:100, height:100, borderRadius:25, marginTop:10, marginLeft:10}}
                                    source ={{uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'}}
                                /> 
                                <Text style={styles.charge1}></Text>
                              

                                <AntDesign name="rightcircleo" size={24} color="black" style={styles.charge2} />

                            </View> 

                            <View style={styles.detailsList}>
                                <Text style={styles.details}>W.P.C. Sdakalum</Text>
                                <Text style={styles.details}>Colombo 10</Text>
                                <Text style={styles.details}>5 Years Experince</Text>
                                <Text style={styles.details}>07759831648</Text>
                                 
                            </View>
 
                            
                    </View>
                     
                    </ScrollView>
 
                     
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default BillCalculator

const styles = StyleSheet.create({
    circleShape: {
        width: 697,
        height: 698,
        borderRadius: 349,
        backgroundColor: 'rgba(236, 253, 255, 1)',
        transform: [{rotate: '-18.51deg'}, {scaleX: 1.03}],
        flexDirection: 'column-reverse',
        marginLeft: -340,
        marginTop: 100
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    editProfileText: {
        marginTop: -796,
        marginLeft:  '35%',
        fontSize: 35,
        color: '#01239C'
    },
    todoInput: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '80%',
        marginTop: 15,
        paddingLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    firstText: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 22,
        color: '#fff'
    }, 
    rectangle: {
        width: 370,
        height: 150,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        alignItems:'center',
        marginLeft:20,
        marginTop: -120,
        borderRadius: 25,
   
    },
    dataRectangle1: {
        width: 370,
        height: 60,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 10,
        borderRadius: 25,
        
    },
    dataRectangle2: {
        width: 370,
        height: 400,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 10,
        borderRadius: 25,
        
    },
    
    todoInput2: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '40%',
        marginTop: 25,
        paddingLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30
    },
    todoInput3: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: 325,
        marginTop: 25,
        paddingLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30
    },
    buttonsgrid: {
        flexDirection:'row',
    },
    calculation: {
        flexDirection:'row',
    },

    buttonCalc: {
        backgroundColor: '#fff',
        width: 325,
        marginLeft: 30,
        marginTop: 25,

    },
    billTitle: {
        fontSize: 35,
        color: '#01239C',
        marginTop: 10,
        marginLeft: 10,
    },
    charge1: {
        fontSize: 22,
        width: '40%',
        color: 'black',
        marginTop: 20,
        marginLeft: 10,
    },
    charge2: {
        fontSize: 54,
        width: '30%',
        color: 'black',
        marginTop: 35,
        marginLeft: 15,
         
    },
    details: {
        fontSize: 20,
        marginLeft: 120,
        marginTop: 0,
         
    },
    detailsList: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: -110,
        marginBottom: 20
    },
    databox: {
         height: 120,
         backgroundColor: 'white',
         flexDirection:'row',
        borderRadius: 25,

    }
     
     
    
    
    
})