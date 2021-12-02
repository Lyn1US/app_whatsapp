import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView ,TouchableOpacity, Image, Linking, TextInput} from 'react-native';
import image from './images/whatsapp.png';
import Constants  from 'expo-constants';


export default function App() {

  const [message, setMessage] = useState('Olá, como você está?');
  const [contact, setContact] = useState('15991914451');

  const d = new Date();
  var current_date_time = ' ' + d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear() + '-' + d.getHours() + ':' + d.getMinutes();
  console.log(current_date_time.toLocaleUpperCase());  

  function sendMessage (message,phone) {
    var phone_formated = '55' + phone

    Linking.openURL(`whatsapp://send?text=${message}&phone=${phone_formated}`);
    console.log('Mensagem enviada com sucesso!');
  }

  return (
    <KeyboardAvoidingView style={styles.containerAll}>
     
      <View style={styles.header}>
        
        <View style={styles.headerHandlerImage}>
          <Image source={image} style={styles.headerHandlerImage}></Image>
        </View>
        
        <Text style={styles.headerText}>whatsapp message linking app</Text>
      
      </View>

      <View style={styles.container}>

        <KeyboardAvoidingView style={styles.whiteBox}>

          <Text style={styles.instructionsHeader}>Instruções:</Text>
          <Text style={styles.instructions}> • Digite uma mensagem no campo de texto.</Text>
          <Text style={styles.instructions}> • Depois coloque um número de contato.</Text>
          <Text style={styles.instructions}> • Finalmente clique no botão verde para enviar a mensagem.</Text>
          
          <TextInput placeholder='Digite uma mensagem' style={styles.input} onChangeText={(text) => setMessage(text)}/>
          
          <TextInput keyboardType='number-pad' placeholder='(15)9999-9999' style={styles.input} onChangeText={(text) => setContact(text)}/>
          
          <TouchableOpacity onPress={()=> sendMessage(message + current_date_time, contact)} style={styles.button}>
            <Image source={image} style={styles.image}></Image>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>

      </View>
    
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerAll:{
    flex: 1,
    width: '100%',
    backgroundColor: '#ccc',
    fontFamily: 'Arial',
    marginTop: Constants.statusBarHeight,
  },
  header:{
    width: '100%',
    height: 115,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText:{
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 1,
    textAlign: 'center',
  },
  headerHandlerImage:{
    width: 55,
    height: 55,
    marginRight: 5,
  },
  container:{
    flex: 1,
    width: '100%',
    height: 115,
    backgroundColor: '#373737',
    justifyContent: 'center',
  },
  whiteBox:{
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    height: 450,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  /*
  callText:{
    marginTop: 25,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: '#575757',
  },
  */
  button:{
    width: 95,
    height: 95,
    borderRadius: 75,
    backgroundColor: '#54D6C4',
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  image:{
    justifyContent: 'center',
    width: 65,
    height: 65,
  },
  input:{
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    width: '70%',
    height: 50,
    backgroundColor: '#EFEFEF',
    textAlign: 'center',
  },

  instructionsHeader:{
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#575757',
  },
  instructions:{
    marginTop: 15,
    textAlign: 'center',
    fontSize: 13,
    color: '#575757',
  },
});
