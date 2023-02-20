import { useState} from "react";

import Header from "./compontents/Header";
import WelcomeWorld from "./compontents/WelcomeWorld";
import GameCatalog from "./compontents/GameCatalog/GameCatalog";
import CreateGame from "./compontents/CreateGame";
import Login from "./compontents/Login";
import Register from "./compontents/Register";
import ErrorPage from "./compontents/ErrorPage";
import GameDetails from "./compontents/GameDetails";

function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'create-game': <CreateGame />,
      'login': <Login />,
      'register': <Register />,
      'details': <GameDetails id={argument} />,
    };

    return routes[rootPath];
  }

  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {router[page] || <ErrorPage>Some additional info</ErrorPage>}
      </main>

    </div>

  );
}

export default App;
