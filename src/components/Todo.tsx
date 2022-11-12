import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';

const Todo =  ({todoText, todoId, isFavourate, addTodo, deleteTodo, editTodo,likeSetter} : {todoText: string, todoId : string, isFavourate: boolean , addTodo: any, deleteTodo: any, editTodo: any, likeSetter : any}) =>  {
    return (
    <View style={styles.todo}>
        <Text style={styles.todoText}>{todoText}</Text>
        
        <TouchableOpacity onPress={() => editTodo(todoText, todoId)}>
            <EvilIcons name="pencil" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => likeSetter(todoId)}>
            { isFavourate ?
             <Entypo name="heart" size={34} color="red" /> 
             :
             <Entypo name="heart-outlined" size={34} color="black" />
            }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(todoId)}>
            <AntDesign name="delete" size={28} color="white" />
        </TouchableOpacity>
    </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    todo: {
        marginVertical: 4,
        backgroundColor: "purple",
        height: 60,
        borderRadius: 14,
        flexDirection: "row",
        padding: 8,
        alignItems: "center"
    },
    todoText:{
        flex: 1,
        color: "white"
    },
    editButton: {
        marginHorizontal: 8
    },
    deleteButton: {

    }
})

