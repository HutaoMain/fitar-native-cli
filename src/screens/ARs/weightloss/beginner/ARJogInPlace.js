import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  ViroAnimatedImage,
} from '@viro-community/react-viro';

const ARJogInPlace = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroAnimatedImage
        source={require('../../../../../assets/for-weight-loss/beginner/jog-in-place.gif')}
        position={[0, 0, -3]}
        scale={[2, 2, 0]}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARJogInPlace,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
});
