import { useEffect, useState } from "react";
function useCurrencyinfo(currency) {
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/
currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res))
      console.log(data);
  }, [currency]);
  console.log(data);
  returndata
}
export default useCurrencyinfo;