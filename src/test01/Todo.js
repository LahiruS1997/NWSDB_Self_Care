import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({title}) => {
    return (
        <View>
            <Text>I'm a todo : {title}!</Text>
            {/**<Text>Login Component</Text>
            <Button onPress = {() => navigation.navigate('Register')} 
                title="Login"
            ></Button> */}
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})
