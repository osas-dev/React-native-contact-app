import React from 'react'
import { View } from 'react-native';

//formik
import { Formik } from 'formik'

//icons
import { FontAwesome } from '@expo/vector-icons'

// styled components
import {
    StyledContainer,
    InnerContainer,
    StyledFormArea,
    LeftIcon,
    StyledButton,
    StyledTextInput,
    ButtonText,
    Colors,
    InputWrapper,
    MsgBox,
    Button,
    Container
} from './../components/styles'

// colors
const { secondary, gray } = Colors


const Login = () => {
    return (
            <StyledContainer>
                <InnerContainer login={true}>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {({ handleChange, handleBlur, values, handleSubmit }) =>
                        (<StyledFormArea>
                            <InputWrapper>
                                <TextInput
                                    icon="user"
                                    placeholder="Username"
                                    placeholderTextColor={secondary}
                                    onChange={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <TextInput
                                    icon="lock"
                                    placeholder="Password"
                                    placeholderTextColor={secondary}
                                    onChange={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                />
                            </InputWrapper>
                            <MsgBox>...</MsgBox>
                            <Button large={true} onPress={handleSubmit}>
                                <ButtonText>LOGIN</ButtonText>
                            </Button>
                        </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
    )
};

const TextInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <FontAwesome size={20} name={icon} color={gray} />
            </LeftIcon>
            <StyledTextInput {...props} />
        </View>
    )
}

export default Login