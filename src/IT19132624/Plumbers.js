import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


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
                    <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{ marginTop:2,height:60, borderRadius: 25}}>
                        <FontAwesome5 name="search" size={35} color="black"  style={{marginTop:10, marginLeft: 30}}/>
                        <Text style={{marginTop: -35, marginLeft: 120, fontSize: 30}}>Search</Text>
                        <AntDesign name="closecircleo" size={30} color="black" style={{marginTop: -35, marginLeft: 320 }} />


                    </LinearGradient>
                    </View>
                    <View style={styles.dataRectangle2}> 
                            <View style={styles.calculation}>
                                <MaterialCommunityIcons name="face-profile" size={100} color="black" style={{marginTop:20}}/>
                                <Text style={styles.charge1}>Usage Charge</Text>
                                <AntDesign name="rightcircleo" size={24} color="black" style={styles.charge2} />
                            </View> 
                            <View style={styles.detailsList}> 
                                <Text style={styles.details}>W.P.C. Sdakalum</Text>
                                <Text style={styles.details}>Colombo 10</Text>
                                <Text style={styles.details}>5 Years Experince</Text>
                                <Text style={styles.details}>07759831648</Text> 
                            </View>

                            <View style={styles.calculation}>
                                <MaterialCommunityIcons name="face-profile" size={100} color="black" />
                                <Text style={styles.charge1}>Usage Charge</Text>
                                <AntDesign name="rightcircleo" size={24} color="black" style={styles.charge2} />
                            </View> 
                            <View style={styles.detailsList}> 
                                <Text style={styles.details}>W.P.C. Sdakalum</Text>
                                <Text style={styles.details}>Colombo 10</Text>
                                <Text style={styles.details}>5 Years Experince</Text>
                                <Text style={styles.details}>07759831648</Text> 
                            </View>

                            <View style={styles.calculation}>
                                <MaterialCommunityIcons name="face-profile" size={100} color="black" />
                                <Text style={styles.charge1}>Usage Charge</Text>
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
        marginTop: 50,
        marginLeft: 30,
         
    },
    details: {
        fontSize: 20,
        marginLeft: 100,
        marginTop: 0,
         
    },
    detailsList: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: -60
    },
     
     
    
    
    
})