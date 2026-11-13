import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/Todo/TodoList";
import Weather from "./components/Weather/Weather";
import StarWars from "./components/StarWars/StarWars";

function App() {
  const [currentPage, setCurrentPage] = React.useState("todo");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
        {currentPage === "todo" && <TodoList />}
        {currentPage === "weather" && <Weather />}
        {currentPage === "star-wars" && <StarWars />}
      </BrowserRouter>
    </div>
  );
}

export default App;
