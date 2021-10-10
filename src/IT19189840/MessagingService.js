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

const initialState = {
    mobileNumber: ''
}


const MessagingService = ({navigation}) => {

    const [mobileNumber, setmobileNumber] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }

    const checkTextInput = () => {
        if(!mobileNumber.trim()){
            alert('Please Enter Mobile Number');
            return;
        }
        //save data
        fetch("http://localhost:3000/mobile/newobileNumber", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                mobileNumber
            })
        })
        .then(res => res.json(),
            alert("Success"),
            navigation.navigate("Home")
        )
    };


    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            
            <View style={styles.halfcircleShape} />
            <Text style={styles.titlemsg}> Messaging Service</Text>
            <Text style={styles.accountselectiontitle}>Choose your account{"\n"}{"\n"}</Text>
            <View style={styles.accountlist}>
                <TouchableOpacity style={styles.accountitem}>
                    <Text>< MaterialIcons name="home" size={20} color="black"/>Home{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.accountitem}>
                    <Text><MaterialIcons name="home" size={20} color="black"/>Office{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.accountlist2}>
                <TouchableOpacity style={styles.accountitem}>
                    <Text>< MaterialIcons name="home" size={20} color="black"/>Home{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.accountitem}>
                    <Text><MaterialIcons name="home" size={20} color="black"/>Office{"\n"}50/09/34/01</Text>
                </TouchableOpacity>
            </View>
           
            <Text style={styles.numberregistertext}>Register your phone number{"\n"}{"\n"}</Text>
            <View style={styles.registernum}>
                    <TextInput
                        keyboardType="number-pad"
                        style={styles.input}
                        placeholder="                +974 XXX XXXX"
                        value={mobileNumber}
                        onChangeText={text => setmobileNumber(text)}
                        keyboardType="numeric"
                    />
            </View>
            
            <TouchableOpacity style={styles.registerbtn} onPress = {() => checkTextInput()}>
                <Text style={styles.textRegister}>Register</Text>
                
            </TouchableOpacity>
            
             
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    halfcircleShape: {
        width: 410,
        height: 410,
        backgroundColor: '#00a695',
        borderRadius: 205,
        transform: [{scaleX: 1.0}],
        top: -205,
        opacity: 0.3
    },
    titlemsg: {
        marginTop: -350,
        marginLeft: 50,
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'

    },
    accountselectiontitle: {
        marginTop: 100,
        color: 'black',
        textAlign: 'center',
        fontSize: 20

    },
    accountlist:{
        marginTop: -25,
        flex: 1,
        fontSize: 15,
        color: 'black',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 14
    },
    accountlist2:{
        top: 85,
        flex: 1,
        fontSize: 15,
        color: 'black',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    accountitem:{
        top: 5,
        height: 75,
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 0.9,
        paddingBottom: 15,
        paddingLeft:15,
        paddingRight: 15,
        paddingTop: 10,
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
    numberregistertext: {
        marginTop: 195,
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        top: 0,
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
    registerbtn:{
        width: 150,
        marginLeft: 120,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 15.22,
        elevation: 3,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        paddingTop: 7,
        paddingBottom: 25,
        backgroundColor: '#04befe',
        
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
    textRegister: {
        color: 'white'
    }
})
export default MessagingService
