"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Page() {
  const { data, error } = useSWR(`https://dummyjson.com/products`, fetcher);
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  return (
    <ul>
      {data.products.map((product) => {
        return <li key={product.id}>{product.category}</li>;
      })}
    </ul>
  );
}
