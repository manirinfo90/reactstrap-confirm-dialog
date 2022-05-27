import confirm from "./lib/components";

function App() {
  const openConfirm = () => {
    confirm({
      title: <>Confirmation!</>,
      message: (
        <>
          Synonyms not selected. Want to proceed creating mappings without
          copying synonyms?
        </>
      ),
      confirmText: "Yes",
      cancelText: "No",
      confirmColor: "primary",
      cancelColor: "link text-danger",
    }).then((res) => {});
  };

  return (
    <div className="App">
      <button onClick={openConfirm}>Open Confirm</button>
    </div>
  );
}

export default App;
