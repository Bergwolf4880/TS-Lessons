import { useState } from "react";
import "./styles.css"
import Counter from "components/Counter/Counter";
function Lesson07() {


  const [count, setCount] = useState<number>(0);


  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  }
  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
  }





  // Generic
  // дженерик указывается при создании ТУРЕ или Интерфейс после названия
  type CustomArrayType<T = string> = T[];

  const numberArray: CustomArrayType<number> = [2, 3];
  const stringArray: CustomArrayType<string> = ["2", "3"];

  type CustomArrayTypel<T = string> = [T, T];
  const arrayMix1: CustomArrayTypel = ['apple', '2'];
  const arrayMix2: CustomArrayTypel<number | string> = ['apple', 2];

  //создание type с использованием interface
  //without generic
  interface Fruits {
    name: string,
    weight: number
  }

  const fruits1: Fruits = {
    name: 'apple',
    weight: 200
  }

  //with generic

  interface FruitsGeneric<T> {
    name: string,
    weight: T
  }

  const fruits2: FruitsGeneric<number> = {
    name: 'apple',
    weight: 200
  }

  //ENUM

  enum Colours { Red, Black = 9, Green };

  let colour: Colours = Colours.Red;
  colour = 0;


  console.log(Colours);
  console.log(colour);

  enum WeathersCode {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (codeOfWeather: WeathersCode): string => {
    switch (codeOfWeather) {
      case WeathersCode.SQ:
        return "шквал";
      case WeathersCode.PO:
        return "пыльный вихрь";
      case WeathersCode.FC:
        return "торнадо";
      case WeathersCode.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WeathersCode.HZ:
        return "мгла (видимость менее 10 км)";
      case WeathersCode.FU:
        return "дым (видимость менее 10 км)";
      case WeathersCode.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WeathersCode.SS:
        return "песчаная буря (видимость менее 10 км) ";
    }
  };
  console.log(decode(WeathersCode.FC));


  return (
  <div>
    <Counter countValue={count}
      onMinusClick={onMinus}
      onPlusClick={onPlus}
    /></div>
  )
}

export default Lesson07;

