import { View, Text } from "react-native";
import { Card } from "../../../shared/components/Card";

const Profile = () => {

    const cel = require('../../../../assets/images-_1_.jpg')


    const data = [
        {title: "Celular 1", price: "2500", offer:"1800", img:cel },
    ]

    return(
        <View>
            <Card title={data[0].title} price={data[0].price} offer={data[0].offer} img={data[0].img}></Card>
            <Card title="Celular 2" price="2000" offer="1800" img={cel}></Card>
        </View>
    )
}

export default Profile;