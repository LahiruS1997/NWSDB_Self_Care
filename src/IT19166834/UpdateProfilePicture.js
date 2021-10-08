import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

function UpdateProfilePicture({navigation}) {

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Upload Image</Text>

                <View style={styles.mainImageView}>
                    <TouchableOpacity>
                        <View style={styles.rectangleShape} />
                        <Image style={styles.imageProfile} source={require('../../assets/profile/profile_icon.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.buttonEditProfile}>
                        <Button color="white" title="Upload" ></Button>
                    </View>
                    <View style={styles.buttonEditPassword}>
                        <Button color="white" title="Cancel" onPress = {() => navigation.navigate('Profile')}></Button>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default UpdateProfilePicture

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
    imageProfile: {
        width:250,
        height: 250,
        marginTop: -275,
        marginLeft: 20,
        backgroundColor: 'black',
        borderRadius: 140,
    },
    rectangleShape: {
        backgroundColor: 'rgba(95, 197, 255, 0.6)',
        width: 300,
        height: 300,
        borderRadius: 50,
    },
    mainImageView: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 120
    },
    buttonEditProfile: {
        backgroundColor: '#022BFF',
        width: '37%',
        borderRadius: 20,
        marginTop: 150,
        marginLeft: 30
    },
    buttonEditPassword: {
        backgroundColor: '#022BFF',
        width: '37%',
        borderRadius: 20,
        marginLeft: 213,
        marginTop: -37,
    }
})