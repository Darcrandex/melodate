/**
 * @name TicketDetail
 * @description 门票详情
 * @author darcrand
 */

import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function TicketDetail() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  return (
    <>
      <Pressable style={{ marginTop: 80 }} onPress={() => router.dismiss()}>
        <Text>返回</Text>
      </Pressable>

      <Text>TicketDetail {id}</Text>
    </>
  )
}
