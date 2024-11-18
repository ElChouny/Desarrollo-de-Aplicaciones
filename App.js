import { StyleSheet, Text, View } from 'react-native';

const App =() => {
  
  return (
    <View style={styles.container}>
      <View style={styles.contenedorPartes}>
        <View style={styles.partOne}>
          <Text style={styles.text}>Hola Coder!</Text>
        </View>
        <View style={styles.partTwo}>
          <Text style={styles.text}>Como estan?</Text>
        </View>
      </View>
    </View>
  );
}
export default App 

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  contenedorPartes: {
    backgroundColor: 'yellow',
    width: '80%',
    marginHorizontal: "10%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  partOne: {
    backgroundColor: 'blue',
    //width: '40%',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  partTwo: {
    backgroundColor: 'green',
    //width: '40%',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
