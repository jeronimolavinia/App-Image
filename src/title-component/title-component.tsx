import { Component } from "react";
import { Text, StyleSheet } from "react-native"


interface Props{
    title: string;
}

export default class TitleComponent extends Component<Props>{
    static defaultProps = {
        title:'',
    }
    render(){
        const {title} = this.props;
        return(
            <Text style={styles.titulo}>{title} My App Image</Text>
        )
    }

}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 50,
    }


})