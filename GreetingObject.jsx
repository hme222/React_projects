

// destructuring
// instead of using props directlty, we put the keys that we want to access inside {}
// this gives us easier access to our data
// {person} accesses the person={} inside of our greeting component
const GreetingObject = ({person}) => {
  return (
    <> <div>Hello {person.name}! ! You are {person.age} years old.  </div>
    {person.isGraduated?<p> Congrats on Graduating !</p>: <p> Go back to school.. </p>}
    </>
  )
}

// const GreetingObject = (props) => {
//   return (
    
//     <> <div>Hello {props.person.name}! ! You are {props.person.age} years old.  </div>
//     {props.person.isGraduated?<p> Congrats on Graduating !</p>: <p> Go back to school.. </p>}
//     </>
//   )
// }

export default GreetingObject