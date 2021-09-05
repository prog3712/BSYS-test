import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import {
  allocatedColumnsConfig,
  purchasesColumnsConfig,
  salesColumnsConfig,
} from "./config";

import Header from "./components/Header";
import Button from "./components/Button";
import Table from "./components/Table";

import "./App.css";

function App() {
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [allocated, setAllocated] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3000/v1/sales");
      setSales(result.data);
    })();
    (async () => {
      const result = await axios("http://localhost:3000/v1/purchases");
      setPurchases(result.data);
    })();
  }, []);

  const onClickAllocateButton = async () => {
    setAllocated([]);
    const result = await axios("http://localhost:3000/v1/supply/allocate");
    setAllocated(result.data);
  };

  const columnsSales = useMemo(() => salesColumnsConfig, []);

  const columnsPurchases = useMemo(() => purchasesColumnsConfig, []);

  const columnsAllocated = useMemo(() => allocatedColumnsConfig, []);

  return (
    <div className="App">
      <Header text="BSYS - Test" />

      <div className="tables">
        <div className="tableWrapper">
          <Table columns={columnsSales} data={sales} />
        </div>
        <div className="tableWrapper">
          <Table columns={columnsPurchases} data={purchases} />
        </div>
      </div>

      <div className="allocateDiv">
        <Button label="Allocate" onClick={onClickAllocateButton} testId="trigger-allocate" />
        <div className="tableWrapper">
          <Table columns={columnsAllocated} data={allocated} />
        </div>
      </div>
    </div>
  );
}

export default App;
