import * as React from "react"
import * as ReactDOM from "react-dom"
import SearchShowBar from "./components/SearchBookBar"
import BookSearchResults from "./components/BookSearchResults"

const App = () => {
  return (<SearchShowBar />);
};

ReactDOM.render(<App/>, document.getElementById("root"))