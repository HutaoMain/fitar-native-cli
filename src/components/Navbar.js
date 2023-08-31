import {View, Text, Image} from 'react-native';
import React from 'react';

const Navbar = () => {
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View>
        <Text style={{fontSize: 20}}>Welcome,</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Gabbi Garcia</Text>
      </View>
      <Image
        source={require('../../assets/images.jpg')}
        style={{width: 50, height: 50, borderRadius: 100}}
      />
    </View>
  );
};

export default Navbar;
