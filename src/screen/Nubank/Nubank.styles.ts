import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`

export const CardMyCardsView = styled.View`
  padding: 0 24px;
  margin-top: 24px;
`

export const CardBlogView = styled.View`
  flex-direction: row;
  margin-top: 24px;
`

export const CardBlogItem = styled.View`
  margin-right: 8px;
`

export const CardValue = styled.View`
  border-top-width: 1px;
  border-color: #e6e6e6;
  margin-top:22px;
  padding: 22px;
`

export const CardValueNow = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  margin-top: 7px;
`

export const Touchable = styled.TouchableOpacity`
  padding:9px;
  background-color: #e6e6e6;
  width: 170px;
  border-radius:12px;
  align-items:center;
  margin-top: 40px;
`