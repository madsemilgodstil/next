"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Page() {
  const { data, error } = useSWR(`https://dummyjson.com/products`, fetcher);
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  console.log(data.products);

  return data.products[0].title;
}
