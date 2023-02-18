import { useState} from "react";

import Header from "./compontents/Header";
import WelcomeWorld from "./compontents/WelcomeWorld";
import GameCatalog from "./compontents/GameCatalog/GameCatalog";
import CreateGame from "./compontents/CreateGame";
import Login from "./compontents/Login";
import Register from "./compontents/Register";
import ErrorPage from "./compontents/ErrorPage";

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />
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
        {routes[page] || <ErrorPage>Some additional info</ErrorPage>}
      </main>

    </div>

  );
}

export default App;
