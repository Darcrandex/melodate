/**
 * @name Plaza
 * @description 广场
 * @author darcrand
 */

import { Tabs, useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function Plaza() {
  const router = useRouter()

  return (
    <>
      <Tabs
        tabBar={() => null}
        screenOptions={{
          header: () => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 50 }}
            >
              <Pressable onPress={() => router.replace('/plaza/ticket')}>
                <Text>ticket</Text>
              </Pressable>
              <Pressable onPress={() => router.replace('/plaza/show')}>
                <Text>show</Text>
              </Pressable>
            </View>
          ),
        }}
      >
        <Tabs.Screen name='ticket' />
        <Tabs.Screen name='show' />
      </Tabs>
    </>
  )
}
