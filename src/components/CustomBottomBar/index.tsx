/**
 * @name CustomBottomBar
 * @description 自定义底部导航栏
 * @author darcrand
 */

import { Fragment } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PublishBotton from './PublishButton'
import TabItem, { TabItemProps } from './TabItem'

const tabs: TabItemProps[] = [
  { pathname: '/', title: '首页' },
  { pathname: '/plaza', title: '广场' },
  { pathname: '/notice', title: '消息' },
  { pathname: '/me', title: '我的' },
]

export default function CustomBottomBar() {
  const insets = useSafeAreaInsets()

  return (
    <>
      <View style={{ paddingBottom: insets.bottom, backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <View
          style={{
            backgroundColor: 'rgba(200, 128, 128, 0.5)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {tabs.map((route, index) =>
            index === Math.floor(tabs.length / 2) - 1 ? (
              <Fragment key={route.pathname}>
                <TabItem {...route} />
                <PublishBotton />
              </Fragment>
            ) : (
              <TabItem key={route.pathname} {...route} />
            ),
          )}
        </View>
      </View>
    </>
  )
}
