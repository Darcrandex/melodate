/**
 * @name TicketList
 * @description 门票列表
 * @author darcrand
 */

import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function TicketList() {
  return (
    <>
      <Text>TicketList</Text>

      <View>
        <Link href='/ticket/001'>Ticket 001</Link>
        <Link href='/ticket/002'>Ticket 002</Link>
      </View>
    </>
  )
}
