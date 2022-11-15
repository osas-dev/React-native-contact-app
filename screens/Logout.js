import React from 'react'
import { View } from 'react-native'
import {
  ButtonText,
  Wrapper,
  StyledButton,
  Title,
  Container
} from '../components/styles'

const Logout = () => {
  return (
    <Container>
      <Title>Proceed Sign-out?</Title>
      <Wrapper>
        <StyledButton md={true}><ButtonText>Yes</ButtonText></StyledButton>
        <StyledButton md={true}><ButtonText>Cancel</ButtonText></StyledButton>
      </Wrapper>
    </Container>
  )
}

export default Logout