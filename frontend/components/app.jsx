import React from "react";
import ScrollToTop from './scrollToTop';
import HomePage from "./HomePage";

class App extends React.Component {

    render() {
        return (
            <div>
                Hello World
                {/* <ScrollToTop>
                    <Route exact path='/' component={HomePage} />
                </ScrollToTop> */}
            </div>
        );
    }
}

export default App