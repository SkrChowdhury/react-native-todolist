import React, {useState} from 'react';
import { View, Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
const TodoItem = ({item,removeItem}) => {
    return (<View style={styles.itemContainer}>
        <Text style={styles.text}>{item.text}</Text>
    <TouchableOpacity onPress={()=>removeItem(item.id)} on style={styles.removeButton}>
        <Text style={styles.closeText}>X</Text>
    </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingTop:10,
        height: 50,
        paddingLeft:33,
        marginBottom:10,
        borderBottomWidth:0.7,
        borderBottomColor:'rgba(33,33,33,0.2)',
        flexDirection:'row',
    },
    text:{
        fontWeight:'300'

    },
    removeButton:{
        position:'absolute',
        right:30,
        paddingTop:8
    },
    closeText:{
        color:'red',
        fontSize:18
    }

})

export default TodoItem;