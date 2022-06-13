import styled from "styled-components";

type Props = {
  showBackground: boolean
}

type ImgProps = {
  opacity?: number
}

export const Container = styled.div<Props>`
  background-color: 
    ${props => props.showBackground ? '#1550ff' : '#e2e3e3'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Icon = styled.img<ImgProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? 1};
`