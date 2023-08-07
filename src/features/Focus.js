import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from "react-native-paper";

export const Focus = () => {
  const [subject, setSuject] = React.useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(val) => { setSuject(val) }}
          label={'What would you like to focus on?'}
        />
      </View>
    </View>
  )
}

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