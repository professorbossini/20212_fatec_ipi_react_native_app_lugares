import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Cores from '../constantes/Cores'

const NovoLugarTela = (props) => {
    const [novoLugar, setNovoLugar] = useState('')
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto)
    }
    const adicionarLugar = () => {
        console.log ("Adicionando...")
    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.titulo}>Novo Lugar</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={novoLugarAlterado}
                    value={novoLugar}/>
                <Button 
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={() => adicionarLugar()}

                />
            </View>
        </ScrollView>
    )
}

export default NovoLugarTela

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 12
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 8
    }
})
