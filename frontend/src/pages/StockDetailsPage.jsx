import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const StockDetailsPage = () => {
  const { symbol } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/stocks/${symbol}`).then((res) =>
      setData(res.data["Global Quote"])
    );
  }, [symbol]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{symbol}</h2>
      <p>Price: {data["05. price"]}</p>
      <p>High: {data["03. high"]}</p>
      <p>Low: {data["04. low"]}</p>
    </div>
  );
};

export default StockDetailsPage;