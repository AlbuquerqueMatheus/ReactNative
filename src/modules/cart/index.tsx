import { useState } from "react";
import {FlatList, Image, ImageBackground, ImageProps, Text, Touchable, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface Product{
    id?: string;
    name: string;
    description: string;
    image: ImageProps["source"];
    price: string;
}

const celular = require("../../../assets/s23.jpg");

const Cart = () =>{
    const [cartItem, setCartItem] = useState<Product[]>([
        {id: '1', description: 'abc', image: celular, name: 'celular', price: 'R$500,00'},
        {id: '2', description: 'abc', image: celular, name: 'celular2', price: 'R$500,00'},
        {id: '3', description: 'abc', image: celular, name: 'celular3', price: 'R$500,00'},
    ])

    const navigation = useNavigation();
    function changeScreen(){
        navigation.goBack();
    }
    function gotoPayment(){
        navigation.navigate('PaymentScreen');
    }
    return(
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Carrinho</Text>
                        <TouchableOpacity style={styles.backButton} onPress={changeScreen}>
                            <Text style={styles.icon}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        {cartItem.length > 0 ?
                        (<FlatList data={cartItem}
                        ItemSeparatorComponent={<View style={styles.divider}></View> as any}
                        renderItem={({item: cartItem}) => (
                            <View style={styles.productCardContainer}>
                                <Image
                                    style={styles.imageProduct}
                                    source={cartItem.image}
                                />
                                <View style={styles.productDetails}>
                                    <View style={styles.productTitleContainer}>
                                        <Text style={styles.productTitle}>{cartItem.name}</Text>
                                        <Text style={styles.productPrice}>{cartItem.price}</Text>
                                    </View>
                                    <View style={styles.actions}>
                                        <View style={styles.counter}>
                                            <TouchableOpacity style={styles.decrementButton}>
                                                <Text style={{color:'#fff', fontSize:15, fontWeight:'bold' }}>-</Text>
                                            </TouchableOpacity>
                                            <Text>1</Text>
                                            <TouchableOpacity style={styles.addButton}>
                                                <Text style={{color:'#fff', fontSize:15, fontWeight:'bold' }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.trashButton}>
                                            <Text>Û</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}/>):
                        (<View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Seu carrinho está vazio!</Text>
                        </View>)}
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.footer}>
                <View style={styles.footerContent}>
                    <View style={styles.footerHeader}>
                        <Text style={styles.footerTitle}>Valor Total</Text>
                        <Text style={styles.totalCart}>R$1500,00</Text>
                    </View>
                    <TouchableOpacity style={styles.btnConfirmation} onPress={gotoPayment} >
                        <Text style={styles.bntConfirmationText}>FINALIZAR PEDIDO</Text>
                    </TouchableOpacity>
                </View>        
            </View>
        </>
    );
}

export default Cart;