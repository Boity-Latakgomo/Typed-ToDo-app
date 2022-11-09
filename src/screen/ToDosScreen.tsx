import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import Todo from "../components/Todo";
import { Ionicons } from '@expo/vector-icons';
import AddAndEditToDo from "../components/AddAndEditToDo"

let IdValue : any = null;

const ToDosScreen =  () => {
    const [addEdit, setAddEdit] = useState<boolean>(false);
    const [todos, setTodos] = useState<{id: string, todo: string}[]>([])
    const [todoText, setTodoText] = useState<string>("");
const renderItems = ({item} : {item : {id: string, todo: string}}) => {
    return <Todo todoText={item.todo} todoId={item.id} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
}

const fillingText = (text : string) => {
    setTodoText(text);
}

const addTodo = () => {
    IdValue = null;
    setTodoText("")
    setAddEdit(true);
}

const editTodo = (text: string, id: string) => {
    IdValue = id;
    setTodoText(text)
    setAddEdit(true);
}

const saveEditedTodo = (id : string) => {

    const newTodos : any = todos.map(todo => {
        if(todo.id === id){
            return {id: id, todo: todoText}
        }else{
            return todo
        }
    })
    
    setTodos(newTodos);
    setAddEdit(false);
}

const saveTodo = () => {
    const id = (Math.random() * 2000).toString();
    setTodos([...todos, {id: id, todo: todoText}])
    setAddEdit(false);
}

const deleteTodo = (id : string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
}


    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titleText}>ToDos: {todos.length}</Text>
            <TouchableOpacity onPress={addTodo} style={styles.addButton}>
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
        {addEdit? <AddAndEditToDo saveTodo={saveTodo} fillingText={fillingText} textValue={todoText} saveEditedTodo={saveEditedTodo} IdValue={IdValue}/> : null}
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
