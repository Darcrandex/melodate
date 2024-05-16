/**
 * @name DatingDetail
 * @description 音约详情
 * @author darcrand
 */

import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function DatingDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  return (
    <>
      <Pressable
        style={{ marginTop: 80 }}
        onPress={() => (router.canDismiss() ? router.dismiss() : router.replace('/'))}
      >
        <Text>返回</Text>
      </Pressable>

      <Text>DatingDetail {id}</Text>
    </>
  )
}
