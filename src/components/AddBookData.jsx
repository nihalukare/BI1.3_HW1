import { useState } from "react";

const AddBookData = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setFormData((formData) => ({
      ...formData,
      [name]:
        name === "publishedYear"
          ? parseInt(value)
          : name === "rating"
          ? parseFloat(value)
          : value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("formData:", formData);
    try {
      const response = await fetch(
        "https://be-4-assignment1-git-main-nihals-projects-b86ee0fe.vercel.app/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      //   console.log("response", response);

      if (!response.ok) {
        throw new Error("Failed to add book.");
      }
      const data = await response.json();
      console.log("Added book:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="titleInput">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            id="titleInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="authorInput">Author:</label>
          <br />
          <input
            type="text"
            name="author"
            id="authorInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="publishedYearInput">Published Year:</label>
          <br />
          <input
            type="text"
            name="publishedYear"
            id="publishedYearInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="genreInput">Genre:</label>
          <br />
          <input
            type="text"
            name="genre"
            id="genreInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="languageInput">Language:</label>
          <br />
          <input
            type="text"
            name="language"
            id="languageInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="countryInput">Country:</label>
          <br />
          <input
            type="text"
            name="country"
            id="countryInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="ratingInput">Rating:</label>
          <br />
          <input
            type="text"
            name="rating"
            id="ratingInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="summaryInput">Summary:</label>
          <br />
          <input
            type="text"
            name="summary"
            id="summaryInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="coverImageUrlInput">Cover Image Url</label>
          <br />
          <input
            type="text"
            name="coverImageUrl"
            id="coverImageUrlInput"
            onChange={inputHandler}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddBookData;
