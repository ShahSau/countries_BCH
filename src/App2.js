// import "./index.css";
// import axios from "axios";
// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     axios.get("https://restcountries.com/v3.1/all").then((res) => {
//       this.setState({ data: res.data });
//       console.log(this.state.data);
//     });
//   }

//   render() {
//     return (
//       <div className="App-header">
//         <h1>Countries of the world</h1>
//         <div className="card_wrapper">
//           {this.state.data.map((item) => (
//             <div className="card" key={item.name.common}>
//               <img src={item.flags.svg} alt="flag" />
//               <h2>{item.name.common}</h2>
//               {/* inside item.name we may have the object nativeName with inside an
//               object (here langObjs)
//               {item.name.nativeName
//                 ? Object.entries(item.name.nativeName).map(
//                     ([code, langsObj]) => {
//                       return <h3 key={code}>{langsObj.common}</h3>;
//                     }
//                   )
//                 : ""} */}
//               <p className="lang_title">currency:</p>
//               {item.currencies
//                 ? Object.entries(item.currencies).map(([code, cur]) => {
//                     return <li key={code}>{cur.name}</li>;
//                   })
//                 : ""}
//               <p className="lang_title"> Official languages: </p>
//               {item.languages
//                 ? Object.entries(item.languages).map(([code, lang]) => {
//                     return <li key={code}>{lang}</li>;
//                   })
//                 : "unknown"}
//               <p>Capital: {item.capital}</p>
//               <p>Population: {item.population}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
