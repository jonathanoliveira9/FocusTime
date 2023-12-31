import React, { useState } from "react";
import { View,  StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
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
          <RoundedButton style={styles.button} title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.md
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  text:{
    color: colors.white,
  }
})