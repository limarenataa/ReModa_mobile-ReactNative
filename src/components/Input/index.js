import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';


export default function Input({placeholder, secureTextEntry}) {
    return (
        <View style={styles.inputArea}>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputArea: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flexDirection: 'row',
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-around'
    },

    input: {
        flex: 1,
        fontSize: 14,
    },

    iconArea: {
        marginRight: 20,
    }

   
})