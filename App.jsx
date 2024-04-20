//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Example from './example/screens/example';
import { Provider } from 'react-redux';
import store from './example/store';
import Todo from './example/screens/todo';

// create a component
const App = () => {
  return (
  <Provider store={store}>
    {/* <Example /> */}
    <Todo/>
  </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
