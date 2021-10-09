import React from 'react'
import { Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    Image,
    ScrollView,
    FlatList } from 'react-native';

import {Card, FAB} from 'react-native-paper'


export default function AreYouaPlumber({navigation}) {
    const data = [
        {id:1, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:2, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:3, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:4, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:4, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:4, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:4, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
        {id:4, name:"sadakalum", experience: "5 Years", mobileNo: "0111556944"},
    ]

    const renderList = ((item) => {
            return (
                <View>
                    <Button title="CreatePlumber" onPress = {() => navigation.navigate('CreatePlumber')}></Button>

                    <Card style={styles.mycard} >
                        <View style={styles.cardView}>
                            <Image 
                                style={{width:80, height:80, borderRadius: 80/2}}
                                source ={{uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'}}
                            /> 

                            <View style={{marginLeft: 10}}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.id}</Text>
                                <Text style={styles.text}>{item.experience}</Text>
                                <Text style={styles.text}>{item.mobileNo}</Text>
                            </View>
                        </View> 
                    
                    </Card>

                </View>
                
            )
    })
    return (
        <View>
             <FlatList 
                data = {data}
                renderItem = {({item}) => {
                  return  renderList(item)
                }}
                keyExtractor={item => `${item.id}`}
             /> 
             
             <FAB
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors: {accent: "blue"}}}
                onPress={() => console.log('Pressed')}
           />
                 
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
       
    },
    cardView: {
         flexDirection: "row",
         padding: 6,
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})