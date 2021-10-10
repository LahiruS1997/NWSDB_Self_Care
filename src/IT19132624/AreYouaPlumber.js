import React, {useEffect, useState} from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    Image,
    ScrollView,
    FlatList ,
    ActivityIndicator } from 'react-native';

import {Card, FAB} from 'react-native-paper'


export default function AreYouaPlumber({navigation}) {
    const  [data, setData] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/get-plumbers")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        })
    }, [])

    const renderList = ((item) => {
            return (
                <View> 

                    <Card style={styles.mycard} >
                        <View style={styles.cardView}>
                            <Image 
                                style={{width:80, height:80, borderRadius: 80/2}}
                                source ={{uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'}}
                            /> 

                            <View style={{marginLeft: 10}}>
                                <Text  style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.email}</Text>
                                <Text style={styles.text}>{item.experience}</Text>
                                <Text style={styles.text}>{item.phone}</Text>
                            </View>
                        </View> 
                    
                    </Card>

                </View>
                
            )
    })
    return (
        <View style={{flex:1}}>
            {loading ?  
            <ActivityIndicator size="large" color="#00ff00" /> 
            : <FlatList 
                data = {data}
                renderItem = {({item}) => {
                  return  renderList(item)
                }}
                keyExtractor={item => `${item._id}`}
             /> 
            }
             
             
             <FAB
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors: {accent: "blue"}}}
                onPress = {() => navigation.navigate('CreatePlumber')}
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
        flexDirection: "row",

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})