import React, {useState, useEffect} from 'react';
import { View, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Todo from './src/test01/Todo';
import {BarChart} from 'react-native-chart-kit';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/IT19166834/Login';

const Stack = createNativeStackNavigator();

function Hi() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: "Freelance job",
      amount: 499.00
    }
  ]);

  useEffect(() => {
    setTotal(gigs.reduce((total, gigs) => total+Number(gigs.amount), 0));
  }, [gigs])

  const addTodo = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount
    }]);
    setDescription('');
    setAmount('');
  }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <View style={styles.firstLabel}>
          <Text style={styles.helloworldText}>Hello world</Text>
        </View>
        
        <Text style={{marginTop: 20}}>Total : {total}</Text>
        <TextInput 
          style={styles.todoInput}
          value={description}
          placeholder= 'Enter a description'
          onChangeText={text => setDescription(text)}
        />
        <TextInput 
          style={styles.todoInput}
          value={amount}
          keyboardType='numeric'
          placeholder='Enter the amount'
          onChangeText={text => setAmount(text)}
        />
        <View style={styles.addButton}>
          <Button disabled={!amount && !description} onPress={addTodo} title='Add Gig' />
        </View>
      </View>
      <ScrollView style={styles.scrollview}>
        <Text style={{paddingLeft: 10}}>Scroll for more data</Text>
        {
          gigs.map(gig => (
            <View style={{paddingLeft: 20, marginTop: 20}}>
              <Text>{gig.description}</Text>
              <Text>{gig.amount}</Text>
            </View>
          ))
        }
      </ScrollView>

      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
    
  },
  firstLabel: {
    backgroundColor: 'red',
    width: '50%',
    borderRadius: 50,
  },
  helloworldText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  todoInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    width: 300,
    marginTop: 10,
    paddingLeft: 10
  },
  addButton: {
    marginTop: 10
  },
  scrollview: {
    height: 140
  }
})

export default Hi;