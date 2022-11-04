import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import Todo from "../components/Todo";
import { Ionicons } from '@expo/vector-icons';

const ToDos : {id: string, todo: string}[] = [
    {
        id : "1",
        todo: "Wash face"
    },
    {
        id : "2",
        todo: "Brush teeth"
    },
    {
        id : "2",
        todo: "Eat"
    },
]

const ToDosScreen =  () => {
const renderItems = ({item} : {item : {id: string, todo: string}}) => {
    return <Todo todoText={item.todo}/>
}


    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titleText}>ToDos: 3</Text>
            <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View style={styles.divider}/>
        <View style={styles.listView}>
            <FlatList
                data={ToDos}
                keyExtractor={item => item.id}
                renderItem={renderItems}/>
        </View>
      </View>
    )
  }

export default ToDosScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 8
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "purple"
    },
    addButton: {
        backgroundColor: 'purple',
        padding: 8,
        height: 50,
        width: 50,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 4
    },
    divider: {
        height: 1,
        backgroundColor: "black",
        marginHorizontal: 8,
        marginBottom: 8
    },
    listView:{
        flex: 1
    }
})
