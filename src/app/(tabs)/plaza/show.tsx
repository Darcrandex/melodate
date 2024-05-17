/**
 * @name ShowList
 * @description 演出列表
 * @author darcrand
 */

import { ticketApi } from '@/services/ticket'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function ShowList() {
  const router = useRouter()

  const { data: res } = useQuery({
    queryKey: ['show', 'pages'],
    queryFn: () => ticketApi.pages(),
  })

  return (
    <>
      <Text>ShowList</Text>

      <View>
        {res?.data?.records.map((v) => (
          <Pressable key={v.id} onPress={() => router.push(`/show/${v.id}`)}>
            <Text>演唱会 {v.id}</Text>
          </Pressable>
        ))}
      </View>
    </>
  )
}
