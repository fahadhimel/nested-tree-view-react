import logo from './logo.svg';
import './App.css';
import TreeView from './treeView';

function App() {
 const treeData = [
  {
    id: 1,
    name: "Менюшка",
    children: [
      {
        id: 2,
        name: "другая Менюшка",
        children: [
          { id: 3, name: "ещё одна Менюшка" }
        ]
      },
      {
        id: 4,
        name: "другая",
        children: [
          { id: 5, name: "Менюшка" },
          {
            id: 6,
            name: "Менюшка",
            children: [
              { id: 7, name: "Менюшка" },
              { id: 8, name: "Менюшка" }
            ]
          },
          { id: 9, name: "Менюшка" },
          { id: 10, name: "Менюшка" }
        ]
      },
      { id: 11, name: "Менюшка2", children: [{ id: 12, name: "Менюшка" }] },
      {
        id: 4,
        name: "другая",
        children: [
          { id: 5, name: "Менюшка" },
          {
            id: 6,
            name: "Менюшка",
            children: [
              { id: 7, name: "Менюшка" },
              { id: 8, name: "Менюшка" }
            ]
          },
          { id: 9, name: "Менюшка" },
          { id: 10, name: "Менюшка" }
        ]
      },
    ]
  }
];


  return (
    <div className="App">
      <h1>Nested Tree View</h1>
      <TreeView data={treeData} />
    </div>
  );
}

export default App;
