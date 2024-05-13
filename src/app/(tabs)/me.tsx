/**
 * @name Me
 * @description 我的
 * @author darcrand
 */

import { useProfile } from '@/stores/use-profile'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function Me() {
  const [profile, setProfile] = useProfile()
  return (
    <>
      <View style={{ margin: 20 }}>
        <Text>Me</Text>
        <Link href='/'>返回首页</Link>

        {profile.name ? (
          <>
            <Text>Profile: {profile.name}</Text>
            <Pressable onPress={() => setProfile({ name: '', email: '', avatar: '' })}>
              <Text>退出登录</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Link style={{ margin: 20 }} href='/sign-in'>
              去登录
            </Link>
          </>
        )}
      </View>
    </>
  )
}
