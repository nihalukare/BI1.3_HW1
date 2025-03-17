import Books from "./components/Books";
import BookByTitle from "./components/BookByTitle";
import BooksByAuthor from "./components/BooksByAuthor";
import AddBookData from "./components/AddBookData";

function App() {
  return (
    <>
      <AddBookData />
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BooksByAuthor author="Harper Lee" />
    </>
  );
}

export default App;
