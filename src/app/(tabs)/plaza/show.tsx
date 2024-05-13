/**
 * @name ShowList
 * @description 演出列表
 * @author darcrand
 */

import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function ShowList() {
  return (
    <>
      <Text>ShowList</Text>

      <View>
        <Link href='/show/001'>Show 001</Link>
        <Link href='/show/002'>Show 002</Link>
        <Link href='/show/003'>Show 003</Link>
      </View>
    </>
  )
}
