

function Lesson06() {
    //1.String type
    let name: string = "Tom";
    const msg: string = `Hello ${name}`

    name = "2";
    name = 1 + "2";

    console.log(name);

    //2.Number type
    let myNumber: number = 111;

    myNumber = 24.5;



    //3.Boolean type

    let isAlive: boolean = true;
    isAlive = false;

    //4.Null&Undefined type 
    // принимает только згачение NULL
    let emptyVar: null = null;

    //Принимает только значение UNDEFINED
    let emptyVar1: undefined = undefined;

    //5.Array
    // если массив типизирован то можно добавлять данные только таких же типов
    const colours: string[] = ["red", "green", "black"];

    // colours.push(2); Error
    colours[0] = "yellow";

    console.log(colours);
    // Подразумавает автоматическое определение типа
    const numsArray = [1, 3, "4, 6, 7"];
    // numsArray.push("red") Error

    console.log(numsArray);

    //6.TUPEL(кортеж) array type
    let fruits: [string, number, string] = ["Apple", 5, "Banana"];
    // Может содержать только декларированное кол-во элементов
    // fruits[3] = "orange"; - Error
    let fruits1 = ["Apple", 5, "Banana"];

    //7.VOID 
    // функция ничего не возвращает 
    function sayHello(): void {
        console.log("Hello!");
    }

    // Типизация функции
    const sayByeWithName = (age: number, fName: string = "Tom"): void => {
        console.log(`Bye ${fName} ${age}`);
    }
    sayHello();
    sayByeWithName(25);


    // String return function
    const returnName = (fName: string, age: number): string => {
        return (`Hi ${fName} ${age}`);

    }

    // Tupel array return function
    const returnName1 = (): [string, number] => {
        const userData: [string, number] = ["Bob", 39];
        return userData;

    }

    //8. ANY (любой тип )

    let city: any = 23;
    city = "London";

    //9. Union & Insertion types

    type StringOrNumber = string | number;
    let value: StringOrNumber = "Hi";
    value = 2;

    //10. Interfaces 

    interface User {
        name: string;
        age: number;
    }

    let person: User = { name: "Bill", age: 50 };

    console.log(person);


    interface User {
        location?: string
    }

    let person1: User = { name: "Bob", age: 40, location: "Berlin" }

    interface Admin extends User {
        isAdmin: boolean
    }

    const adminData: Admin = {
        name: "John",
        age: 43,
        location: "Munich",
        isAdmin: true
    }
    console.log(adminData);

    const usersData: User[] = [
        { name: "Bob", age: 40, location: "Berlin" },
        { name: "Bob", age: 40, location: "Berlin" },
        { name: "Bob", age: 40, location: "Berlin" }

    ]

    //11. Type aliases

    type Animal = {
        name: string,
        weight?: number | string // ? отвечает за необязательный парамерт и 
        // " | " объединяет возможные типы данных которые могут придти
    };

    type NewAnimal = Animal & { country: string }

    const newAnimal = { name: "Zebra", weight: 500, country: "Africa" };


    function getAnimal(point: Animal): Animal {
        ///LOGIC
        return {
            name: "Lion",
        }
    }




    return <div>Lesson06 - {name}</div>
}

export default Lesson06;