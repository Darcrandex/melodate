/**
 * @name SignIn
 * @description 登录/注册
 * @author darcrand
 */

import { useProfile } from '@/stores/use-profile'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function SignIn() {
  const router = useRouter()

  const onBack = () => {
    router.canDismiss() ? router.dismiss() : router.replace('/')
  }

  const [, setProfile] = useProfile()
  const onLogin = () => {
    setProfile({
      name: 'darcrand',
      email: '6y3mM@example.com',
      avatar: 'https://i.pravatar.cc/300',
    })
    router.canDismiss() ? router.dismiss() : router.replace('/')
  }

  return (
    <>
      <View style={{ margin: 50 }}>
        <Pressable onPress={onBack}>
          <Text>go back</Text>
        </Pressable>
      </View>

      <Pressable onPress={onLogin}>
        <Text>登录</Text>
      </Pressable>
    </>
  )
}
