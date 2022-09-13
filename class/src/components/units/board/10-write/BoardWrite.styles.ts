import styled from '@emotion/styled'
import { IBlueButtonProps } from './BoardWrite.types'

export const RedInput = styled.input`
  border-color:red;
`


export const BlueButton = styled.button`
width: ${(props : IBlueButtonProps) => props.aaa};
color: pink;
background-color: ${(props : IBlueButtonProps) => props.qqq ? "yellow" : "default"};
`