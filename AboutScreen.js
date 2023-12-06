import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image} from 'react-native';
import { Header } from '@rneui/themed';

const AboutScreen = ({navigation}) => {

    return (
      
        <View style={styles.container}>
        <Header
  leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
  centerComponent={{ text: 'FakeStore', style: { color: '#fff' } }}       
            />
            <View>
            
            <Image
                source={require('../assets/LogoITTFakeStore.png')}
                style={{ width: 300, height: 100 }}
                />
            <View style={styles.portada}>
              <Text style={styles.portada}>Instituto Tecnologico de Tijuana</Text>
              
              <Text style={styles.portada}>Materia: </Text>
              <Text style={styles.portada}>Desarollo de aplicaciones moviles</Text>
              
              <Text style={styles.portada}>Proyecto final - Fake Store</Text>
              
              <Text style={styles.portada}>Integrantes: </Text>
              
              <Text style={styles.portada}>Ricardo Amador Xolo</Text>
              <Text style={styles.portada}>Pedro Jared Martinez</Text>
              </View>
            </View>
            
        </View>
    )

}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    portada:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 15,
      margin: 10,
      fontWeight: '600',
    },
});