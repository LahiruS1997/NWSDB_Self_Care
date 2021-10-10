import React from 'react'
import {
    View, 
    Text, 
    Button, 
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function SampleHome({navigation}) {
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            <View style={styles.circleShape}/>
                <View style={styles.aboutusButton}>
                    <Button title="About us" onPress = {() => navigation.navigate('MessagingService')} />
                </View>
                <View style={styles.meterButton}>
                    <Button title="Meter Reading" onPress = {() => navigation.navigate('MeterReading1')} />
                </View>
            </View>
            </LinearGradient>
        </SafeAreaView>
            
        
    )
}
const styles = StyleSheet.create({
    circleShape: {
        width: 360,
        height: 360,
        borderRadius: 180,
        backgroundColor: 'rgba(236, 253, 255, 1)',
        transform: [{scaleX: 1.0}],
        top: -180
        
    },
    firstText: {
        marginTop: -530,
        marginLeft: 20,
        fontSize: 35,
        color: '#01239C'
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
    aboutusButton: {
        backgroundColor: '#022BFF',
        width: '50%',
        borderRadius: 20,
        marginLeft: '25%',
        marginBottom: 50
    },
    meterButton: {
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

