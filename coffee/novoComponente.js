import React from 'react';
import {Text, View} from 'react-native';

// como função
//const NovoComponente = (props) => {
//  return (
//    <>
//      <Text>{props.nome}</Text>
//      <Text>{props.sobrenome}</Text>
//    </>
//    )
//}

//export default NovoComponente;

class NovoComponente extends Component {
    render() {
        return (
            <Text>{this.props.nome} {this.props.sobrenome}</Text>
        )
    }
}

export default NovoComponente