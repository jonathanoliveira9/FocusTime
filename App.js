import React, { useState } from 'react';
import { StyleSheet , Platform, SafeAreaView, StatusBar, View, Text } from 'react-native';
import { colors } from './src/utils/colors'
import { Focus  } from './src/features/Focus';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = React.useState(null)
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus
          addSubject={setCurrentSubject}
          clearSubject={ () => setCurrentSubject(null)}/>
        ) : (
          <Timer
           focusSubject={currentSubject}
           onTimerEnd={() => { }}
           clearSubject={() => { }}
          ></Timer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
});
