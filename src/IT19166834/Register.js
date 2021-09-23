import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function Register({navigation}){
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nicNumber, setNicNumber] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: 750}}>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.firstText}>Sign Up</Text>
                
                <View style={{flex: 1, alignItems: 'center', marginTop: 70}}>
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Full Name'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Username'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Email'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'NIC number'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Mobile number'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Password'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={username}
                        placeholder= 'Re enter passsword'
                        onChangeText={text => setUserName(text)}
                    />

                    <View style={styles.signUpButton}>
                        <Button title="Sign Up" onPress = {() => navigation.navigate('Profile')} />
                    </View>
                </View>

            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    circleShape: {
        width: 697,
        height: 698,
        borderRadius: 349,
        backgroundColor: 'rgba(236, 253, 255, 1)',
        transform: [{rotate: '-18.51deg'}, {scaleX: 1.03}],
        flexDirection: 'column-reverse',
        marginLeft: -340,
        marginTop: 100
    },
    firstText: {
        marginTop: -766,
        marginLeft: 20,
        fontSize: 35,
        color: '#01239C'
    },
    todoInput: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '80%',
        marginTop: 15,
        paddingLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    signUpButton: {
        marginTop: 70,
        backgroundColor: '#022BFF',
        width: '50%',
        borderRadius: 20,
    },
})