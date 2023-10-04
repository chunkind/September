import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Button, AppBar, Backdrop, Flex, Box, HStack, VStack, Wrap, TextInput } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{

  

  render(){
    return(
      <VStack>
        <AppBar title = "Main"/>
        <HStack>
          <TextInput label='label' leading={props => <Icon name="pausecircleo" size={24} color="#000000" />} />
        </HStack>
        <Wrap p={5} spacing={6}>
            <Button title="로그인" />
            <Button title="회원가입" />
        </Wrap>
      </VStack>
    )
  }
}