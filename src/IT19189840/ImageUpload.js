import { View, Text, Image, StyleSheet, Platform, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = ({route, navigation}) => {
    const meter = route.params;
    const [selectedImage, setSelectedImage] = React.useState(null);

    const checkTextInput = () => {
      if(selectedImage == null){
          alert('Please Upload image');
          return;
      }
      //save data
      fetch("http://localhost:3000/api/meter", {
          method: "post",
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              meter,
              selectedImage
          })
      })
      .then(res => res.json(),
          alert("Success"),
          navigation.navigate("Home")
      ).then(Promise.resolve()); 
  };

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
  
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri });
    };
  
    if (selectedImage !== null) {
      return (
        <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
        <View style={styles.container1}>
           
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
          <TouchableOpacity style={styles.uploadimgbtn}  color="blue" onPress = {() => checkTextInput()}>
                <Text>Submit</Text>
        </TouchableOpacity>
            
        </View>
        </LinearGradient>
        
      );
    }
    return (
        <SafeAreaView>
        <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
        <View style={styles.cover}>
        
        <View style={styles.halfcircleShape} />
        <Text style={styles.titlemsg}> Upload Image</Text>

        <View style={styles.container}>
                <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-cloud-upload-icon-png-image_316794.jpg' }} style={styles.logo} />
                <Text style={styles.instructions}>
                    
                </Text>

                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Pick a photo</Text>
                </TouchableOpacity>
        </View>
      
        
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
      marginTop: -350,
      marginLeft: 70,
      fontSize: 35,
      color: 'black',
      fontWeight: 'bold'

    },
    container: {
      marginTop: 300,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container1: {
        marginTop: 50,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      logo: {
        width: 305,
        height: 169,
        marginBottom: 20
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#04befe',
        padding: 20,
        borderRadius: 5,
        paddingBottom: 45
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
      },
      uploadimgbtn:{
        width: 180,
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
        backgroundColor: '#04befe',
        top: 10
        
    }
   
})
export default ImageUpload
