
// 7. 메모 목록 컴포넌트에 삭제 버튼 추가.
// components/MemoList.js

import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { memoListState } from '../recoil/atoms';

export default function MemoList() {
  const [memoList, setMemoList] = useRecoilState(memoListState);

  const deleteMemo = (id) => {
    setMemoList((oldMemoList) => oldMemoList.filter((memo) => memo.id !== id));
  };

  console.log('memoList', memoList);
  return (
    <View className="px-4 py-6 space-y-4 bg-purple-50 rounded-2xl">
      {memoList.map((memo) => (
        <View key={memo.id} className="flex-row items-center justify-between p-[20px] mb-10 bg-white border border-gray-200 shadow-sm rounded-xl">
          <Text className="mr-12 text-xl">{memo.content}</Text>
          <TouchableOpacity onPress={() => deleteMemo(memo.id)}>
            <FontAwesome name="trash" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}