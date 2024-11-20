// components/MemoInput.js
import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { memoListState } from '../recoil/atoms';

export default function MemoInput() {
  const [memo, setMemo] = useState('');
  const setMemoList = useSetRecoilState(memoListState);

  const addMemo = () => {
    if (memo.trim()) {
      setMemoList((oldMemoList) => [
        ...oldMemoList,
        { id: Date.now().toString(), content: memo }
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