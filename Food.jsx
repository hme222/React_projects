// our React component
// - create a .jsx file 
// -inside the .jsx file, create a function
// with a capital letter and return some JSX
// -finally, export the component and then we can
//  utilize throughout the app

const Food= () => {
    const food="Quesadillas"
    return (
        <>
            <h2> I love {food}! </h2>
            <p> {food} are delicious for any occasion, full of cheesy goodness. </p>
            <p> Literally, give me {food} rn.</p>
        </>
    )
}

export default Food; // module.exports is similar in backend 