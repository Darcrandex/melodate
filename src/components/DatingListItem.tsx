/**
 * @name DatingListItem
 * @description 首页-音约列表项
 * @author darcrand
 */

import { DatingSchema } from '@/types/schema/dating'
import { useRouter } from 'expo-router'
import { CSSProperties } from 'react'
import { Pressable, Text } from 'react-native'

export type DatingListItemProps = { data: DatingSchema; className?: string; style?: CSSProperties }

export default function DatingListItem(props: DatingListItemProps) {
  const router = useRouter()
  return (
    <>
      <Pressable onPress={() => router.push(`/dating/${props.data.id}`)}>
        <Text>{props.data.publisher.nickname}发布的音约</Text>
      </Pressable>
    </>
  )
}
