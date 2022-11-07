import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name={"John"} lastName={"A"} age={"10"} />
      <Person name={"Hurry"} lastName={"B"} age={"20"} />
      <Person name={"Micky"} lastName={"C"} age={"30"} />
    </div>
  );
};

export default App;
