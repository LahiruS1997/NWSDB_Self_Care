import React, {useState} from 'react'
import { Text,
    View,
    StyleSheet,
    SafeAreaView, 
     } from 'react-native';
    
import { TextInput, Button, Modal  } from 'react-native-paper';

const CreatePlumber = () => {
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return(
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.input}
                value={Name}
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
            icon="upload"
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
            onPress={() => console.log('saved')}>
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
                        onPress={() => console.log("Pressed")}>
                            Camera
                        </Button>
                        <Button 
                        theme={theme}  
                        icon="image-area" 
                        mode="contained" 
                        onPress={() =>  console.log("Pressed")}>
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

 
