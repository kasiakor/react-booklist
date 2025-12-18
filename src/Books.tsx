import { useState } from "react";
import Pagination from "./Pagination";

const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    genre: "Software Development",
    pages: 352,
    publishedYear: 1999,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Software Development",
    pages: 464,
    publishedYear: 2008,
  },
  {
    id: 3,
    title: "Refactoring",
    author: "Martin Fowler",
    genre: "Software Development",
    pages: 448,
    publishedYear: 1999,
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Erich Gamma et al.",
    genre: "Software Engineering",
    pages: 395,
    publishedYear: 1994,
  },
  {
    id: 5,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    pages: 278,
    publishedYear: 2015,
  },
  {
    id: 6,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen et al.",
    genre: "Computer Science",
    pages: 1312,
    publishedYear: 2009,
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    pages: 328,
    publishedYear: 1949,
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian Fiction",
    pages: 288,
    publishedYear: 1932,
  },
  {
    id: 9,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian Fiction",
    pages: 249,
    publishedYear: 1953,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 310,
    publishedYear: 1937,
  },
  {
    id: 11,
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 423,
    publishedYear: 1954,
  },
  {
    id: 12,
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 352,
    publishedYear: 1954,
  },
  {
    id: 13,
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 416,
    publishedYear: 1955,
  },
  {
    id: 14,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    pages: 412,
    publishedYear: 1965,
  },
  {
    id: 15,
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "Science Fiction",
    pages: 255,
    publishedYear: 1951,
  },
  {
    id: 16,
    title: "Neuromancer",
    author: "William Gibson",
    genre: "Science Fiction",
    pages: 271,
    publishedYear: 1984,
  },
  {
    id: 17,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Literary Fiction",
    pages: 277,
    publishedYear: 1951,
  },
  {
    id: 18,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Literary Fiction",
    pages: 336,
    publishedYear: 1960,
  },
  {
    id: 19,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literary Fiction",
    pages: 180,
    publishedYear: 1925,
  },
  {
    id: 20,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Classic Literature",
    pages: 635,
    publishedYear: 1851,
  },
  {
    id: 21,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Classic Literature",
    pages: 1225,
    publishedYear: 1869,
  },
  {
    id: 22,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Classic Literature",
    pages: 671,
    publishedYear: 1866,
  },
  {
    id: 23,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
    pages: 208,
    publishedYear: 1988,
  },
  {
    id: 24,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    pages: 498,
    publishedYear: 2011,
  },
  {
    id: 25,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    pages: 352,
    publishedYear: 2018,
  },
  {
    id: 26,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Improvement",
    pages: 320,
    publishedYear: 2018,
  },
  {
    id: 27,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    pages: 499,
    publishedYear: 2011,
  },
  {
    id: 28,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    pages: 336,
    publishedYear: 2011,
  },
  {
    id: 29,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    pages: 304,
    publishedYear: 2016,
  },
  {
    id: 30,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic Fiction",
    pages: 287,
    publishedYear: 2006,
  },
];

const BOOKS_PER_PAGE = 5;

function Books() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);
  const startIdx = (page - 1) * BOOKS_PER_PAGE;
  const endIdx = startIdx + BOOKS_PER_PAGE;
  const paginatedBooks = books.slice(startIdx, endIdx);

  return (
    <div>
      <h2>Books List</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Pages</th>
            <th>Published Year</th>
          </tr>
        </thead>
        <tbody>
          {paginatedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.pages}</td>
              <td>{book.publishedYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        InitialPage={page}
        OnPageChange={setPage}
      />
    </div>
  );
}

export default Books;
