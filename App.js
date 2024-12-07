import {StatusBar, StyleSheet, Text, useWindowDimensions, SafeAreaView,Platform } from 'react-native'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductsDetail from './src/screens/ProductsDetail'
import Colors from './src/globals/Colors'
import { useFonts } from 'expo-font'
import Fonts from './src/globals/Fonts'
import { useEffect, useState } from 'react'

export default function App() {

  const [fontsLoaded] = useFonts(Fonts)
  const [portrait,setPortrait] = useState(false)
  const {width,height} = useWindowDimensions()

  useEffect(()=>{
    if(width > height){
      setPortrait(false)
    } else{
      setPortrait(true)
    }
  },[width,height])

  if(!fontsLoaded){
    return null
  }
  
  return (
    <SafeAreaView style={styles.container}>
            <ProductsByCategory category="Laptops"/>
            <StatusBar style="light" backgroundColor={Colors.Celeste}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})