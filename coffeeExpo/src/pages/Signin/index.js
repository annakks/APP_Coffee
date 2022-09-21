import React from 'react';
import {
    KeyBorderView,  
    Container, 
    Input,
    Title,
    ButtonSubmit, 
    TextSubmit
} from './styles';
import Header from '../../components/Header/index';


function Signin() {
    return(
        <KeyBorderView>
            <Container>
                <Header/>
                <Title></Title>
                <Input placeholder="Digite seu RE"/>
                <Input 
                placeholder="Senha"
                secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Login</TextSubmit>
                </ButtonSubmit>
            </Container>  
        </KeyBorderView>
        
    )
}

export default Signin;