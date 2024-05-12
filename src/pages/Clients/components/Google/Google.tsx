import GoBackButton from 'components/GoBackButton/GoBackButton'
import { GoogleWrapper, ContentWrapper } from './styles';

function Google() {
  return (
    <GoogleWrapper>
      <ContentWrapper>
        Google изначально назывался “BackRub”, но из-за ошибки при выписке чека
        одного из первых инвесторов, название было изменено на "Google".
        Интересно, что в 2004 году, в момент выхода на IPO, практически все
        сотрудники Google стали миллионерами.
      </ContentWrapper>
      <GoBackButton />
    </GoogleWrapper>
  );
}
export default Google;
