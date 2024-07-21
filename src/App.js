import React, {Fragment} from "react";
import "./App.css";
import RootRoutes from "./RootRoutes";
import Header from "./layout/Header";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
    return (
        <Fragment>
            <Header />
            <main className="container">
                <RootRoutes />
            </main>
        </Fragment>
    );
}

export default App;
