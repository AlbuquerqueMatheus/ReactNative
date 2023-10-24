import { View, Text } from "react-native";
import { Card } from "../../../shared/components/Card";
import Button from "../../../shared/components/button/Button";
import Perfil from "../../Perfil";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

    const cel = require('../../../../assets/images-_1_.jpg')

    const navigation = useNavigation();

    const data = [
        {title: "Celular 1", price: "2500", offer:"1800", img:cel },
    ]

    return(
        <View>
            <Button title="Perfil" margin="10px" onPress={()=>navigation.navigate("Perfil")}/>
            <Card title={data[0].title} price={data[0].price} offer={data[0].offer} img={data[0].img}></Card>
            <Card title="Celular 2" price="2000" offer="1800" img={cel}></Card>
        </View>
    )
}

export default Profile;