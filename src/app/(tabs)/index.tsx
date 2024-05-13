/**
 * @name Home
 * @description 首页
 * @author darcrand
 */

import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <>
      <Text>Home</Text>

      <View>
        <Link href='/dating/001'>001</Link>
        <Link href='/dating/002'>002</Link>
        <Link href='/dating/003'>003</Link>
      </View>
    </>
  )
}
