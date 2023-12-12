import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Payment = () => {
  return (
    <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', width: '100%'}}>

        <Text style={{fontSize: 18, fontWeight:'bold'}}>Insira os detalhes do pagamento:</Text>
        <TextInput placeholder="Número do Cartão" style={{ borderColor: '#646464', borderWidth: 1, width: "70%", marginTop: 10, borderRadius: 5}} />
        <View style={{ flexDirection: 'row', marginTop: 10, gap: 8 }}>
          <TextInput placeholder="Data de Validade" style={{ borderColor: '#646464', borderWidth: 1, width: "49%", height: 40, borderRadius: 5 }} />
          <TextInput placeholder="CVV" style={{ borderColor: '#646464', borderWidth: 1, width: "19%", height: 40, borderRadius: 5 }} />
        </View>
        <View style={{ marginTop: 40, width: '70%' }}>
          <Button title="Pagar" />
        </View>
      </View>
    </View>
  );
};

export default Payment;
