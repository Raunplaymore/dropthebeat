import React from 'react';
import { SafeAreaView, Text, TextInput, ScrollView, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import MemoList from './components/MemoList';
import MemoInput from './components/MemoInput';
import "./global.css"

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView className="flex-1 bg-gray-100">
        <Text className="p-4 mt-4 text-2xl font-bold text-center">일상 메모장</Text>
        <MemoInput />
        <ScrollView>
          <MemoList />
        </ScrollView>
      </SafeAreaView>
    </RecoilRoot>
  );
}