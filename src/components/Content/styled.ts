import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -4rem;
`

export const ContentCenter = styled.div`
  border-radius: 0.5rem;

  background-color: #FFFFFF;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  width: 100%;
  max-width: 920px;

  height: 100%;

  min-height: 500px;
  max-height: 950px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  div {
    padding: 5rem;
  }
`