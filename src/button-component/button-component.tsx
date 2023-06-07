import { Component } from "react";
import {Text, StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";

interface Props{
    text:string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    
}

export default class ButtonComponent extends Component<Props>{
    render(){
        const {text, onPress} = this.props;
        return(
            <TouchableOpacity style={styles.botao}  onPress={onPress}>
                <Text style={styles.texto}>{text}</Text>
            </TouchableOpacity> 
        )
    }
}
const styles = StyleSheet.create({
    botao:{
        backgroundColor:'#7CFC00',
        width: 100,
        height:30,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 250,
    },

    texto:{
        fontSize: 20,
        textAlign:'center',
    }


})