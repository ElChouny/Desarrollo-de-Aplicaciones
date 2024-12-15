import { StatusBar } from 'react-native'
import Colors from './src/globals/Colors'
import { useFonts } from 'expo-font'
import Fonts from './src/globals/Fonts'
import Navigator from './src/navigation/Navigator'


export default function App() {

  
  const [FontsLoaded] = useFonts(Fonts)

  if(!FontsLoaded){
    return null
  }
  
  return (
    <>
      <Navigator/>
      <StatusBar style="light" backgroundColor={Colors.Celeste}/>
    </>
  )
}
