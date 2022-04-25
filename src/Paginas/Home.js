import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'

import CaixaTexto from '../Componentes/CaixaTexto';

export default function Home({ navigation }) {

    const [km, setKM] = useState("")
    const [litros, setLitros] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <Button color={"#fc0000"} onPress={() => navigation.replace("Login")} title="Sair"/>
            ),
            headerLeft: () => (
            <Image style={{width: 50, height: 40}} source={require('../Images/LogoCarro.png')}/>
            ),
        })
    }, [])

    const media = () => {
        let n1 = parseInt(km)
        let n2 = parseInt(litros)
        let calculo = n1 / n2
        return calculo
    }

    const nivelConsumo = (media) => {
        if (parseInt(media) <= "4") {
            return "E"
        }
        else if (parseInt(media) > "4" && parseInt(media) <= "8") {
            return "D"
        }
        else if (parseInt(media) > "8" && parseInt(media) <= "10"){
            return "C"
        }
        else if (parseInt(media) > "10" && parseInt(media) <= "12"){
            return "B"
        }
        else if (parseInt(media) > "12"){
            return "A"
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <View style={styles.imagemContainer} >
                    <Image 
                        style={styles.imagem} 
                        source={require('../Images/GastoCarro.png')}
                    />
                </View>
                <View>
                    <CaixaTexto
                    value={km}
                    set={setKM}
                    place="Informe a quilometragem do veículo"

                    />
                    <CaixaTexto
                        value={litros}
                        set={setLitros}
                        place="Informe a quantidade de litros consumido"
                    />
                </View>
                <View style={styles.botao}>
                    <Button 
                        title='Enviar'
                        onPress={() => {
                            navigation.navigate("MediaConsumo", {resultado: media(), nivel: nivelConsumo(media())})
                        }
                        }
                    />
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
        borderWidth: 3,
        borderRadius: 50,
        borderColor: "black",
        width: 200,
        height: 180
    }, imagemContainer: {
        alignItems: 'center',
        padding: 20
    }, botao: {
        margin: 10
    }
});