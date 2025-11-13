import React,  {useState} from 'react'

const FruitList = () => {
// const fruitList = ["Orange", "Mango", "Apple", "Strawberry"];

const [fruitList, setFruitList]= useState([
    { id: 1, name: "Orange", color: "orange" },
    { id: 2, name: "Mango", color: "yellow" },
    { id: 3, name: "Apple", color: "green" },
    { id: 4, name: "Strawberry", color: "red" },
  ]);

const addFruit= (fruit) => {
    // add a fruit to our fruitlist 
    console.log(fruit)
    //fruitlist contains all of the old items, as well as the new fruit 
    setFruitList([...fruitList,fruit])
}
// fruitList contains all of the old items, as well as the new fruit
// ...  (spread operator) takes our original state array and makes it 
// so we can access each individual item in the list as opposed 
// to the array of items in the list, 
// newItem - add the new item to the end of the array
//replaces the old array with the new array 
// that consists of all the old items (...fruitList),
//  followed by the new item (fruit)
// setStateFunction([...currentStateArray, newItem])

const handleRemoveItem= (id) => {
    //function that will help us remove things based on certain criteria 
    //.filter best way to remove things in React 
    //remove item from fruitList who's id matches the id parameter
    // filter adds all items to the result list whose ids
    // do NOT requal the id parameter 
    const result = fruitList.filter((item)=> item.id !== id);
    setFruitList(result)
}

  return (
    <> 
    <h1>Fruit List!</h1>
    <ul> 
        {fruitList.map((item)=> (
        <li key={item.id}>
            Fruit Name: {item.name} --Color: {item.color}
        <button onClick={()=>handleRemoveItem(item.id)}>X </button>
        </li>
    ))}
    </ul>
    <button onClick={() => addFruit({id: 5, name: "Pineapple", color: "yellow"})}> Add Fruit </button>
    </>

  )
}

/*
const FruitList = () => {
  // const fruitList = ["Orange", "Mango", "Apple", "Strawberry"];

  const [fruitList, setFruitList] = useState([
    { name: "Orange", color: "orange" },
    { name: "Mango", color: "yellow" },
    { name: "Apple", color: "green" },
    { name: "Strawberry", color: "red" },
  ]);

  const addFruit = (fruit) => {
    // add a fruit to our fruitList
    console.log(fruit);
    // setFruitList(fruit)
    // setFruitList(fruitList.push(fruit))
    // fruitList.push(fruit)
    // fruitList contains all of the old items, as well as the new fruit
    // ...  (spread operator) takes our original state array and makes it so we can access each individual item in the list as opposed to the array of items in the list
    // , newItem - add the new item to the end of the array
    // replaces the old array with the new array that consists of all the old items (...fruitList), followed by the new item (fruit)
    // setStateFunction([...currentStateArray, newItem])

    setFruitList([...fruitList, fruit]);
  };

  return (
    <>
      <h1>Fruit List!</h1>
      <ul>
        {fruitList.map((item) => (
          <li key={item.name}>Fruit Name: {item.name} - Color: {item.color}</li>
        ))}
      </ul>
      <button onClick={() => addFruit({ name: "Pineapple", color: "yellow" })}>
        Add Fruit!
      </button>
    </>
  );
};
*/

export default FruitList