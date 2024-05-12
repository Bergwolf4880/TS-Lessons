import GoBackButton from 'components/GoBackButton/GoBackButton'
import { ContentWrapper, MicrosoftWrapper } from './styles'


function Microsoft() {

  return (
    <MicrosoftWrapper>
      <ContentWrapper>
        Microsoft изначально была известна под немного другим именем -
        Micro-Soft, сочетание слов микрокомпьютер и программное обеспечение.
        Интересно, что один из самых популярных продуктов Microsoft, Microsoft
        Office, фактически дебютировал на Mac.
      </ContentWrapper>
      <GoBackButton />
    </MicrosoftWrapper>
  );
}
export default Microsoft;
