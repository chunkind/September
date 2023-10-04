import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Button, AppBar, Backdrop, Flex, Box, HStack, VStack, Wrap, TextInput } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component{
  render(){
    return(
      <VStack>
        <AppBar title = "Main"/>
        <HStack style={{ justifyContent:"center", alignItems:"center"}}>
          <Box p={4} style={{backgroundColor:"white", width:"100%"}}>
            <TextInput label='label' variant="outlined" leading={props => <Icon name="pausecircleo" size={24} />} style={{padding:"14px"}} />
            <TextInput label='label' variant="outlined" leading={props => <Icon name="pausecircleo" size={24} />} style={{padding:"14px"}} />
          </Box>
        </HStack>
        <HStack p={5} pb={15} spacing={6} style={{backgroundColor:"white", width:"100%", justifyContent:"center", alignItems:"flex-end"}}>
            <Button title="로그인" />
            <Button title="회원가입" />
          </HStack>
      </VStack>
    )
  }
}