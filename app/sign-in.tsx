/**
 * @name SignIn
 * @description 登录/注册
 * @author darcrand
 */

import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function SignIn() {
  const router = useRouter()

  const onBack = () => {
    router.canDismiss() ? router.dismiss() : router.replace('/')
  }

  return (
    <>
      <View style={{ margin: 50 }}>
        <Pressable onPress={onBack}>
          <Text>go back</Text>
        </Pressable>
      </View>

      <Text>SignIn</Text>
    </>
  )
}
