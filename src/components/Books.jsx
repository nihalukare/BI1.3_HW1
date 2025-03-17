import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://be-4-assignment1-git-main-nihals-projects-b86ee0fe.vercel.app/books"
  );

  // console.log(data);

  const deleteHandler = async (bookId) => {
    try {
      const response = await fetch(
        `https://be-4-assignment1-git-main-nihals-projects-b86ee0fe.vercel.app/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete book.");
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data ? (
        <div>
          <h2>All Books</h2>
          <ul>
            {data.booksData.map((book) => (
              <li key={book._id}>
                {book.title}{" "}
                <button onClick={() => deleteHandler(book._id)}>Delete</button>{" "}
              </li>
            ))}
          </ul>
          <p>{successMessage}</p>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
    </>
  );
};
export default Books;
