/**
 * @name ShowDetail
 * @description 演出详情
 * @author darcrand
 */

import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function ShowDetail() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  return (
    <>
      <Pressable style={{ marginTop: 80 }} onPress={() => router.dismiss()}>
        <Text>返回</Text>
      </Pressable>
      <Text>ShowDetail {id}</Text>
    </>
  )
}
