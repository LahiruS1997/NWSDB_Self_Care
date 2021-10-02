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



const MessagingService = ({navigation}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            
            <View style={styles.halfcircleShape} />
            <Text style={styles.titlemsg}> Messaging Service</Text>
            <Text style={styles.accountselectiontitle}>Choose your account{"\n"}{"\n"}</Text>
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
            <Text style={styles.numberregistertext}>Register your phone number{"\n"}{"\n"}</Text>
            <View style={styles.registernum}>
                    <TextInput
                        style={styles.input}
                        placeholder="                +974 XXX XXXX"
                        onChangeText={changeHandler}
                    />
            </View>
            
            <TouchableOpacity style={styles.registerbtn}  color="blue" onPress = {() => navigation.navigate('SampleHome')}>
                <Text>Register</Text>
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
        marginLeft: 20,
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'

    },
    accountselectiontitle: {
        marginTop: 120,
        color: 'black',
        textAlign: 'center',
        fontSize: 20

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
        backgroundColor: '#04befe'
        
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
export default MessagingService
