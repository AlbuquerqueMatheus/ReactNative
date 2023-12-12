import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import {styles} from '../styles/view.style';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ViewItens = () => {
  const navigation = useNavigation();
  function changeScreen() {
    navigation.navigate('Cart');
  }

  function backScreen() {
    navigation.goBack();
  }

  return (
    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.header}
        source={require('../../../assets/Propiedades-de-la-luz.png')}
        imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader} onPress={backScreen}>
            <Icon name="arrow-left" size={21} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttomHeader} onPress={changeScreen}>
            <Icon name="shopping-cart" size={23} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>Luz</Text>
        {/* <View>

                </View> */}
        <View style={styles.rowBody}>
          <Text style={styles.rate}>
            4.7/5 <Icon name="star" size={16} color={'#FFA500'} />
          </Text>

          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: 'rgba(0,0,0,0.1)'}]}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueIncrase}> 1 </Text>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: 'rgba(0,0,0,0.8)'}]}>
              <Text style={[styles.icon, {color: '#fff'}]} onPress={changeScreen}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleSubSection}>Descrição</Text>
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quia
          cupiditate facilis consequuntur commodi rerum ab omnis odit. Quis
          provident non consectetur earum optio quas natus quisquam tenetur
          soluta esse.
        </Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.titlePrice}>Preço</Text>
          <Text style={styles.price}>R$ 9,90</Text>
        </View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnCardText} onPress={changeScreen}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewItens;
