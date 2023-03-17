import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import base from '../../styles/base';
import colors from '../../styles/colors';

const Logo = ({h = 'auto'}: any) => {
  return (
    <View style={[base.flexRowCenter, {height: h}]}>
      <Image
        style={ss.image}
        source={require('~/assets/images/ciceklidefterlogos/android/res/mipmap-xxxhdpi/ic_launcher_monochrome2.png')}
        resizeMode="contain"
      />
      <Text style={ss.text}>Çiçekli Defter</Text>
    </View>
  );
};

export default Logo;

const ss = StyleSheet.create({
  image: {width: 40, height: 40, marginRight: 10},
  text: {fontSize: 22, fontWeight: 'bold', color: colors.white},
});
