import React, {useState} from 'react'
import {
    View, 
    Text, 
    Button, 
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const MeterReadingPart1 = ({navigation}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            
            <View style={styles.halfcircleShape} />
            <Text style={styles.titlemsg}> Meter Reading</Text>
            <Text style={styles.instruct1}>Due to the covid 19 situation if our officer unable to get meter reading in your area, upload your meter reading with photo of  meter reader</Text>
            <Text style={styles.accountselectiontitle}>Choose your account </Text>
            <View style={styles.accountlist}>
                <TouchableOpacity style={styles.tacclist}>
                    <Text style={styles.accountitem}><MaterialIcons name="home" size={20} color="black"/>Home{"\n"}50/09/34/01</Text>
                    <Text style={styles.accountitem}><MaterialIcons name="home" size={20} color="black"/>Office{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tacclist1}>
                    <Text style={styles.accountitem}><MaterialIcons name="home" size={20} color="black"/>Shop{"\n"}50/09/34/01</Text>
                    <Text style={styles.accountitem}><MaterialIcons name="home" size={20} color="black"/>Apartment{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
            </View>
      
            <TouchableOpacity style={styles.nextbtn}  color="blue" onPress = {() => navigation.navigate('MeterReading2')}>
                <Text style={styles.textnext} >Next</Text>
                <MaterialIcons name="arrow-forward" style={styles.arrowicon} size={25} color="black"/>
                
            </TouchableOpacity>
             
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    halfcircleShape: {
        width: 360,
        height: 360,
        backgroundColor: '#00a695',
        borderRadius: 180,
        transform: [{scaleX: 1.0}],
        top: -180,
        opacity: 0.3
    },
    titlemsg: {
        marginTop: -310,
        marginLeft: 37,
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'

    },
    instruct1: {
        marginTop: 120,
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'left'

    },
    accountselectiontitle: {
        marginTop: 10,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20

    },
    numberregistertext: {
        marginTop: 20,
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    tacclist:{
        flex: 1,
        fontSize: 15,
        color: 'black',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    tacclist1:{
        flex: 1,
        fontSize: 15,
        color: 'black',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    accountitem:{
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 0.9,
        paddingBottom: 20,
        paddingLeft:12,
        paddingRight: 12,
        paddingTop: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 30.22,
        elevation: 3,
        backgroundColor: '#CCE6F4'
    },
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: 200,
        alignItems: 'center',
        alignContent: 'center'
    },
    registernum:{
        borderWidth: 2,
        width: 250,
        marginLeft: 70,
        marginBottom: 40
    },
    nextbtn:{
        width: 250,
        marginLeft: 70,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 15.22,
        elevation: 3,
        borderRadius: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#04befe',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop: 70
        
        
    },
    textnext:{
        fontSize: 20,
        fontWeight: 'bold',


    },
    arrowicon:{
       
        
    },
    todoInput: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '80%',
        marginTop: 25,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    signInButton: {
        marginTop: 270,
        backgroundColor: '#022BFF',
        width: '50%',
        borderRadius: 20,
        marginLeft: '25%',
    },
    signUpText: {
        marginTop: 40,
        marginLeft: 55
    },
})

export default MeterReadingPart1;
