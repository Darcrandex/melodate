/**
 * @name PublishBotton
 * @description 发布按钮
 * @author darcrand
 */

import { useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function PublishBotton() {
  const router = useRouter()

  const onPress = () => {
    router.push('/publish-modal')
  }

  return (
    <>
      <Pressable
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: 80,
          borderRadius: 50,
          backgroundColor: 'red',
        }}
        onPress={onPress}
      >
        <Text style={{ color: 'white' }}>+</Text>
      </Pressable>
    </>
  )
}
