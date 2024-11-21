// components/MemoInput.js
import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { memoListState } from '../recoil/atoms';
import * as Location from 'expo-location';

export default function MemoInput() {
  const [memo, setMemo] = useState('');
  const setMemoList = useSetRecoilState(memoListState);
  
  /**
   * 현재 위치 구독
   */
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // 위치 데이터 구조 분해 할당 시 예외 처리
  const getLatLng = (location) => {
    if (location && location.coords) {
      const { latitude, longitude } = location.coords;
      return { latitude, longitude };
    }
    return { latitude: 0, longitude: 0 };
  };
  
  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});      
    setLocation(getLatLng(location));
  }

  let loc = 'Waiting...';
  if (errorMsg) {
    loc = errorMsg;
  } else if (location) {
    loc = location;
  }


  const addMemo = async () => {
    if (memo.trim()) {
      await getCurrentLocation();
      
      setMemoList((oldMemoList) => [
        ...oldMemoList,
        { id: Date.now().toString(), content: memo, location: loc },
      ]);
      
      setMemo('');
    }
  };

  // test
  return (
    <View className="p-4">
      <TextInput
        className="h-[200px] p-2 mb-4 bg-white border-2 border-gray-400 rounded-lg"
        value={memo}
        onChangeText={setMemo}
        placeholder="오늘의 메모를 입력하세요"
      />
      <Button title="추가" onPress={addMemo} />
    </View>
  );
}