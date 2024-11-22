import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {Pressable, TextInput, View,Text,StyleSheet} from 'react-native'
import uuid from 'react-native-uuid'

const App = () => {

  const [newValueItem,setNewValueItem] = useState("")
  const [errorInput,setErrorInput] = useState("")
  const [items,setItems] = useState([])

  const addItem = () => {
    if(newValueItem == ""){
      setErrorInput("Campo requerido")
      return
    }
    const item = {
      id:uuid.v4(),
      value:newValueItem
    }
    setItems(currentItems => [...currentItems,item])
    setNewValueItem("")
  }

  const handlerOnChangeItem = (text) => {
    setErrorInput("")
    setNewValueItem(text)
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerAdd}>
        <View style={styles.containerInput}>
          <TextInput 
            placeholderTextColor="white"
            value={newValueItem}
            onChangeText={handlerOnChangeItem} 
            style={styles.input} 
            placeholder='Ingrese item'
          />
          {<Text style={styles.error}>{errorInput ? errorInput : ""}</Text>}
        </View>
        <Pressable onPress={addItem} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
      <View style={styles.containerCards}>
        {items.map((item) => 
        <View style={styles.card} key={item.id}>
          <Text style={styles.textCard}>{item.value}</Text>
        </View>
      )}
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1
  },
  containerAdd:{
    backgroundColor:"#F4012D",
    margin:10,
    padding: 10,
    borderRadius:8,
    flexDirection:"row",
    alignItems:"center"
  },
  containerInput:{
    flex:1
  },
  input:{
    borderBottomColor:"white",
    borderBottomWidth:2,
    margin:10,
    color:"white"
  },
  button:{
    backgroundColor:"white",
    width:40,
    height:40,
    padding:10,
    margin:5,
    borderRadius:3,
    alignItems:"center"
  },
  textButton:{
    color:"red",
    fontWeight:"bold"
  },
  card:{
    width:"80%",
    backgroundColor:"#F4012D",
    marginHorizontal:"10%",
    marginVertical:20,
    padding:15,
    borderRadius:6,
    alignItems:"center"
  },
  textCard:{
    color:"white"
  },
  error:{
    color:"white"
  }
  
})