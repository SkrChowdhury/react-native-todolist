/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Image, View, Text,StyleSheet,FlatList,TextInput,TouchableOpacity, SafeAreaView} from 'react-native';
import TodoItem from '../components/TodoItem';
import uuid from 'react-native-uuid';


const HomeScreen = () => {


const [items,setItems] = useState([
    {
        id:uuid.v4(), text: 'Item 1'
    },
    {
        id: uuid.v4(), text: 'Item 2'
    },
    {
        id: uuid.v4(), text: 'Item 3'
    },
    {
        id: uuid.v4(), text: 'Item 4'
    },
    {
        id: uuid.v4(), text: 'Item 5'
    },
]);

const [enteredText,setEnteredText] = useState('');

const removeItem = (id) => {
    setItems(oldItems => {
        return oldItems.filter(item => item.id != id);
    })
}

const addItem = (text) => {
     setItems(oldItems => {
        return [{id: uuid.v4(),text},...oldItems];

     })
    

}


  return <View style={styles.parentContainer}>

    <View style={styles.header}>
        <Image style={styles.image} source={{uri:'https://www.veesworld.com/storage/tools/1577448146_670133218345_bwpqgmg86p73.png'}}/>

        
        <Text style={styles.headerText}>Todo Items</Text>
    </View>
    <View style={styles.bodyContainer}>
        <FlatList
        data={items}
        renderItem={({item}) => <TodoItem item={item} removeItem={removeItem}/>}
        />

    </View>
    <View style={styles.footerContainer}>
        <TextInput
        value={enteredText}
        placeholder={'Add Item'}
        style={styles.textInput}
        onChangeText={(text)=> setEnteredText(text)}
        />
        <TouchableOpacity
        onPress={()=> {addItem(enteredText)}}
         style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
    </View>
  
        </View>
}


const styles = StyleSheet.create({
    image:{
width:50,height:50,marginTop:10
    },
parentContainer: {
    flex: 1,
    flexDirection:'column'
},
header: {
    width: '100%',
    height:'10%', 
    paddingLeft: 20,
    flexDirection:'row'
},
headerText:{
color: 'black',
fontSize: 30,
fontWeight:'600',
paddingLeft:15,
marginTop:12
},
bodyContainer: {
paddingTop:40,
    width: '100%',
    height:'60%'
},
footerContainer: {
    paddingLeft:33,
    width: '100%',
    height:'15%'
},
textInput:{
    borderColor: 'rgba(33,33,33,0.4)',
    borderWidth:1,
    padding:15,
    width:'90%',
    marginBottom:10,
},
addButton:{
backgroundColor:'orange',
padding: 15,
width:'90%',
alignItems:'center'
},
addButtonText:{
color:'white',
fontWeight:'600'
}
})


export default HomeScreen;
