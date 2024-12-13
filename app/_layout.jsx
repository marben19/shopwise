import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router';

const RootLayout = () => {
  return (
      <>
        <Text >TEXT</Text>
          <Slot />
        <Text >TEXT</Text>
      </>
  )
}

export default RootLayout
