import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>+</Text>  
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: "#070A52",
    color: "#FFF",
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    // justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 20
  },
  btntext: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 2,
    textAlign: "center"
  }
});
