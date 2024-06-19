import "./App.css";

import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

const App = () => {
  const [explorerdata, setExplorerdata] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerdata, folderId, item, isFolder);

    setExplorerdata(finalTree);
  };

  return (
    <div>
      <Folder explorer={explorerdata} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default App;
