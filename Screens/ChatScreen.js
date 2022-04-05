import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatList from '../components/ChatList'

const ChatScreen = () => {
  return (
    <SafeAreaView> 
      <Header title='Chat'/>
      <ChatList/>
    </SafeAreaView>
  )
}

export default ChatScreen