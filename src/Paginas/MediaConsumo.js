import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import React, { useLayoutEffect } from 'react'

export default function MediaConsumo({navigation, route}) {

    const {resultado, nivel} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <Button color={"#fc0000"} onPress={() => navigation.replace("Login")} title="Sair"/>
            ),
        })
    }, [])

  return (
    <View style={styles.container}>
        <View style={styles.containerLogin}>
            <View style={styles.imagemContainer}>
                <Image style={styles.imagem}
                    source={require('../Images/ConsumoVeiculos.png')}
                />
            </View>
            <View>
                <Text style={styles.texto}>A média de consumo do veículo é: {resultado ? resultado : 0} KM/l</Text>
                <Text style={styles.texto}>O nível de consumo é: {nivel}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0ed7fd'
    },
    containerLogin: {
        backgroundColor: '#fff',
        padding: 25,        
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    }, lista: {
        height: 280
    }, imagem: {
        borderWidth: 2,
        borderColor: "black",
        width: 250,
        height: 200
    }, imagemContainer: {
        alignItems: 'center',
        padding: 20
    }, texto: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});