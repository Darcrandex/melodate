/**
 * @description 主页面 tabs 布局
 */

import CustomBottomBar from '@/components/CustomBottomBar'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return <Tabs tabBar={() => <CustomBottomBar />} screenOptions={{ headerShown: false }} />
}
