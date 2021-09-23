import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    SafeAreaView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

function Profile({navigation}) {
    const [email, setEmail] = useState('');
    const [nicNumber, setNicNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.rectangleCover} />
                <View style={styles.circleProfile} />
                <Text style={styles.usernameText}>Username</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 160}}>
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'Email'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'NIC Number'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'Mobile Number'
                        onChangeText={text => setEmail(text)}
                    />

                    <View style={styles.buttonEditProfile}>
                        <Button title="Edit Profile" onPress = {() => navigation.navigate('EditProfile')}></Button>
                    </View>
                    <View style={styles.buttonEditPassword}>
                        <Button title="Edit Password" onPress = {() => navigation.navigate('EditPassword')}></Button>
                    </View>
                    <View style={styles.buttonRemoveAccount}>
                        <Button title="Remove Account"></Button>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    rectangleCover: {
        backgroundColor: '#CFF4FF',
        width: 350,
        height: 410,
        transform: [{rotate: '60deg'}],
        marginTop: -200,
        marginLeft: -5,
        borderRadius: 60,
        flexDirection: 'column-reverse'
    },
    usernameText: {
        fontSize: 25,
        marginTop: -40,
        marginLeft: 140
    },
    todoInput: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '80%',
        marginTop: 15,
        marginBottom: 5,
        paddingLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    circleProfile: {
        width: 90,
        height: 90,
        backgroundColor: 'blue',
        borderRadius: 45,
        marginTop: -190,
        marginLeft: 20
    },
    buttonEditProfile: {
        marginTop: 90,
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
    },
    buttonEditPassword: {
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
        marginTop: 10
    },
    buttonRemoveAccount: {
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
        marginTop: 10
    }
})