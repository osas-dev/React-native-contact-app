import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
//styled components
import {
  StyledContainer,
  InnerContainer,
  Title,
  Wrapper,
  Icon,
  Label,
  WrapperSm,
  Hr,
  Search,
  StyledButton,
  ButtonText,
  ContactWrapper,
  ContactPic,
  Footer,
  Colors,
} from '../components/styles'

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

//icons
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

//colors
const { secondary } = Colors


const Home = ({ navigation }) => {
  return (
    <>

      <KeyboardAvoidingWrapper>
        <StyledContainer statusBar={true}>
          <Icon 
            menu={true}
            onPress={() => navigation.openDrawer()}
            >
            <Feather
              size={22}
              name='menu'
            />
          </Icon>
          <InnerContainer>
            <Title>Add Contacts</Title>
            <Wrapper header={true}>
              <WrapperSm>
                <Icon icon={true}>
                  <MaterialIcons
                    name='add'
                    size={35}
                    style={{ padding: 25, color: '#fff' }}
                  />
                </Icon>
                <Label>New</Label>
              </WrapperSm>
              <WrapperSm>
                <Icon icon={true}>
                  <FontAwesome
                    name='address-book-o'
                    size={35}
                    style={{ padding: 25, color: '#fff' }}
                  />
                </Icon>
                <Label>Phone Book</Label>
              </WrapperSm>
              <WrapperSm>
                <Icon icon={true}>
                  <Feather
                    name='mail'
                    size={35}
                    style={{ padding: 25, color: '#fff' }}
                  />
                </Icon>
                <Label>Email</Label>
              </WrapperSm>
            </Wrapper>

            <Hr />

            <WrapperSm search={true}>
              <Search
                placeholder="Search"
              />
              <StyledButton large={true}>
                <ButtonText>Search</ButtonText>
              </StyledButton>
            </WrapperSm>
          </InnerContainer>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </StyledContainer>
      </KeyboardAvoidingWrapper>
      <Footer>
        <WrapperSm refresh={true}>
          <Icon refresh={true}>
            <MaterialCommunityIcons
              name='account-clock-outline'
              size={33}
              color={secondary}
              style={{ padding: 13 }}
            />
          </Icon>
          <Label refresh={true}>Refresh Contacts</Label>
        </WrapperSm>
      </Footer>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <TouchableOpacity>
        <Wrapper contact={true}>
          <ContactPic
            resizeMode='cover'
            source={require('./../assets/img/default.png')}
          />
          <Label contact={true}>Osasuyi Oboh</Label>
        </Wrapper>
      </TouchableOpacity>

      <Hr contact={true} />
    </>
  )
}

export default Home