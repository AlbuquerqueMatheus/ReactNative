import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PaymentScreen = () => {

    const navigation = useNavigation();
    function changeScreen() {
        navigation.goBack();
    }
    return (
        <View>
            <Text>Insira os detalhes do pagamento:</Text>
            <TextInput placeholder="Número do Cartão" />
            <TextInput placeholder="Data de Validade" />
            <TextInput placeholder="CVV" />
            <Button title="Pagar" />
        </View>
    );
}

export default PaymentScreen;
