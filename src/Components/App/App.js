import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import {
  Menu,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen4a,
  Screen4b,
  Screen4c,
  Screen4d,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
  Screen17,
  Screen18,
  Screen19,
  Screen20,
  Screen21,
  Screen22,
  Screen23,
  Screen24
} from "Pages";

function App() {
  return (
    <Router>
      <SwipeableRoutes>
        <Route path="/" component={Menu} />
        <Route path="/1" component={Screen1} />
        <Route path="/2" component={Screen2} />
        <Route path="/3" component={Screen3} />
        <Route path="/4" component={Screen4} />
        <Route path="/5" component={Screen5} />
        <Route path="/6" component={Screen6} />
        <Route path="/7" component={Screen7} />
        <Route path="/8" component={Screen8} />
        <Route path="/9" component={Screen9} />
        <Route path="/10" component={Screen10} />
        <Route path="/11" component={Screen11} />
        <Route path="/12" component={Screen12} />
        <Route path="/13" component={Screen13} />
        <Route path="/14" component={Screen14} />
        <Route path="/15" component={Screen15} />
        <Route path="/16" component={Screen16} />
        <Route path="/17" component={Screen17} />
        <Route path="/18" component={Screen18} />
        <Route path="/about" component={Screen24} />
      </SwipeableRoutes>
    </Router>
  );
}

export default App;
