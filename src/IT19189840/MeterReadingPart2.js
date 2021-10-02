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

export default function MeterReadingPart2({navigation}) {
    const [text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            
            <View style={styles.halfcircleShape} />
            <Text style={styles.instruct2}>Enter these black numbers only</Text>
            <View style={styles.redrec} />
            <View>
                <Image
                 style={styles.imgcontainer}
                    source={require('../../assets/watermeter.jpg')}/>
            </View>
            <View style={styles.redrec2} />
           
            <View style={styles.registernum}>
                    <TextInput
                        style={styles.input}
                        placeholder="           Enter Meter Reading"
                        onChangeText={changeHandler}
                    />
            </View>
            <TouchableOpacity style={styles.uploadimgbtn}  color="blue" onPress = {() => navigation.navigate('SampleHome')}>
                <Text>Upload Image</Text>
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
    instruct2: {
        marginTop: -310,
        marginLeft: 20,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 100

    },
    imgcontainer:{
        resizeMode: 'contain',
        height: 200,
        width: 300,
        marginLeft: 20
        
    },
    redrec2:{
        width: 60,
        height:60,
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: "solid",
        marginLeft: 115,
        marginTop: -150
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
        marginLeft: 50,
        marginBottom: 40,
        marginTop: 120
    },
    uploadimgbtn:{
        width: 180,
        marginLeft: 100,
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
        height: 35,
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
