import GoBackButton from 'components/GoBackButton/GoBackButton'
import { AppleWrapper, ContentWrapper } from './styles'


function Apple() {
  return (
    <AppleWrapper>
      <ContentWrapper>
        Apple изначально была основана не двумя, а тремя людьми: Стивом Джобсом,
        Стивом Возняком и Рональдом Уэйном. Оригинальный компьютер Apple I был
        продан за 666,66 доллара.
      </ContentWrapper>
      <GoBackButton />
    </AppleWrapper>
  );
}
export default Apple;
