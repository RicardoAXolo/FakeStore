import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = ({route}) => {
    const {product} = route.params;
    
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    product.image==="N/A"
                    ?
                    <Image
                        style={styles.images}
                        source={require('../assets/snack-icon.png')}
                    />
                    :
                    <Image
                        style={styles.images}
                        source={{uri:product.image}}
                    />

                }
                <Text style={styles.texto2}>Categoria: {product.category}</Text>
                <Text style={styles.precio}>${product.price} DLLS</Text>
                <Text style={styles.texto2}>{product.description}</Text>
      

            </ScrollView>
        </View>
      );
}
 
export default DetailsScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#802C6E',
    },
    images:{
      width: 200, 
      height: 300,
      margin:5,
      alignSelf:'center'
    },
    texto2:{
        color: '#FFF', 
        textAlign: 'center', 
        fontSize: 15,
        margin: 10,
        fontWeight:600
    },
    precio:{
      color: '#FFF',
      alignSelf:'center',
      fontSize: 20,
      fontWeight:600
    }
  });