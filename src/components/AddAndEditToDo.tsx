import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export const AddAndEditToDo = ({saveTodo, fillingText, textValue, saveEditedTodo, IdValue} : any) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{IdValue ? "Edit todo" : "Add todo"}</Text>
        <TextInput value={textValue} 
            onChangeText={text => fillingText(text)}
            style={styles.input}/>
        <TouchableOpacity onPress={IdValue? () => saveEditedTodo(IdValue) : saveTodo} style={styles.button}>
            <Text style={styles.buttonText}>{IdValue ? "Edit" : "Save"}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AddAndEditToDo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        position: "absolute",
        start: 0,
        end: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "purple",
        marginBottom: 40
    },
    input:{
        alignSelf: "stretch",
        height: 40,
        borderWidth: 2,
        padding: 8,
        borderColor: "purple",
        borderRadius: 8,
        marginBottom: 40
    },
    button:{
        backgroundColor: "purple",
        padding: 8,
        width: 90,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        height: 30,
        marginTop: 8
    }
})


