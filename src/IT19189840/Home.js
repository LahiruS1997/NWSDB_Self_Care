import React, {useState} from 'react';
import {
    View, 
    Text, 
    Button, 
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    Pressable
    
    
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const images = [
    'https://cdn.newsfirst.lk/english-uploads/2021/02/7a24fecc-0a35c87d-592fc8d4-nwsdb-edited-_850x460_acf_cropped_850x460_acf_cropped.jpg',
    'https://uploads.ceylontoday.lk/images/2020/11/mwHeRtV1PwIPysJqC3UZPpf6CLJvysOS.jpg',
    'https://www.yellow.ug/img/ug/s/1603015707-40-national-water-sewerage-corporation-head-office.jpg',
]



export default function Home({navigation}){
    

    return(
        
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
             
             {/* <View><Text style={styles.homeText}>Home</Text></View> */}
            <View style={styles.cover}>
           
            <View style={styles.circleShape} />
            <View>
            <Text style={styles.firstText}>Home</Text>
            <View style={styles.wrap}>
                <ScrollView
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style = {styles.wrap}
                
                >{
                    images.map((e, index) => 
                        <Image key={index}
                        resizeMode="stretch"
                        style={styles.wrap}
                        source ={{uri:e}}
                    />
                    )
                    
                }</ScrollView>
               
                <View style={styles.wrapDot}>
                {
                    images.map((e, index) => {
                        <Text style={styles.dot}>●</Text>
                    })
                }
                
            </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', marginTop: 5, borderRadius:25, borderColor:'white',
            shadowColor: 'black', size:45
            }}>
                    <Text style={{fontSize:30}}>● ● ●</Text>
                    {/* <View style={styles.rectangle}></View> */}
                </View>

                
           
          
            </View>
         
            
            <View>
           
            <Feather style={styles.userIcon}
            name="user" size={28} color="black" />
            <Ionicons style={styles.bellIcon}
            name="notifications-outline" size={28} color="black" />
            <Ionicons style={styles.exitIcon}
            name="md-exit-outline" size={28} color="black" />
            </View>
            <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.rectangle}>
    
                 <Text style={styles.paymentText}>Total Payable</Text>
                 <Text style={styles.amountTxt}>LKR. 1200. 00</Text>
                 <Text style={styles.amountDate}>Pay before 21st of May</Text>
                 <LinearGradient colors={['rgba(224, 195, 252, 1)', 'rgba(142, 197, 252, 1)']} style={styles.buttonPayNow}>
                 <Pressable title="PAY NOW" >
                <Text style={styles.payNowTxt}>PAY NOW</Text>
                </Pressable>
                 </LinearGradient>  
                 </LinearGradient>
            
            
             <View style={styles.buttonRectangle}>
             <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle}>
                           
                <FontAwesome5 style={styles.marginfix} name="money-bill-alt" size={28} color="black"/>
                <Text>Bill Details</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle2}>
     
                <Entypo style={styles.marginfix} name="calculator" size={28} color="black" />
                <Text>Calculator</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle3}>
    
                <MaterialIcons style={styles.marginfix} name="payment" size={28} color="black" />
                <Text>Payment</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle4}>
 
                <MaterialCommunityIcons style={styles.marginfix} name="typewriter" size={28} color="black" />
                <Text>Complaints</Text>
                </LinearGradient>



                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle5} onPress = {() => navigation.navigate('Accounts')}>

               
                <MaterialIcons style={styles.marginfix} name="account-box" size={24} color="black" onPress = {() => navigation.navigate('Accounts')} />
                <Text>Accounts</Text>
                </LinearGradient>

                
                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle6}>
 
                <Entypo style={styles.marginfix} name="user" size={24} color="black" />
                <Text>Profile</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle7}   >
  
                <Entypo style={styles.marginfix} name="mail" size={24} color="black"  onPress = {() => navigation.navigate('MessagingService')}  />
                <Text>Contact Us</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle8}>
  
                <FontAwesome style={styles.marginfix} name="users" size={24} color="black" />
                <Text>Plumbers</Text>
                </LinearGradient>

                <LinearGradient colors={['rgba(69, 135, 244, 1)', 'rgba(194, 233, 251, 1)']} style={styles.miniRectangle9}   >
              
                <FontAwesome5 style={styles.marginfix} name="book-reader" size={24} color="black"  onPress = {() => navigation.navigate('MeterReading1')}/>
                <Text>Meter Read</Text>
                </LinearGradient>

             </View>

            

            <View style={{flex: 1, alignItems: 'center', marginTop: 140}}>
              
                
            </View>
  
            </View>
           
            </LinearGradient>

      
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
        marginTop: -548,
        marginLeft: 20,
        fontSize: 22,
        color: '#000000'
        
    },

    body: {
        
        color: '#01239C',
        flex:1,
        marginTop:-30,
        color: '#01239C'
    },

    userIcon: {
        marginTop: -540,
        marginRight: -200,
        marginLeft:260
    },

    bellIcon: {
        marginTop: -28,
        marginRight: 250,
        marginLeft:302
    },
    exitIcon:{
        marginTop: -30,
        marginRight: 250,
        marginLeft:342
    },
    homeText:{
        marginTop: 10,
        marginRight: 350,
        marginLeft:242
    },
    imagePosition:{
        marginTop: 25

    },
  
    wrap: {
        // width: Dimensions.get('window').width,
        width: 340,
        // height: Dimensions.get('window').height * 0.30,
        height: 160,
        marginLeft:8,
        marginTop:10,
        shadowColor: 'black',
        borderRadius: 25,
       
        
    },

    wrapDot: {
        position: 'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf: 'center',
        
    },

    dot: {
        margin: 3,
        color:'#888'
    },
    rectangle: {
        width: 348,
        height: 108,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        alignItems:'center',
        marginLeft:13,
        marginTop: -290,
        borderRadius: 25,
       
   
    },
    buttonRectangle: {
        width: 408,
        height: 278,
        // backgroundColor: 'rgba(69, 135, 244, 1)',
        alignItems:'center',
        marginLeft:8,
        marginTop: 5,
        borderRadius: 25,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    miniRectangle: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:6,
        marginTop: -5,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    marginfix:{
        marginTop:10
    },

    miniRectangle2: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -5,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle3: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -5,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle4: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:3,
        marginTop: -15,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle5: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -15,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle6: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -15,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle7: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:4,
        marginTop: -26,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle8: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -26,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    miniRectangle9: {
        width: 90,
        height: 68,
        backgroundColor: 'rgba(103, 155, 240, 1)',
        alignItems:'center',
        marginLeft:37,
        marginTop: -26,
        borderRadius: 25,
        opacity:6,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:4
    },

    paymentText: {
        marginTop: 4,
        fontSize:20,
        
    },
    buttonPayNow: {
        borderRadius:25,
        backgroundColor: 'rgba(251, 194, 235, 1)',
        width:100,
        marginTop:5,
        paddingLeft:19,
        shadowColor: '#000',
        shadowOffset:{
            width:4,
            height:4,
        },
        shadowOpacity:30,
        shadowRadius:2
       

    },
    payNowTxt:{
            fontSize:13
    },
    amountTxt: {
        fontSize:16,
        color:'#b10303',
        shadowColor: '#000',
        shadowOffset:{
            width:2,
            height:4,
        },
        shadowOpacity:1,
        shadowRadius:1
    },
    amountDate: {
        fontSize:12,
        marginTop:4
    }

    
    

  

  
   
})
