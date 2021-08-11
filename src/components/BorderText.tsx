import styled from 'styled-components/native';

const BorderText = styled.Text`
  display: flex;
  color: white;
  font-weight: bold;
  font-size: ${(props: { fontSize: number}) => props.fontSize || '16'}px;
  text-shadow: 2px 1px 3px black;
`
export default BorderText;
