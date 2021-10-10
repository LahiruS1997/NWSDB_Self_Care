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
    const [meter, setMeter] = useState('')
    const checkTextInput = () => {
        if(!meter.trim()){
            alert('Please Enter Meter Reading');
            return;
        }
        
            navigation.navigate("ImageUpload", {
                meter: meter
            })
        
       
        
    };
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            
            <View style={styles.halfcircleShape} />
            <Text style={styles.instruct2}>Enter these black numbers only</Text>
            <View style={styles.wrapper}>
                <View style={styles.rectangle}/>
                <View style={styles.triangle}/>
            </View>
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
                        onChangeText={text => setMeter(text)}
                        keyboardType="numeric"
                    />
            </View>
            <TouchableOpacity style={styles.uploadimgbtn}  color="blue" onPress = {() => checkTextInput()}>
                <Text>Upload Image</Text>
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
        marginTop: -180,
        marginLeft: 20,
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'

    },
    instruct2: {
        marginTop: -350,
        marginLeft: 20,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 70

    },
    imgcontainer:{
        marginTop: 150,
        resizeMode: 'contain',
        height: 250,
        width: 350,
        marginLeft: 20,
        marginBottom: 20
        
    },
    redrec2:{
        width: 60,
        height:60,
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: "solid",
        marginLeft: 140,
        marginTop: -190
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
    wrapper: {
        flex: 0.2,
        alignItems:'center',
        paddingLeft: 29,
        paddingTop: 0,
        marginRight:60,
        marginTop: -60,
        marginLeft: -100,
        transform: [
            { rotate: '345deg' }
        ]


    },
    rectangle: {
        width: 8,
        backgroundColor: "red",
        margin: 0,
        height: 125,
        borderColor:"black",
        transform: [
            { rotate: '0deg' }
        ]

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 17,
        borderRightWidth: 17,
        borderBottomWidth: 33,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor:"red",
        transform: [
            { rotate: '180deg' }
        ],
        margin: 0,
        marginLeft: -6,
        borderWidth: 0
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
