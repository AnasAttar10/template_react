import Nav from './component/nav/nav';
import { BrowserRouter , Route } from "react-router-dom";
import Index from './component/index/index';
import Contact from './component/contact/contact';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Index}/>
          <Route path="/contact" component={Contact}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
