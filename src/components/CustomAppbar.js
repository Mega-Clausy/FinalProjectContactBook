import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppbar = ({ navigation, back, title }) => (
  <Appbar.Header>
    {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
    <Appbar.Content title={title} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon="dots-vertical" onPress={() => {}} />
  </Appbar.Header>
);

export default CustomAppbar;