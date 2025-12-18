import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Books from "./Books";
import Register from "./Register";

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{" "}
        <Link to="/books">Books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
