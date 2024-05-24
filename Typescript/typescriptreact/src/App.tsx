import Box from "./components/Box";

function App() {
  return (
    <>
      <h1>hello</h1>
      <Box
        heading={"kanika"}
        count={32}
        func1={() => {
          alert("Hiiiiiii");
        }}
      />
    </>
  );
}

export default App;
