import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import Todo from "../components/Todo";
import { Ionicons } from '@expo/vector-icons';
import AddAndEditToDo from "../components/AddAndEditToDo"


const ToDosScreen =  () => {
    const [addEdit, setAddEdit] = useState<boolean>(false);
    const [todos, setTodos] = useState<{id: string, todo: string}[]>([])
    const [todoText, setTodoText] = useState<string>("");
const renderItems = ({item} : {item : {id: string, todo: string}}) => {
    return <Todo todoText={item.todo} todoId={item.id} editTodo={addEditTodo} deleteTodo={deleteTodo}/>
}

const fillingText = (text : string) => {
    setTodoText(text);
}

const addEditTodo = () => {
    setTodoText("")
    setAddEdit(true);
}

const addTodo = () => {
    const id = (Math.random() * 2000).toString();
    console.log(id)
    setTodos([...todos, {id: id, todo: todoText}])
    setAddEdit(false);
}

const deleteTodo = (id : string) => {
    console.log("************* Deleting")
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
}


    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titleText}>ToDos: 3</Text>
            <TouchableOpacity onPress={addEditTodo} style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View style={styles.divider}/>
        <View style={styles.listView}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={renderItems}/>
        </View>
        {addEdit? <AddAndEditToDo addTodo={addTodo} fillingText={fillingText} textValue={todoText}/> : null}
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
