import styled from '@emotion/styled'

export const RedInput = styled.input`
  border-color:red;
`

export const BlueButton = styled.button`
width: ${(props) => props.aaa};
color: pink;
background-color: ${(props) => props.qqq ? "yellow" : "default"};
`