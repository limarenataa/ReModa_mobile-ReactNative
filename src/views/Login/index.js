import React from 'react'
import {  View, Text, StyleSheet , TouchableOpacity, ImageBackground} from 'react-native'


//IMG
import BackgroundImg from '../../../assets/backgroundlogin.jpg';
//Componente
import Input from '../../components/Input';

const Login = ({navigation}) => {

    const goHome = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <ImageBackground source={BackgroundImg} style={styles.container}>

            <View style={styles.containerBody}>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>RêModa</Text>
                    <Text style={styles.subTitle}>Reivente seu estilo!</Text>
                </View>
            
                <View style={styles.inputArea}>
                
                    <Input  placeholder={"Digite seu login"}/>
                    <Input placeholder={"Digite sua senha"} password={true}/>

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => goHome('Tab') }>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cadastroContainer}>
                    <Text style={styles.cadastroText}>Não possui uma conta?</Text>
                    <TouchableOpacity >
                        <Text style={styles.cadastroBtnText}>Cadastre-se aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
    
export default Login;

const styles = StyleSheet.create({


    container: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    containerBody: {
        width:'70%',
    },

    title: {
        color: '#fff',
        fontSize: 35,
    },

    subTitle: {
        color: '#F1C517',
        fontSize: 23,
    },

    textContainer: {
        marginBottom: 90,
    },

    cadastroContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },

    cadastroText:{
        color: '#fff',
    },

    cadastroBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5
    },

    buttonLogin:{
        width: 150,
        height: 40,
        backgroundColor: '#F1C517',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 1,
         },
         shadowOpacity: 0.22,
         shadowRadius: 2.22,
      
    },

    buttonText:{
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase'

    }
})