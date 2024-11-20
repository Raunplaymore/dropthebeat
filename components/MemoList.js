// components/MemoList.js
// components/MemoList.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRecoilState } from 'recoil';
import { memoListState } from '../recoil/atoms';

export default function MemoList() {
  const [memoList, setMemoList] = useRecoilState(memoListState);

  const deleteMemo = (id) => {
    setMemoList((oldMemoList) => oldMemoList.filter((memo) => memo.id !== id));
  };

  return (
    <View className="px-4"> {/* 목록 스타일 */}
      {memoList.map((memo) => (
        <View key={memo.id} className="flex-row items-center justify-between py-[10px] px-[10px] m-5 border border-gray-400 rounded-lg">
          <Text className="text-lg">{memo.content}</Text>
          <Button title="삭제" onPress={() => deleteMemo(memo.id)} />
        </View>
      ))}
    </View>
  );
}