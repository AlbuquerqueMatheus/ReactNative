import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { CardContainer, CardTitle, Content, FavoriteButton, ImageCard, Offer, Price } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather'
import { ImageProps } from "react-native";

interface PropsCard {
    title: String;
    price: String;
    offer: String;
    img: ImageProps["source"];
}
export function Card(props: PropsCard){
    const navigation = useNavigation();
    const goToCart = () => {navigation.navigate('Home');}
    return(
        <CardContainer onPress={goToCart}>
            <ImageCard source={props.img}/>
            <Content>
                <CardTitle>{props.title}</CardTitle>
                <Price>{props.price}</Price>
                <Offer>{props.offer}</Offer>
            </Content>
            <FavoriteButton>
                <Icon name="home" size={16} color={"#616161"} />
            </FavoriteButton>
        </CardContainer>
    );
}