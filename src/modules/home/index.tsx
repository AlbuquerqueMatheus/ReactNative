import {ImageBackground, Text, Touchable, TouchableOpacity, View} from "react-native";
import { styles } from "./stylesHome";
import {useNavigation} from '@react-navigation/native'
import  Icon  from "react-native-vector-icons/FontAwesome";
const Home = () =>{
    const navigation = useNavigation();
    function changeScreen(){
        navigation.navigate('Cart');
      }
    return(
        <View style={styles.container}>
            <ImageBackground 
            style={styles.header}
            source={require("../../../assets/images-_1_.jpg")}
            imageStyle={styles.img}
            >
            <View style={styles.row}>
                <TouchableOpacity style={[styles.buttomHeader,{opacity: 0}]} >
                    <Icon name="arrow-left" size={23}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomHeader} onPress={changeScreen} >
                    <Icon name="shopping-cart" size={23}/>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.nameProduct}>Samsung a14 4G</Text>
                <View style={styles.rowBody}>
                    <Text style={styles.rate}>(4.5)</Text>
                    <View style={styles.rowIncraseBtn}>
                        <TouchableOpacity style={[styles.btnIncrase, {backgroundColor: "rgba(0,0,0,0.1)"}]} 
                        //onPress={handleRemoveValue}
                        >
                            <Text style={styles.icon}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.valueIncrase}>1</Text>
                        <TouchableOpacity style={[styles.btnIncrase, {backgroundColor: "rgba(0,0,0,0.8)"}]} 
                        // onPress={handleRemoveValue}
                        >
                            <Text style={[styles.icon, {color: "rgba(255,255,255,1)"} ]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.titleSubSection}>Descrição</Text>
                <Text style={styles.description}>A14 5G é para todos os seus momentos favoritos. A Câmera Principal de 50MP captura fotos magníficas de paisagens, a Câmera de Profundidade adiciona dimensões impressionantes, a Câmera Macro obtém detalhes finos e a Câmera Frontal tira selfies fabulosas.</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>R$ 500,00</Text>
                </View>
                <TouchableOpacity style={styles.btnCart}>
                    <Text style={styles.btnCartText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home