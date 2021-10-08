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

function EditPassword({navigation}) {
    const [currentPassword, setFullName] = useState('')
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Change Password</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 160}}>
                    <TextInput 
                        style={styles.todoInput}
                        value={currentPassword}
                        placeholder= 'Current Password'
                        onChangeText={text => setUserName(text)}    
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={userName}
                        placeholder= 'New Password'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput 
                        style={styles.todoInput}
                        value={email}
                        placeholder= 'Re enter new password'
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

export default EditPassword

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
        marginTop: 190
    },
    buttonCancel: {
        backgroundColor: '#022BFF',
        width: '80%',
        borderRadius: 20,
        marginTop: 10
    },
})