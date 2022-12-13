import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Loader from "./components/Loader";
import Viewer from "./components/Viewer";
import Start from "./pages/Start";
import theme from "./theme/Theme";
import "./App.css";


const Page = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            {/* <Viewer /> */}
            <Start/>
         </div>
      </ThemeProvider>
   );
}

const App = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Page />
      </Suspense>
   );
}
export default App;
