import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

const Delete = () => {

    const [pressed, setPressed] = React.useState(false)


    return (
        <View>
            <Button title="Presionar Boton" onPress={()=> setPressed(true)}>Hola</Button>
            {pressed && <Text style={{fontSize: 25, alignSelf:"center"}}>Hola Guapa <Ionicons name="heart" color="red" size={20}/></Text>}
        </View>
    )
}

export default Delete

const styles = StyleSheet.create({})
