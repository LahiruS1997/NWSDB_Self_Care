import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, SafeAreaView, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const initialState = {
    fullname: '',
    username: '',
    email: '',
    nicNumber: '',
    mobileNumber: '',
    password: ''
}

export default function Register({navigation}){
    const [fullname, setFullName] = useState('')
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nicNumber, setNicNumber] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')



    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!fullname.trim()) {
          alert('Please Enter full Name');
          return;
        }
        //Check for the Email TextInput
        if (!userName.trim()) {
          alert('Please Enter User Name');
          return;
        }
        if (!email.trim()) {
            alert('Please Enter full Name');
            return;
        }
          //Check for the Email TextInput
        if (!nicNumber.trim()) {
            alert('Please Enter User Name');
            return;
        }
        if (!mobileNumber.trim()) {
            alert('Please Enter full Name');
            return;
        }
          //Check for the Email TextInput
        if (!password.trim()) {
            alert('Please Enter User Name');
            return;
        }
        //Checked Successfully
        fetch("http:/localhost:3000/user/NewUser", {
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                fullname,
                userName,
                email,
                nicNumber,
                mobileNumber,
                password,
            })
        })
        .then(res => res.json(),
            Alert.alert("Successfully Registered.!"),
            navigation.navigate("Profile")
        )
    };  

    const onRegister = () => {
        navigation.navigate("Profile")
    }

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: 750}}>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.firstText}>Sign Up</Text>
                
                <View style={{flex: 1, alignItems: 'center', marginTop: 90}}>
                    <TextInput 
                        style={styles.todoInput}
                        value={fullname}
                        placeholder= 'Full Name'
                        required
                        onChangeText={text => setFullName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={userName}
                        placeholder= 'Username'
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'Email'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={nicNumber}
                        placeholder= 'NIC number'
                        onChangeText={text => setNicNumber(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={mobileNumber}
                        placeholder= 'Mobile number'
                        onChangeText={text => setMobileNumber(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={password}
                        placeholder= 'Password'
                        onChangeText={text => setPassword(text)}
                    />

                    <View style={styles.signUpButton}>
                        <Button color="white" title="Sign Up" onPress={() => checkTextInput()} />
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
        color: '#01239C',
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
        marginTop: 110,
        backgroundColor: '#022BFF',
        width: '50%',
        borderRadius: 20,
    },
})