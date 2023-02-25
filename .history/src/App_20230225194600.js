import { useState} from "react";


import Header from "./compontents/components";
import WelcomeWorld from "./compontents/WelcomeWorld";
// import Login from "./compontents/Login";
// import Register from "./compontents/Register";
// import EditGame from "./compontents/EditGame";
// import GameDetails from "./compontents/GameDetails";
import GameCatalog from "./compontents/GameCatalog";
import CreateGame from "./compontents/CreateGame";

import
  
  
function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
  }

  const navigationChangeHandler = (path) => {
    
    setPage(path);
    
  };

  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {routes[page] || <h2>No Page Found!</h2>}
      </main>

      {/* <Login />
      <Register /> */}
      <CreateGame />
      {/* <EditGame /> */}
      {/* <GameDetails /> */}
      <GameCatalog />

    </div>

  );
}

export default App;
