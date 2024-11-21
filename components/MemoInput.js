
// 6. 메모 입력 필드 컴포넌트.
// components/MemoInput.js

import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { memoListState } from '../recoil/atoms';

export default function MemoInput() {
  const navigation = useNavigation();
  const [memo, setMemo] = useState('');
  const setMemoList = useSetRecoilState(memoListState);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const addMemo = () => {
    if (memo.trim()) {
      setMemoList((oldMemoList) => [
        ...oldMemoList,
        { id: Date.now().toString(), content: memo }
      ]);
      setMemo('');
      navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
    }
  };

  // TextInput의 ref 생성
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <View className="p-16">
        <View className="flex-row items-center justify-end mb-4">
          <Button title="추가" onPress={addMemo} />
        </View>
        <Pressable activeOpacity={1} onPress={handleFocus}>
          <View className={`bg-white border-2 border-gray-700 rounded-2xl ${isKeyboardVisible ? 'h-390' : 'h-[95%]'}`}>
            <TextInput
              ref={inputRef}
              className="mb-2 text-xl p-15"
              value={memo}
              onChangeText={(text) => setMemo(text)}
              placeholder="새로운 메모를 입력하세요"
            />
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
}