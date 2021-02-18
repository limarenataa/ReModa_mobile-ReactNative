import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Modal } from 'react-native';

//Icons
import { MaterialIcons } from '@expo/vector-icons'; 

//Assets
import Logoremoda from '../../../assets/logoremodab.png';
import BlusaManga from '../../../assets/blusa1.png';
import BlusaVerde from '../../../assets/blusa2.png';
import BlusaCropped from '../../../assets/blusa4.png';
import Short from '../../../assets/short1.jpg';
import CalcaRasgo from '../../../assets/calca1.jpg';
import CamisaMargarida from '../../../assets/blusa10.png';

//Componente
import Produto from '../../components/Produto';

//Simulando Banco de Dados
const dadosProdutos = [

    {
        id: Math.random(),
        img_produto: <Image source={BlusaManga} style={{width:60, height:60}}/>,
        descricao_produto: "Blusa manga florida ",
        preco: "R$119,90",
        preco_final: "R$89,90",
    
    },

    {
        id: Math.random(),
        img_produto: <Image source={BlusaVerde} style={{width:60, height:60}}/>,
        descricao_produto: "Camiseta verde solta",
        preco: "R$99,90",
        preco_final: "R$69,90",
    
    },

    {
        id: Math.random(),
        img_produto: <Image source={Short} style={{width:60, height:60}}/>,
        descricao_produto: "Jeans cintura alta",
        preco: "R$149,90",
        preco_final: "R$99,90",
    
    },

    {
        id: Math.random(),
        img_produto: <Image source={BlusaCropped} style={{width:60, height:60}}/>,
        descricao_produto: "Cropped amarração",
        preco: "R$89,90",
        preco_final: "R$59,90",
    
    },

    {
        id: Math.random(),
        img_produto: <Image source={CalcaRasgo} style={{width:60, height:60}}/>,
        descricao_produto: "Calça jeans com rasgos",
        preco: "R$129,90",
        preco_final: "R$99,90",
    
    },

    {
        id: Math.random(),
        img_produto: <Image source={CamisaMargarida} style={{width:60, height:60}}/>,
        descricao_produto: "Camiseta margaridas",
        preco: "R$69,90",
        preco_final: "R$49,90",
    
    },


  ]

function Home (){


    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.headerArea}>
                    <Image style={styles.headerLogo} source={Logoremoda} />
                    <Text style={styles.subTitle}>Reinvente seu estilo.</Text>
                </View>
                
                <View style={styles.searchArea}>
                    <TextInput style={styles.searchInput} placeholder="Filtrar categoria"/>
                    <TouchableOpacity>
                        <MaterialIcons name="expand-more" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            <ScrollView style={styles.scroller}>
                
                <View style={styles.containerCampanha}>
            
                    <FlatList
                        data={dadosProdutos}
                        keyExtractor={(item) => `${item.id}`}    
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Produto 
                                    img_produto={item.img_produto} 
                                    descricao_produto={item.descricao_produto} 
                                    preco={item.preco}
                                    preco_final={item.preco_final}
                                />
                            </TouchableOpacity> 
                        )}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    
    container: {
       flex:1,
       backgroundColor: '#504D4D',
    },

    scroller: {
       flex:1,
    },

    headerArea: {
        width: '80%',
        flexDirection: 'column',
        justifyContent:'flex-start',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 40,
    },

    headerLogo: {
        marginTop: 30,
        width: 142,
        height: 34
    },

    subTitle: {
        fontSize: 24,
        color: '#fff',
    },

    searchArea: {
        backgroundColor: '#fff',
        height: 40,
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf:'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        marginBottom: 20
    

    },

    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#959292'
    },

    mainArea: {
        marginTop:20,
        padding:20,
        flexDirection: 'column',
    },

 

    

  

})