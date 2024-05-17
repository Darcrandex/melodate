/**
 * @name ShowDetail
 * @description 演出详情
 * @author darcrand
 */

import { showApi } from '@/services/show'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function ShowDetail() {
  const id = useLocalSearchParams().id as string
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['show', 'detail', id],
    queryFn: () => showApi.getById(id),
  })

  return (
    <>
      <Pressable style={{ marginTop: 80 }} onPress={() => router.dismiss()}>
        <Text>返回</Text>
      </Pressable>
      <Text>ShowDetail {data?.data.activity.title}</Text>
    </>
  )
}
