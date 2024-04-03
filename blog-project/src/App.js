import { Container } from "react-bootstrap";
import "./App.css";
import MainHeader from "./components/MainHeader";
import BlogList from "./components/BlogList";

function App() {
  return (
    <Container>
      <div>
        <MainHeader />
      </div>

      <div>
        <BlogList />
      </div>
    </Container>
  );
}

export default App;
