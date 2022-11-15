import styled from 'styled-components'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
    primary: '#0077b6',
    secondary: '#1aa7ec',
    gray: '#808080',
};

const { primary, secondary, gray } = Colors;

export const Container = styled.View`
    flex: 1;
    padding: 25px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: #fff;

    ${(props) => props.statusBar == true && `
        paddingTop: ${StatusBarHeight + 20}px;
    `}
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    ${(props) => props.login == true && `
        justify-content: center;
    `}
`

export const StyledFormArea = styled.View`
    width: 90%;
`

export const InputWrapper = styled.View`
    border-bottom-color: ${gray};
    border-bottom-width: 1px;
    margin-bottom: 10px;
`

export const StyledTextInput = styled.TextInput`
    font-size: 16px;
    height: 60px;
    color: ${secondary};
    ${(props) => props.profile ? `
    padding: 15px 55px 0px 5px;
    `
        :
        `
    padding: 15px 55px 0px 45px;
    `
    }
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 26px;
    position: absolute;
    z-index: 1;
`


export const Button = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    height: 42px;
    align-items: center;
    margin-top: 10px;
    background-color: ${primary};

`
export const StyledButton = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    height: 42px;
    align-items: center;
    margin-top: 10px;

    ${(props) => props.md == true && `
     width: 120px;
     margin-horizontal: 15px;
     border-radius: 5px;
     background-color: ${primary};
    `}
    ${(props) => props.sm == true && `
     width: 120px;
     border: ${primary};
    `}
    ${(props) => props.large == true && `
     width: 100%;
     border-radius: 5px;
     background-color: ${primary};
    `}

    ${(props) => props.active === 'yes' && `
        background-color: ${primary};
    `}

`

export const ButtonText = styled.Text`
    font-size: 16px;

    ${(props) => props.sm == true ? `
     color: ${primary};
    `
        :
        `
    color: #fff;
    `
    }
`
export const TabText = styled.Text`
    font-size: 16px;
    ${(props) => props.active === 'yes' ? `
     color: #fff;
    `
        :
        `
    color: ${primary};
    `
    }
`

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`

export const Title = styled.Text`
    text-align: center;
    color: ${secondary};
    ${(props) => props.profile == true ? `
     font-size: 20px;
     margin-top: -20px
     `
        :
        `
     font-size: 30px;
    `
    }
`

export const Wrapper = styled.View`
    width: 100%;
    flex-direction: row;

    ${(props) => props.header ?
        `
        padding-top: 30px
    `
        :
        `
        padding-top: 10px;
    `
    }

    ${(props) => props.contact ?
    `  
        align-items: center
    `
        :
    `
        justify-content: center;
    `
    }
`
export const WrapperSm = styled.View`
    flex-direction: column;
    justify-content: center; 

    ${(props) => props.search == true && `
        width: 90%;
        padding-bottom: 25px;
    `}

    ${(props) => props.refresh == true && `
        width: 120px;
        height: 80px;
        padding: 10px;
        margin-top: 5px;
    `}
`

export const ProfilePic = styled.Image`
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    overflow: hidden;

    ${(props) => props.drawer ? `
        left: 30%
        width: 100px;
        height: 100px;
        margin-vertical: 30px;
    ` 
    :
    `
        margin-top: 20px;
        width: 160px;
        height: 160px;
    `}
`

export const Icon = styled.TouchableOpacity`
    z-index: 1;

    ${(props) => props.edit == true && `
        border-radius: 50px;
        background-color: #4f5052;
        position: relative;
        margin-top: -50px;
        left: 39px
    `}

    ${(props) => props.icon == true && `
        border-radius: 50px;
        background-color: ${primary};
        margin-horizontal: 15px;
    `}

    ${(props) => props.refresh == true && `
        border-radius: 50px;
        background-color: #fff;
        width: 60px;
        align-self: center;
    `}

    ${(props) => props.menu == true && `
        background-color: #fff;
        left: 90%;
        margin-top: ${StatusBarHeight - 30}px;
        margin-bottom: 60px;
    `}
`

export const Label = styled.Text`
    text-align: center;
    ${(props) => props.refresh ? `
        font-size: 14px;
        padding-top: 3px;
        color: #fff;
        font-weight: bold;
    `
    :
    `
        font-size: 14px;
        padding-top: 8px;
        color: ${gray};
    `}
`

export const Hr = styled.View`
    height: 1px;

    ${(props) => props.contact ? `
        margin-top: 10px;
    `
    :
    `
        margin-top: 30px;
    `}

    ${(props) => props.drawer ? `
        width: 80%;
        background-color: ${gray};
        left: 10%
        margin-top: 60px;
    `
    :
    `
        width: 100%;
        background-color: ${gray};
        margin-bottom: 10px;
    `}
`

export const Search = styled.TextInput`
    border: ${gray};
    font-size: 19px;
    height: 40px;
    padding-left: 20px;
    color: ${secondary};
    margin-top: 10px;
`

export const ContactPic = styled.Image`
    margin-top: 0px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    overflow: hidden;
    width: 60px;
    height: 60px;
    z-index: 1;
    margin-right: 23px;
`

export const Footer = styled.View`
    background-color: ${primary};
    color: #fff;
    height: 11%;
`