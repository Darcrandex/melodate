/**
 * @name PublishModal
 * @description 发布模态框
 * @author darcrand
 */

import { Tabs, useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function PublishModal() {
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
              <Pressable onPress={() => router.replace('/publish-modal/dating')}>
                <Text>dating</Text>
              </Pressable>
              <Pressable onPress={() => router.replace('/publish-modal/ticket')}>
                <Text>ticket</Text>
              </Pressable>
              <Pressable onPress={() => router.replace('/publish-modal/show')}>
                <Text>show</Text>
              </Pressable>
            </View>
          ),
        }}
      >
        <Tabs.Screen name='dating' />
        <Tabs.Screen name='ticket' />
        <Tabs.Screen name='show' />
      </Tabs>
    </>
  )
}
