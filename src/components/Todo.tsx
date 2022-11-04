import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { EvilIcons, AntDesign } from '@expo/vector-icons';

const Todo =  ({todoText} : {todoText: string}) =>  {
    return (
    <View style={styles.todo}>
        <Text style={styles.todoText}>{todoText}</Text>
        <EvilIcons name="pencil" size={40} color="white" />
        <AntDesign name="delete" size={28} color="white" />
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

