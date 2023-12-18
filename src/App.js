import "./App.css";
import SprintBarChart from "./Components/SprintBarChart";
import CardData from "./Components/CardData";
import SprintTable from "./Components/SprintTable";
import StreamedAreaChart from "./Components/StreamedAreaChart";

function App() {
  return (
    <div className="App">
      <StreamedAreaChart></StreamedAreaChart>
      <SprintBarChart></SprintBarChart>
      <SprintTable></SprintTable>
      <CardData></CardData>
    </div>
  );
}

export default App;
