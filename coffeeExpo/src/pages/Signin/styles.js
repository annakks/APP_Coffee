import styled from 'styled-components/native';

export const KeyBorderView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  width: 90%;
  
`
export const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
  
`

export const Input = styled.TextInput`
  border: 1px solid #C4C4C4 ;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #000;
  font-size: 20px;
  border-radius:9px;
  width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #445767;
  border-radius:9px;
  width: 90%;
  padding: 20px;
  align-items: center;
  
`
export const TextSubmit = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
