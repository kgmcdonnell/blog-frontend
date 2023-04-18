import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Modal } from "./Modal";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Modal show={false}>
        <p>my boring modal</p>
      </Modal>
    </div>
  );
}

export default App;
