// npm i @emotion/styled @emotion/react
// npm i react-router-dom@5
// npm i react-icons
// npm install react-slick
// npm install slick-carousel
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Vimeo from "./pages/Vimeo";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/video" component={Vimeo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
