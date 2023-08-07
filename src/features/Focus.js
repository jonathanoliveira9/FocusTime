import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
  const [subject, setSuject] = React.useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => { setSuject(val) }}
          label={'What would you like to focus on?'}
        />
        <View style={styles.button}>
          <RoundedButton style={styles.button} title="+" size={50}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 0.8,
    marginRight: 10
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  text:{
    color: colors.white,
  }
})