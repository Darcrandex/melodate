/**
 * @name TicketList
 * @description 门票列表
 * @author darcrand
 */

import { ticketApi } from '@/services/ticket'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function TicketList() {
  const router = useRouter()

  const { data: res } = useQuery({
    queryKey: ['ticket', 'pages'],
    queryFn: () => ticketApi.pages(),
  })

  return (
    <>
      <Text>TicketList</Text>

      <View>
        {res?.data?.records.map((v) => (
          <Pressable key={v.id} onPress={() => router.push(`/ticket/${v.id}`)}>
            <Text>门票{v.id}</Text>
          </Pressable>
        ))}
      </View>
    </>
  )
}
