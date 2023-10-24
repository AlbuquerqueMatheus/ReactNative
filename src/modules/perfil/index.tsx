import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './stylesUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const UserProfile = () => {
    const { user } = useSelector((state: RootState) => state.userReducer.user)
    console.log(user)
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Nome: {user.name}</Text>
            <Text style={styles.email}>E-mail: {user.email}</Text>
            <Text style={styles.email}>CPF: {user.cpf}</Text>
            <Text style={styles.email}>ID: {user.id}</Text>
            <Text style={styles.email}>Telefone: {user.phone}</Text>
        </View>
    );
}

export default UserProfile;
