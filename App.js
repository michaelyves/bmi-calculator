import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    weight: 0,
    height: 0,
    imc: 0,
    title: 'Indeterminado',
    color: '#bdc3c7',
  };

  calculateIMC = () => {
    
    const result = this.state.weight / (this.state.height * this.state.height);

    this.setState({
      imc: Math.ceil(result)
    });

    if(result <18.5) {
      this.setState({
        title: 'Magreza',
        color: '#e74c3c'
      });
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        title: 'Normal',
        color: '#3ecc71'
      });
    } else if (result >= 25 && result <30) {
      this.setState({
        title: 'Sobrepeso',
        color: '#f1c40f'
      });
    } else if (result >= 30 && result < 40){
      this.setState({
        title: 'Obesidade',
        color: '#e67e22'
      });
    } else if (result >= 40) {
      this.setState({
        title: 'Obesidade Grave',
        color: '#e74c3c'
      });
    }
  }

  render() { 
  return (
    <View style={styles.app}>
     <Text style={styles.title}>Seu IMC</Text>
       
        <View style={[styles.panel, {backgroundColor: this.state.color}]}>
        <Text style={styles.result}>{this.state.imc}</Text>
        <Text style={styles.description}>{this.state.title}</Text>
        </View>

        <View>
         <TextInput style={styles.weight}
         label= "Peso"
         onChangeText={value => {
           this.setState({weight: value.replace(',',  '.')});
         }} 
         />
         
         <TextInput style={styles.height}
         label= "Altura"
         onChangeText={value => {
           this.setState({height: value.replace(',', '.')});
         }} 
         />

      <Button mode="contained" onPress={this.calculateIMC}>
        Calcular
        </Button>
        
        
        </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },

  panel: {
    alignSelf: "center",
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  description:{
    textAlign: 'center',
    fontSize: 14,
  },
  height: {
   marginVertical: 10,
  },
  weight: {
   marginVertical: 10,
  },
});
