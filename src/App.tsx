import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function Register() {
  return <h2>Register Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
