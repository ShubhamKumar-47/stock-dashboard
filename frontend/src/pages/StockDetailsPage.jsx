import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const StockDetailsPage = () => {
  const { symbol } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    API.get(`/stocks/${symbol}`).then((res) => {
      setData(res.data)
    console.log(res.data);
    }
    );
  }, [symbol]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{symbol}</h2>
      <p>Price: {data.close}</p>
      <p>High: {data.high}</p>
      <p>Low: {data.low}</p>
    </div>
  );
};

export default StockDetailsPage;