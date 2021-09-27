import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

function BillHistory({navigation}) {
    const [StartDate, setStartDate] = useState('')
    const [userName, setuserName] = useState('')
    

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Bill History</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 120}}>

                    <View style={styles.rectangle}>
                        <Text style={styles.firstText}>Consuming will prorate for the 30 days when calculating the bill amount and this calculates only domestic category bills.</Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={true}
                    pagingEnabled
                    horizontal>
                    <View style={styles.dataRectangle}>
                        <View style={styles.navigatebuttons}>
                            <View style={styles.buttonSave}>
                                <Button title="Billing" onPress = {() => navigation.navigate('BillCalculator')}></Button>
                            </View>
                            <View style={styles.buttonCancel}>
                                <Button title="Payments" onPress = {() => navigation.navigate('PaymentsHistory')} style={{backgroundColor: 'white'}}></Button>
                            </View> 
                        </View>

                        <View style={styles.payments}>
                            <View style={styles.miniRectangle7}>
                                
                                <Text style={styles.number2}>August 2021</Text>
                                <Text style={styles.number2}>Units: 12</Text>
                                <Text style={styles.number3}>Due:    -1440.17</Text>
                                
                            </View>
                            <View style={styles.miniRectangle8}>
                                
                                <Text style={styles.number1}>457.00LKR</Text>
                                
                            </View>
                        </View>
                        <View style={styles.payments}>
                            <View style={styles.miniRectangle7}>
                                
                                <Text style={styles.number2}>August 2021</Text>
                                <Text style={styles.number2}>Units: 10</Text>
                                <Text style={styles.number3}>Due:    -1840.17</Text>
                                
                            </View>
                            <View style={styles.miniRectangle8}>

                                                              
                                <Text style={styles.number1}>450.00LKR</Text>
                                
                            </View>
                        </View>
                        <View style={styles.payments}>
                            <View style={styles.miniRectangle7}>
                                
                                <Text style={styles.number2}>August 2021</Text>
                                <Text style={styles.number2}>Units: 22</Text>
                                <Text style={styles.number3}>Due:    -140.17</Text>
                                
                            </View>
                            <View style={styles.miniRectangle8}>

                                 
                                <Text style={styles.number1}>500.00LKR</Text>
                                
                            </View>
                            <View style={styles.buttonCancel}>
                                <Button title="Payments" onPress = {() => navigation.navigate('PaymentsHistory')}></Button>
                            </View> 
                        </View>
                        
                        
                    </View>
                    </ScrollView>
 
                     
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default BillHistory

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
        marginTop: -796,
        marginLeft:  '35%',
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
        backgroundColor: 'grey',
        color:'grey',
        width: '50%',
        borderRadius: 25,
        backgroundColor: 'white',
        
    },
    buttonCancel: { 
        backgroundColor: 'green',
        width: '50%',
        borderRadius: 25,
         
    },
    firstText: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 22,
        color: '#fff'
    },
    rectangle: {
        width: 370,
        height: 100,
        backgroundColor: 'rgba(69, 135, 244, 1)',
        alignItems:'center',
        marginLeft:20,
        marginTop: -120,
        borderRadius: 25,
   
    },
    dataRectangle: {
        width: 370,
        height: 500,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 20,
        borderRadius: 25,
        
    },
    navigatebuttons: {
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    miniRectangle7: {
        width: '50%',
        height: 128,
        backgroundColor: 'white',
        marginTop: 20,     
        opacity:6,
        marginLeft:20,
    },
    number1: {
        fontSize: 25,
        color: 'grey'
    },
    miniRectangle8: {
        width: '50%',
        height: 128,
        backgroundColor: 'white',
        marginTop: 20,     
        opacity:6,
        marginLeft:20,
        flexDirection: 'row',
        marginBottom: -210
    },
    number2: {
        fontSize: 25,
        color: 'black'
    },
    miniRectangle9: {
        width: '50%',
        height: 128,
        backgroundColor: 'blue',
        marginTop: 20,     
        opacity:6
    },
    number3: {
        fontSize: 25,
        color: 'red'
    },
    payments: {
        flexDirection: 'row',
    }
})