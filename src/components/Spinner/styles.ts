import styled from '@emotion/styled'


interface SpinnerStyled {
    loading?:boolean
}

export const SpinnerWrapper = styled.div<SpinnerStyled>`
display: ${({loading})=> (loading?'block':'none')}

`
