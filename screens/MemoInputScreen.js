// screens/MemoInputScreen.js
import React from 'react';
import MemoInput from '../components/MemoInput';
import { View } from 'react-native';

export default function MemoInputScreen() {
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <MemoInput />
    </View>
  );
}