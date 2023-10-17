import {View, StyleSheet} from 'react-native';
import React from 'react';
import Wave from '../components/Wave';
import CountdownComponent from '../components/Countdown';
import ARScreenPushUp from './ARScreenPushUp';

const PushUp = () => {
  return (
    <View style={styles.container}>
      <ARScreenPushUp />
      <View style={styles.countdownContainer}>
        <CountdownComponent />
      </View>
      <View style={styles.waveContainer}>
        <Wave color="#DD56FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  countdownContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    elevation: 20,
    zIndex: 1,
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    elevation: 10,
  },
});

export default PushUp;
