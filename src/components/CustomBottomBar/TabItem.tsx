/**
 * @name TabItem
 * @description
 * @author darcrand
 */

import { usePathname, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export type TabItemProps = {
  pathname: string
  title: string
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
}

export default function TabItem(props: TabItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isFocused = pathname === props.pathname

  const onPress = () => {
    if (!isFocused) {
      router.replace(props.pathname)
    }
  }

  return (
    <>
      <Pressable style={{ backgroundColor: 'green' }} onPress={onPress}>
        <Text
          style={{
            fontSize: 18,
            padding: 12,
            color: isFocused ? 'red' : 'blue',
          }}
        >
          {props.title}
        </Text>
      </Pressable>
    </>
  )
}
