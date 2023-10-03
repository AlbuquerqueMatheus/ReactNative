import styled  from "styled-components/native";


export const CardContainer = styled.TouchableOpacity`
    margin-top: 2px;
    width: 100%;
    height: 180px;
    border-radius: 5px;
    padding: 5px;
    background-color: #7c7c7c;
    flex-direction: row;
`;
export const ImageCard = styled.Image.attrs({
    resizeMode:"contain"
})`
    
    width: 40%;
    height: 100%;
`;
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;
export const CardTitle = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    flex-shrink: 1;
    margin-bottom: 5%;
`;
export const Price = styled.Text`
    color: #FC6B0f;
    font-size: 16px;
    font-weight: 600;
`;
export const Offer = styled.Text`
    color: bisque;
    font-size: 10px;
    font-weight: 500;
    text-decoration-line: line-through;
`;
export const FavoriteButton = styled.TouchableOpacity`
    width: 10%;
    height: 15%;
    position: absolute;
    top: 2%;
    right: 2%;
`;