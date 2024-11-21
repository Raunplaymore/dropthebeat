import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MemoList from '../components/MemoList';

import { useRecoilValue } from 'recoil';
import { memoListState } from '../recoil/atoms';

export default function MemoListScreen() {
  const memoList = useRecoilValue(memoListState);
  const [hasMemos, setHasMemos] = useState(false);

  useEffect(() => {
    setHasMemos(memoList.length > 0);
  }, [memoList]);

  const navigation = useNavigation();

  return (
    <View className="flex-1 p-4 bg-gray-100 ">
      <View className="flex-row justify-end">
        <Button className="border-2 border-gray-100" title="메모 작성" onPress={() => navigation.navigate('MemoInput')} />
      </View>
      <View className="items-center justify-center flex-1 border-2">
        {
          !hasMemos ? (
              <Text className="text-2xl font-bold">메모가 없습니다</Text>
          ) : (
            <ScrollView className="flex-1 pb-5">
              <MemoList />
            </ScrollView>
          )
        }
      </View>
    </View>
  );
}