import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import Weather from "./components/Weather";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";

export default function App() {
  const [app, setApp] = useState(3);
  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Button color="inherit" onClick={() => setApp(1)}>
            Counter
          </Button>
          <Button color="inherit" onClick={() => setApp(2)}>
            Converter
          </Button>
          <Button color="inherit" onClick={() => setApp(3)}>
            Weather
          </Button>
        </Toolbar>
      </AppBar>
      {app === 1 ? <Counter /> : app === 2 ? <Converter /> : <Weather />}
    </>
  );
}
