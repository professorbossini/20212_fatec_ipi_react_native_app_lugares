import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Cores from '../constantes/Cores'

const NovoLugarTela = (props) => {
    return (
        <ScrollView>
            <View>
                <Text>Novo Lugar</Text>
                <TextInput />
                <Button 
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={() => console.log ("Adicionando...")}
                />
            </View>
        </ScrollView>
    )
}

export default NovoLugarTela

const styles = StyleSheet.create({})
