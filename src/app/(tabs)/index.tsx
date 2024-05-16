/**
 * @name Home
 * @description 首页
 * @author darcrand
 */

import DatingListItem from '@/components/DatingListItem'
import { activityApi } from '@/services/activity'
import { datingApi } from '@/services/dating'
import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'

export default function Home() {
  const { data: activities } = useQuery({
    queryKey: ['activity', 'pages'],
    queryFn: () => activityApi.pages(),
  })

  const { data: list } = useQuery({
    queryKey: ['dating', 'pages'],
    queryFn: () => datingApi.pages(),
  })

  return (
    <>
      <Text>Home</Text>
      <View>{activities?.data.records.map((v) => <Text key={v.id}>{v.title}</Text>)}</View>

      <View>{list?.data.records.map((v) => <DatingListItem key={v.id} data={v} />)}</View>
    </>
  )
}
