/**
 * @name Dating
 * @description 音约
 * @author darcrand
 */

import { useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function Dating() {
  const router = useRouter()
  const onPress = () => {
    console.log('cancel')
    router.canDismiss() ? router.dismiss() : router.replace('/')
  }

  return (
    <>
      <Text>Dating</Text>

      <Pressable style={{ marginTop: 80 }} onPress={onPress}>
        <Text>取消</Text>
      </Pressable>
    </>
  )
}
