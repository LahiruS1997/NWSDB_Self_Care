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

export default function Login({navigation}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return(
        <SafeAreaView >
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
            <View style={styles.cover}>
            <View style={styles.circleShape}/>
            <Text style={styles.firstText}>Sign In</Text>

            <View style={{flex: 1, alignItems: 'center', marginTop: 140}}>
                <TextInput 
                    style={styles.todoInput}
                    value={username}
                    placeholder= 'Username'
                    onChangeText={text => setUserName(text)}
                />
                <TextInput 
                    style={styles.todoInput}
                    value={password}
                    placeholder= 'Password'
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <View style={styles.signInButton}>
                <Button title="Sign in" onPress = {() => navigation.navigate('SampleHome')} />
            </View>

            <View style={styles.signUpText}>
                <Text style={{fontSize: 20}}>Don't Have an Account? Sign Up</Text>
            </View>
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
