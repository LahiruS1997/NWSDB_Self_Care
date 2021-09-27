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

function BillCalculator({navigation}) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [consumption, setConsumption] = useState('')
    

    return (
        <SafeAreaView>
            <LinearGradient colors={['rgba(95, 197, 255, 0.98)', 'rgba(255, 255, 255, 0.29)']} style={{height:753}}>
                <View style={styles.circleShape}/>
                <Text style={styles.editProfileText}>Bill Calculator</Text>

                <View style={{flex: 1, alignItems: 'center', marginTop: 120}}>

                    <View style={styles.rectangle}>
                        <Text style={styles.firstText}>Consuming will prorate for the 30 days when calculating the bill amount and this calculates only domestic category bills.</Text>
                    </View>

                    <ScrollView>
                    <View style={styles.dataRectangle1}>
                        <View style={styles.buttonsgrid}>
                            <TextInput
                                style={styles.todoInput}
                                value={startDate}
                                placeholder= 'Start Date'
                                onChangeText={text => setStartDate(text)}
                            />
                            <TextInput
                                style={styles.todoInput2}
                                value={endDate}
                                placeholder= 'End Date'
                                onChangeText={text => setendDate(text)}
                            />

                        </View>
                            <TextInput
                                style={styles.todoInput3}
                                value={consumption}
                                placeholder= 'Consumption'
                                onChangeText={text => setConsumption(text)}
                            />
                            <View style={styles.buttonCalc}>
                                <Button title="Calculate" onPress = {() => navigation.navigate('Plumbers')}></Button>
                            </View>
                    </View>
                    <View style={styles.dataRectangle2}>
                            <Text style={styles.billTitle}>Bill Calculation</Text>

                            <View style={styles.calculation}>
                                <Text style={styles.charge1}>Usage Charge</Text>
                                <Text style={styles.charge2}>N/A LKR</Text> 
                            </View>
                            <View style={styles.calculation}>
                                <Text style={styles.charge1}>Service Charge</Text>
                                <Text style={styles.charge2}>N/A LKR</Text> 
                            </View>
                            <View style={styles.calculation}>
                                <Text style={styles.charge1}>Total Amount</Text>
                                <Text style={styles.service}>N/A LKR</Text> 
                            </View>
                            
                    </View>
                    <View style={styles.dataRectangle3}>
                        <Text style={styles.billTitle}>Tariff</Text>
                            <View style={styles.calculation}>
                                <Text style={styles.tariff}>From</Text> 
                                <Text style={styles.tariff}>To</Text> 
                                <Text style={styles.tariff}>Unit</Text> 
                                <Text style={styles.tariff}>Qty</Text> 

                                <Text style={styles.amount}>AMOUNT</Text> 
                            </View>
                    </View>
                    </ScrollView>
 
                     
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default BillCalculator

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
        marginLeft:  '30%',
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
    dataRectangle1: {
        width: 370,
        height: 210,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 10,
        borderRadius: 25,
        
    },
    dataRectangle2: {
        width: 370,
        height: 170,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 10,
        borderRadius: 25,
        
    },
    dataRectangle3: {
        width: 370,
        height: 100,
        backgroundColor: 'white',
        marginLeft:20,
        marginTop: 10,
        borderRadius: 25,
        
    },
    todoInput: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '40%',
        marginTop: 25,
        paddingLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30
    },
    todoInput2: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: '40%',
        marginTop: 25,
        paddingLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30
    },
    todoInput3: {
        height: 40,
        borderColor: '#053BC5',
        borderWidth: 1,
        width: 325,
        marginTop: 25,
        paddingLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30
    },
    buttonsgrid: {
        flexDirection:'row',
    },
    calculation: {
        flexDirection:'row',
    },

    buttonCalc: {
        backgroundColor: '#fff',
        width: 325,
        marginLeft: 30,
        marginTop: 25,

    },
    billTitle: {
        fontSize: 35,
        color: '#01239C',
        marginTop: 5,
        marginLeft: 10,
    },
    charge1: {
        fontSize: 25,
        width: '50%',
        color: 'black',
        marginTop: 5,
        marginLeft: 10,
    },
    charge2: {
        fontSize: 25,
        width: '50%',
        color: 'black',
        marginTop: 5,
        marginLeft: 80,
         
    },
    service: {
        fontSize: 25,
        color: 'red',
        width: '50%',
        marginTop: 5,
        marginLeft: 80,
    },
    tariff: {
        fontSize: 25,
        width: 50,
        color: 'black',
        marginTop: 5,
        marginLeft: 10,
    },
    amount: {
        fontSize: 25,
        width: 100,
        color: 'red',
        marginTop: 5,
        marginLeft: 30,
    },
    
    
    
})