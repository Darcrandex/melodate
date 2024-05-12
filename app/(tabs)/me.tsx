/**
 * @name Me
 * @description 我的
 * @author darcrand
 */

import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Me() {
  return (
    <>
      <Text>Me</Text>

      <View style={{ margin: 20 }}>
        <Link href='/'>返回首页</Link>
        <Link style={{ margin: 20 }} href='/sign-in'>
          去登录
        </Link>
      </View>
    </>
  )
}
