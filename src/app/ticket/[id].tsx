/**
 * @name TicketDetail
 * @description 门票详情
 * @author darcrand
 */

import { ticketApi } from '@/services/ticket'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function TicketDetail() {
  const id = useLocalSearchParams().id as string
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['ticket', 'detail', id],
    queryFn: () => ticketApi.getById(id),
  })

  return (
    <>
      <Pressable style={{ marginTop: 80 }} onPress={() => router.dismiss()}>
        <Text>返回</Text>
      </Pressable>

      <Text>TicketDetail {data?.data.activity.title}</Text>
    </>
  )
}
