import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Pokedex from "./routes/pokedex";
import Pokemon from "./routes/pokemon";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="pokedex" element={<Pokedex />}>
          <Route path=":dexId" element={<Pokemon />} />
        </Route>
        <Route 
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Nope nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);