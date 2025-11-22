import Profile from "./Profile";

const App = () => {
   const person="Tamim";
  const size =38
  const age = 39
  return (
    <div>
     <div>
      <Profile age={age} size={size} person={person}></Profile>
     </div>
    </div>
  );
};

export default App;