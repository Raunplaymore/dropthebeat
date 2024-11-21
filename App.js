
import React from 'react';
import { SafeAreaView } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navigation from './navigation/Navigation';
import "./global.css"

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView className="flex-1">
        <Navigation />
      </SafeAreaView>
    </RecoilRoot>
  );
}