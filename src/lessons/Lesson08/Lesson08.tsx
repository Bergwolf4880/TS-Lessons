import {
  BoxComponent,
  Lesson08Component,
  ButtonComponent,
  InfoBoxComponent,
} from './styles';

function Lesson08() {
  //   const styleObject = {
  //     fontSize: '42px',
  //     color: 'red',
  //   };

  return (
    <Lesson08Component>
      <ButtonComponent mainButton={true}>ButtonComponent</ButtonComponent>
      <ButtonComponent mainButton={false}>ButtonComponent</ButtonComponent>
      {/* При отсутствии пропса булеан типа, автоматически приравнивается False */}
      <ButtonComponent>ButtonComponent</ButtonComponent>
      <BoxComponent>Test Style Component</BoxComponent>
      <InfoBoxComponent>Info</InfoBoxComponent>
      {/* InLine в аттрибут Style передаётся объект */}
      {/* <p style={{ fontSize: '24px', color: 'blue' }}>Test text 1</p> */}
      {/* Using StyleObject */}
      {/* <p style={styleObject}>Test text 2</p>
      <div style={styleObject}>Test text 3</div> */}
    </Lesson08Component>
  );
}

export default Lesson08;
