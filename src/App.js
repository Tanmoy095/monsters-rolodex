import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/searchbox/SearchBox.component";
function App() {
  //set state for search field
  const [searchField, setSearchField] = useState("");
  //state for monsters
  const [monsters, setMonsters] = useState([]);
  //filtermonster
  const [filterMonsters, setfilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setfilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <SearchBox
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filterMonsters}></CardList>
      {/* for learning purpose */}
    </div>
  );
}

export default App;

// class App extends React.Component {
//   // Constructor
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // ComponentDidMount is used to
//   // execute the code
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;

//     const { onSearchChange } = this;

//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeHolder={"Search Monsters"}
//         />
//         <CardList monsters={filterMonster}></CardList>
//         {/* for learning purpose */}
//       </div>
//     );
//   }
// }

// export default App;
