/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import  Axios  from 'axios';
import { setUserAction } from '../../../store/reducers/userReducer';
import { useNavigation } from '@react-navigation/native';



export const useLogin = () => {

    const {user} = useSelector((state: RootState) => state.userReducer)
    

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("user", user)
    const handleOnPress = async () => {

        await Axios.post('http://192.168.137.49:8080/auth', {email, password}).then(res => {
            console.log(res)
            dispatch(setUserAction(res.data))
            navigation.navigate("Profile");
        })
        .catch((err) => {console.log(err); })

        console.log(
            `O Email do usuário é: ${email}; A Senha do usuário é: ${password};`,
          );
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    };
};
