import React, { useState } from 'react';
import { View } from 'react-native';

//styled components
import {
  StyledContainer,
  Title,
  InnerContainer,
  ProfilePic,
  Icon,
  StyledButton,
  ButtonText,
  Wrapper,
  TabText,
  StyledFormArea,
  StyledTextInput,
  Colors,
  InputWrapper,
  MsgBox
} from '../components/styles'

//icons
import { Ionicons, Feather } from '@expo/vector-icons'

//formik
import { Formik } from 'formik'

//colors
const { secondary } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'


const Profile = ({ navigation }) => {
  const [isActive, setIsActive] = useState('tab1')

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer statusBar={true}>
        <Icon onPress={() => navigation.goBack()}>
          <Ionicons
            name='chevron-back'
            size={20}
          />
        </Icon>
        <Title profile={true}>Profile</Title>

        <InnerContainer>
          <Formik
            initialValues={{ firstName: '', lastName: '', ContactNumber: '', email: '' }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ handleChange, handleBlur, values, handleSubmit }) =>
            (<>
              <ProfilePic
                resizeMode='cover'
                source={require('./../assets/img/default.png')}
              />
              <Icon edit={true}>
                <Feather
                  name='edit-2'
                  size={20}
                  style={{ padding: 10, color: '#fff' }}
                />
              </Icon>

              <StyledButton large={true} style={{ marginTop: '10%' }}><ButtonText>Top Badges</ButtonText></StyledButton>

              <Wrapper>
                <StyledButton
                  sm={true}
                  active={isActive === 'tab1' ? 'yes' : 'no'}
                >
                  <TabText
                    sm={true}
                    active={isActive === 'tab1' ? 'yes' : 'no'}
                  >Profile</TabText>
                </StyledButton>
                <StyledButton
                  sm={true}
                  active={isActive === 'tab2' ? 'yes' : 'no'}
                >
                  <TabText
                    sm={true}
                    active={isActive === 'tab2' ? 'yes' : 'no'}
                  >Social</TabText>
                </StyledButton>
                <StyledButton
                  sm={true}
                  active={isActive === 'tab3' ? 'yes' : 'no'}
                >
                  <TabText
                    sm={true}
                    active={isActive === 'tab3' ? 'yes' : 'no'}
                  >Links</TabText>
                </StyledButton>
              </Wrapper>
              <StyledFormArea>
                <InputWrapper>
                  <TextInput
                    profile={true}
                    placeholder="First Name"
                    placeholderTextColor={secondary}
                    onChange={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    profile={true}
                    placeholder="Last Name"
                    placeholderTextColor={secondary}
                    onChange={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    profile={true}
                    placeholder="Mobile Number"
                    placeholderTextColor={secondary}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    profile={true}
                    placeholder="Email"
                    placeholderTextColor={secondary}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    secureTextEntry={true}
                  />
                </InputWrapper>
                <MsgBox>...</MsgBox>
                <StyledButton large={true} onPress={handleSubmit}>
                  <ButtonText>SUBMIT</ButtonText>
                </StyledButton>
              </StyledFormArea>
            </>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

const TextInput = ({ label, ...props }) => {
  return (
    <View>
      <StyledTextInput {...props} />
    </View>
  )
}

export default Profile