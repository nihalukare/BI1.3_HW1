import useFetch from "../useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-git-main-nihals-projects-b86ee0fe.vercel.app/books/author/${author}`
  );
  // console.log(data);
  return (
    <>
      {data ? (
        <div>
          <h2>Books by {author}</h2>
          <ul>
            {data.booksByAuthor.map((book) => (
              <li key={book._id}>{book.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
    </>
  );
};

export default BooksByAuthor;
