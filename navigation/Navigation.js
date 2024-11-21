
// 3. 네비게이션 설정 (페이지 이동을 위한 설정).
// navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MemoListScreen from '../screens/MemoListScreen';
import MemoInputScreen from '../screens/MemoInputScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MemoList">
        <Stack.Screen name="MemoList" component={MemoListScreen} options={{ title: '메모 목록' }} />
        <Stack.Screen name="MemoInput" component={MemoInputScreen} options={{ title: '메모 작성' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
