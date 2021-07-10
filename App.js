import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>   
      
      <StatusBar backgroundColor="#FFF" translucent={false} />

      
        <View style={{ marginTop: '30%', marginBottom: '10%'}}>
          <Image 
          source={require('./src/assets/inst.png')}
          style={styles.categoryimage}
          />
        </View>
      
      
      <TextInput
       placeholder="Celular, username ou email"
       style={styles.input}      
      />
       <TextInput
       placeholder="Sua senha"
       style={styles.input}      
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu a senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continue como Sylvia</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%' }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>
      
      <View style={styles.cadastrocontainer}>
        <Text style={styles.cadastrotext}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.cadastrobutton}>Cadaste-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',      
  },
  categoryimage: {
    width: 300,
    height: 65,  
    resizeMode: 'contain'
  },
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',  
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText:{
    color: '#399fff',    
  },
  loginButton:{
    marginTop: 25,
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText:{
    color: '#fff',
    fontSize: 17
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },
  facebookText: {
    color: '#399FFF',
    paddingLeft: 8,
    fontSize: 15
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5
  },
  textline: {
    marginHorizontal: '3%',
    color: '#EFEDED'
  },
  cadastrocontainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  cadastrotext: {
    color: '#C4C4C4',
    paddingRight: 5,
  },
  cadastrobutton: {
    color: '#399FFF',
    fontWeight: 'bold'
  }
});
