import React, {useState} from 'react';
import {
    View, 
    Text, 
    Button, 
    StyleSheet,
    TextInput,
    SafeAreaView,
    Pressable
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Accounts({navigation}){
    

    return(
        <SafeAreaView >
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            <View style={styles.circleShape}/>
            <Text style={styles.firstText}>Manage Accounts</Text>

           

           
           
            </View>

            <LinearGradient colors={['rgba(161, 196, 253, 1)', 'rgba(194, 233, 251, 1)']} style={styles.rectangleAccount}>
            
            <Entypo style={styles.marginIcon} name="home" size={32} color="black" />
                <Text style={styles.marginAccName}>40 / 07 / 15 / 12</Text>
                <Text style={styles.marginPlace}>Home</Text>
                <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.payAcc}>
                <Pressable title="E D I T" onPress = {() => navigation.navigate('EditAccount')}>
                <Text style={styles.btnAtxt}>EDIT</Text>
                </Pressable>
                </LinearGradient>  
               
                <AntDesign style={styles.closeBtn} name="closecircle" size={24} color="black" />
                <View>
                <LinearGradient colors={['rgba(161, 196, 253, 1)', 'rgba(194, 233, 251, 1)']} style={styles.accAmount}>
                    <Text >LKR. 1300. 00</Text>
                    </LinearGradient>
                </View>
                </LinearGradient>

                <LinearGradient colors={['rgba(161, 196, 253, 1)', 'rgba(194, 233, 251, 1)']} style={styles.rectangleAccount2}>
                
                <Entypo style={styles.marginIcon} name="home" size={32} color="black" />
                <Text style={styles.marginAccName}>40 / 07 / 15 / 32</Text>
                <Text style={styles.marginPlace}>Office</Text>
                
                
                
                <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.payAcc}>
                <Pressable title="E D I T" onPress = {() => navigation.navigate('EditAccount')}>
                <Text style={styles.btnAtxt}>EDIT</Text>
                </Pressable>
                </LinearGradient>  


                


                
             
               
                <AntDesign style={styles.closeBtn} name="closecircle" size={24} color="black" />
                <LinearGradient colors={['rgba(161, 196, 253, 1)', 'rgba(194, 233, 251, 1)']} style={styles.accAmount}>
                    <Text >LKR. 750. 00</Text>
                </LinearGradient>

                
                
                </LinearGradient>
               
                
                <View style={styles.addACCBtn}>
                <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.btnA}>
                    <Pressable   borderRadius="24" title="ADD ACCOUNT" onPress = {() => navigation.navigate('AddAccount')}>
                        <Text style={styles.btnAtxt}>ADD ACCOUNT</Text>
                    </Pressable>
                    </LinearGradient>  
                </View>

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

    rectangleAccount: {
        marginTop:-45,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        borderRadius: 29,
        height: 138,
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
        marginTop:-37,
        marginLeft: 64
    },
    marginPlace:{
        marginTop: 1,
        marginLeft: 63
    },
    payAcc:{
        marginTop: 14,
        width:100,
        marginLeft:15,
        backgroundColor: '#470979',
        borderRadius: 20,
        height: 36,
        paddingLeft:28,
        paddingTop:8
    },
    payAcc2:{
        marginTop: 14,
        width:100,
        marginLeft:15,
        backgroundColor: '#470979',
        borderRadius: 20,
        height: 38,
        paddingLeft:19


    },
    closeBtn:{
        marginLeft: 350,
        marginTop: -115
    },
    miniRectangle:{
        marginTop: 5,
        marginLeft: 220,
        width:100,
        height:40,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        borderRadius:170
    },
    accAmount:{
        marginTop: 10,
        fontSize:14,
        marginLeft:250,
        height:30,
        width:100,
        borderRadius:170,
        paddingLeft:8,
        paddingTop:6
    },
    rectangleAccount2: {
        marginTop:35,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        borderRadius: 29,
        height: 138,
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

    addACCBtn: {
        marginTop:45,
        height: 290,
        marginLeft:170,
        width:160,
        borderRadius: 129,
        // backgroundColor:'#022BFF'
    },
    btnA:{
        // backgroundColor:'black',
        // borderRadius:4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 34,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: '#470979',

        width: 200,
        shadowColor:'black'
    },
    btnAtxt:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }

})