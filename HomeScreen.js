import Script from 'react-load-script';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
//import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';
import { useEffect, useState } from "react";

const HomeScreen = ({navigation}) => {
    const [lista, setLista]= useState([]);

    useEffect(() => {  
    var url = 'https://fakestoreapi.com/products';

    fetch(url)
      .then((data) => {
          return data.json();
      })
      .then((response) => {
       setLista(response)
     })

    },[]);
    const renderItem =({item})=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate('DetailsScreen',{product:item})}
        >

            
            {
                item.Poster==="N/A"
                ?
                <Image
                    style={styles.images}
                    source={require('../assets/snack-icon.png')}
                />
                :
                <Image
                    style={styles.images}
                    source={{uri:item.image}}
                />

            }
        </TouchableOpacity>
    ) 
    return (
        <View style={styles.container}>
            <Header
  leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
  centerComponent={{ text: 'FakeStore', style: { color: '#fff' } }}       
            />
            <View style={styles.banner}>
            <Image
                source={require('../assets/logoFakeStore.png')}
                style={{ width: 80, height: 80 }}
                />
                </View>
            <Text style={styles.txtbanner}>CONOCE NUESTROS PRODUCTOS!</Text>

            <FlatList
            contentContainerStyle={{alignItems:"center"}}
            data={lista}
            numColumns={2}
            keyExtractor={item=> item.id}
            renderItem={renderItem} 
        />

            
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    banner:{
      backgroundColor: '#802C6E',
      width:400,
      height:140,
      alignItems:'center'
    },
    txtbanner:{
      color:'#FAFAFA',
      fontSize:25,
      textAlign:'center',
      fontWeight:600,
      fontFamily:'Roboto',
      marginTop:-65,
      zIndex:1,
      marginLeft:15,
      marginRight:15,
      paddingBottom:10,
    },
    images:{
      width: 100, 
      height: 150,
      margin:20,
    },
    texto:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
    },
});