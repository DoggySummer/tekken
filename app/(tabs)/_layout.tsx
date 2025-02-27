import { Tabs } from 'expo-router'
import React from 'react'
import { colors } from '@/constant/colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: colors.FOOTERGRAY,
        tabBarInactiveBackgroundColor: colors.FOOTERGRAY,
        tabBarActiveTintColor: colors.WHITE,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '홈',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='home-outline' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: '공략법',
          tabBarIcon: ({ color, focused }) => (
            <Feather name='book-open' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='skillTable'
        options={{
          title: '캐릭터 스킬표',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name='table' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
