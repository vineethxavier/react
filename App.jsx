
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
state = {flag : true}


export default function App() {
changeColor = () => {
    console.log("change color log")
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.changeColor}>
       
        {console.log("before",this.state.flag)}
        <Text style={{color :this.state.flag ? "red" : "blue"}}>Welcome</Text>  
        {console.log("after",this.state.flag)}


      </TouchableOpacity>
      <Text style={{color:"white"}}>Welcome</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});