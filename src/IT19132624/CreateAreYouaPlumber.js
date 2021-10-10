import React, {useState} from 'react'
import { Text,
    View,
    StyleSheet,
    SafeAreaView, 
    Alert } from 'react-native';
    
import { TextInput, Button, Modal  } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
 

const CreatePlumber = ({navigation}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    const submitData =() => {
        fetch("http://localhost:3000/send-plumbers", {
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                phone,
                email,
                experience,
                picture,
                 
            })
        })
        .then(res => res.json(),
            Alert.alert(`   is saved Successfully.`),
            navigation.navigate("AreYoua")
        )
    }

    const pickFromGallery = async () => {
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if(!data.cancelled){
              let newfile = { uri:data.uri, 
                type: `test/${data.uri.split(".")[1]}`, 
                name:`test.${data.uri.split(".")[1]}` 
            }
            handleUpload(newfile)
          }else{
              Alert.alert("Not Uploaded")
          } 
    } 

    const pickFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if(!data.cancelled){
            let newfile = { uri:data.uri, 
              type: `test/${data.uri.split(".")[1]}`, 
              name:`test.${data.uri.split(".")[1]}` 
          }
          handleUpload(newfile)
        }else{
            Alert.alert("Not Uploaded")
        }
    }

    const handleUpload = (Image) => {
        const data = new FormData()
        data.append('file', Image)
        data.append('upload_preset', 'testApp')
        data.append("cloud_name", "slmarts")

        fetch("https://api.cloudinary.com/v1_1/slmarts/image/upload", {
            method: "post",
            body: data
        }).then(res=> res.json()).
        then(data=> {
            console.log(data)

        })
    }

    return(
        <View style={styles.root}>
            <TextInput
                label="name"
                style={styles.input}
                value={name}
                mode="outlined"
                theme={theme}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email"
                style={styles.input}
                value={email}
                mode="outlined"
                theme={theme}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Phone"
                style={styles.input}
                value={phone}
                mode="outlined"
                theme={theme}
                keyboardType="number-pad"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="Experience"
                style={styles.input}
                value={experience}
                mode="outlined"
                theme={theme} 
                onChangeText={text => setExperience(text)}
            />
            <Button 
            style={styles.input} 
            icon={picture==""?"upload": "check"}
            theme={theme}
            mode="contained" 
            onPress={() => setModal(true)}>
                Upload Image
            </Button> 

            <Button 
            style={styles.input} 
            icon="Content-save"
            theme={theme}
            mode="contained" 
            onPress={() => submitData()}>
                SAVE
            </Button> 

            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
            }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button 
                        theme={theme} 
                        icon="camera" 
                        mode="contained" 
                        onPress={() => pickFromCamera()}>
                            Camera
                        </Button>
                        <Button 
                        theme={theme}  
                        icon="image-area" 
                        mode="contained" 
                        onPress={() =>  pickFromGallery()}>
                            Gallery
                        </Button>

                    </View>
           
                    <Button  
                    theme={theme}
                    onPress={() => setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}
const theme = {
    colors: {
        primary: 'rgba(69, 135, 244, 1)'
    }
}
const styles = StyleSheet.create({
    root: {
        flex:1,

    }, input: {
        margin: 5
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 10,
    },
    modalView: {
        position: 'absolute',
        bottom: 3,
        width: "100%",
        marginTop: 15,
        backgroundColor: "white"
    }
})

export default CreatePlumber

 
