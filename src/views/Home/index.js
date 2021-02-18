import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'

//Image
import Banner from '../../../assets/banner.png';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={Banner} />
            <View style={styles.homeBody}>
                <Text style={styles.title}>Seja bem-vindo(a)!</Text>
                <Text style={styles.subTitle}>Reinvente seu estilo!!</Text>
            </View>
        </SafeAreaView> 
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    background: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 500,
    },

    homeBody:{
        flex: 6,
        width: '80%',
        marginTop: 40,
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 28,
    },

    subTitle: {
        fontSize: 22, 
    }
  });
  

