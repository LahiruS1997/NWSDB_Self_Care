import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

function EditProfile({navigation}) {
    const [fullName, setFullName] = useState('')
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [nicNumber, setnicNumber] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Edit Profile</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 120}}>
                    <TextInput 
                        style={styles.todoInput}
                        value={fullName}
                        placeholder= 'Full Name'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={userName}
                        placeholder= 'Username'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'Email'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={nicNumber}
                        placeholder= 'NIC number'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={mobileNumber}
                        placeholder= 'Mobile number'
                        onChangeText={text => setUserName(text)}
                    />

                    <View style={styles.buttonSave}>
                        <Button color= 'white' title="SAVE" onPress = {() => navigation.navigate('Profile')}></Button>
                    </View>
                    <View style={styles.buttonCancel}>
                        <Button color= 'white' title="Cancel" onPress = {() => navigation.navigate('Profile')}></Button>
                    </View>

                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default EditProfile

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
    editProfileText: {
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
    buttonSave: {
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
        marginTop: 120
    },
    buttonCancel: {
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
        marginTop: 10
    },
})