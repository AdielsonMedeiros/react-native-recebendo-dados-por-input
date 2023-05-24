import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,TextInput, Text, View, Button } from 'react-native';

function App() {

  const [nome,setNome]= useState('')
  const [input, setInput] = useState('')

  function entrar(){

    if(input === ''){
      alert('Por favor, digite seu nome.');
      return;
    }
    setNome('Bem vindo '+ input);
  }


  return (
    <View>
      <TextInput style={styles.input} placeholder="Digite seu nome"
      onChangeText={(text)=> setInput(text)}/>
      <Button title="Entrar" onPress={entrar}/>
      <Text style={styles.texto}>{nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1
  },
  input:{
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
    marginTop:40
  },
  texto:{
    textAlign:'center',
    fontSize: 25,
    marginTop: 15
  }
});
export default App;