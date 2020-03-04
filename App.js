import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue', alignSelf:'center' }} />
        <View style={{ width: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 200, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
};