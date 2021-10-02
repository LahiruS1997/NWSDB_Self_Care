import React, {useState} from 'react';
import {
    View, 
    Text, 
    Button, 
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Accounts({navigation}){
    

    return(
        <SafeAreaView >
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            <View style={styles.circleShape}/>
            <Text style={styles.firstText}>Manage Accounts</Text>

           

           
           
            </View>
            <LinearGradient colors={['rgba(161, 196, 253, 1)', 'rgba(194, 233, 251, 1)']} style={styles.rectangleEditAcc}>
           
                <TextInput 
                           style={styles.editAccName}
                           placeholder= 'Home'
                />
                <Text style={styles.marginAccName}>Account Name</Text>
                <Text style={styles.marginAccNo}>Account Number</Text>

                <TextInput 
                            style={styles.inputAccNo}
                           placeholder= '20 / 06 / 23 / 34'
                />
                <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.submitRectangle}>
              
                    <Text style={styles.accSubmit}>Submit</Text>
                    <Ionicons style={styles.submitIcon} name="checkmark-done-circle" size={25} color="black" />
                    </LinearGradient>

                <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.dissmissRectangle}>

                    <Text style={styles.accDismiss}>Dismiss</Text>
                    <MaterialIcons style={styles.submitIcon} name="cancel" size={25} color="black" onPress = {() => navigation.navigate('Accounts')} />
                    </LinearGradient>
             
                </LinearGradient>
             

                

            </LinearGradient>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    circleShape: {
        width: 640,
        height: 658,
        borderRadius: 329,
        backgroundColor: 'rgba(236, 253, 255, 1)',
        transform: [{rotate: '-18.51deg'}, {scaleX: 1.03}],
        flexDirection: 'column-reverse',
        marginLeft: -300,
        marginTop: -100
    },
    firstText: {
        marginTop: -530,
        marginLeft: 20,
        fontSize: 35,
        color: '#01239C'
    },

    rectangleEditAcc: {
        marginTop:-45,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        borderRadius: 29,
        height: 300,
        width: 360,
        marginLeft:60,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
   
    },
    marginIcon:{
        marginTop: 22,
        marginLeft:14
    },
    marginAccName: {
        marginTop:-74,
        marginLeft: 50,
        fontSize:16
    },

    marginAccNo: {
        marginTop:64,
        marginLeft: 50,
        fontSize:16
    },
   
    payAcc:{
        marginTop: 64,
        width:100,
        marginLeft:15,
        backgroundColor: '#022BFF',
        borderRadius: 20,
    },

    submitRectangle:{
        marginTop: 30,
        marginLeft: 45,
        width:100,
        height:40,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        borderRadius:170,
        borderColor: '#053BC5',
        paddingLeft:28
    },

    dissmissRectangle:{
        marginTop: -40,
        marginLeft: 225,
        width:100,
        height:40,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        borderRadius:170,
        borderColor: '#053BC5',
        paddingLeft:28
    },

    accSubmit:{
        marginTop: 10,
        fontSize:14,
        marginLeft:8
    },

    accDismiss:{
        marginTop: 10,
        fontSize:14,
        marginLeft:8
    },

    submitIcon:{
        marginTop: -22,
        marginLeft:-20

    },

  
    btnA:{
        
        borderRadius:400
    },

    editAccName: {
        height: 45,
        borderWidth: 2,
        width: '80%',
        marginTop: 45,
        paddingLeft: 98,
        borderRadius: 25,
        backgroundColor: 'white',
        marginLeft: 40,
        borderColor: 'white',
    },

    inputAccNo: {
        height: 45,
        borderWidth: 2,
        width: '80%',
        marginTop: 10,
        paddingLeft: 98,
        borderRadius: 25,
        backgroundColor: 'white',
        marginLeft: 40,
        borderColor: 'white',
    },

})
