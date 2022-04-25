import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react'

import CaixaTexto from '../Componentes/CaixaTexto';

export default function Login({ navigation }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const validaLogin = () => {

        if (username == "Rebonato" && password == "246") {
            navigation.replace("Home")
        } else {
            Alert.alert("Usuário ou Senha Inválidos!")
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
                        value={username}
                        set={setUsername}
                        place="Informe o Usuário"

                    />
                    <CaixaTexto
                        value={password}
                        set={setPassword}
                        place="Password"
                        security={true}

                    />
                </View>
                <View style={styles.botao}>
                    <Button 
                        title='Entrar'
                        onPress={validaLogin}
                    />
                </View>
                <View style={styles.botao}>
                    <Button 
                        title='Entrar como visitante'
                        color= "#fc0066"
                        onPress={() => navigation.replace("Home")}
                    />
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
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