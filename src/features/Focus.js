import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from "react-native-paper";

export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput label={'What would you like to focus on?'}></TextInput>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    padding: 50,
    justifyContent: 'center'
  },
  text:{
    color: colors.white,
  }
})