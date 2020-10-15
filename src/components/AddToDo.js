import React, {useState} from"react";
import { TextInput, TouchableOpacity,View,Text,StyleSheet, Dimensions } from "react-native";

const AddTodo =({addNewTodo})=>{
const [text,setText] =useState ("");

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.TextInput}
            placeholder= "New Todo"
            onChangeText={(newTodo)=>setText(newTodo)}/>
            <TouchableOpacity onPress={()=> addNewTodo(text)}>
                <View style={styles.button}>
                    <Text style ={styles.buttonText}>Add Todo</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
    backgroundColor:"orange",
    height:Dimensions.get("window").height/5,
    borderRadius:10,
    margin:8,
    justifyContent:"space-evenly"
    },
    TextInput:{
        backgroundColor:"white",
        borderRadius: 10,
        margin:8,
        height:40,
    },
    button:{
        backgroundColor:"gray",
        width:Dimensions.get("window").width/3,
        alignSelf:"center",
        padding:10,
        margin:5,
        borderRadius: 10,
    },
    buttonText:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
    }
    
})

export default AddTodo;