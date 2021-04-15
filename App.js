import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Todays Task*/}

      <View style={styles.taskwrapper}>
          
          <Text style={styles.sectiontitle}>Today's task</Text>

          <View style={styles.items}>
            {/*there is where task will go*/}
             <Task text={'Task 1'}/>
             <Task text={'Task 2'}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  
  sectiontitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  items: {
    marginTop: 30,
  },
});
