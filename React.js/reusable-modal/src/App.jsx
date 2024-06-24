import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Modal Popup</h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        style={{ backgroundColor: "brown", color: "whitereus" }}
      >
        Click here to see the effect
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga
          libero exercitationem, ducimus laudantium fugit molestias, in eveniet
          harum pariatur natus omnis iure at nesciunt repellendus! Quam ducimus
          fugiat aliquam?
        </p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga
          libero exercitationem, ducimus laudantium fugit molestias, in eveniet
          harum pariatur natus omnis iure at nesciunt repellendus! Quam ducimus
          fugiat aliquam?
        </p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga
          libero exercitationem, ducimus laudantium fugit molestias, in eveniet
          harum pariatur natus omnis iure at nesciunt repellendus! Quam ducimus
          fugiat aliquam?
        </p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga
          libero exercitationem, ducimus laudantium fugit molestias, in eveniet
          harum pariatur natus omnis iure at nesciunt repellendus! Quam ducimus
          fugiat aliquam?
        </p>
      </div>
    </div>
  );
}

export default App;
