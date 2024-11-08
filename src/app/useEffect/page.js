// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetching-data-on-the-client

// nu renderer vi for clienten
'use client'

import { useState, useEffect } from 'react'

const Page = () => {
  // definerer et state variabel som vi kalder for products
  const [products, setProducts] = useState(undefined)

  useEffect(() => {
    // Async function to fetch products
    async function fetchProducts () {
      // Fetch all products from the server
      let response = await fetch('https://dummyjson.com/products')
      // Convert response data to JSON
      let data = await response.json()

      setProducts(data)
    }
    // Call the fetch function
    fetchProducts()
  }, [])

  // Hvis produkt ikke er sande eller er tom, så returner vi en loading - Det er ved at sige at der er noget på vej
  // vi laver en betingelse
  // Jeg må bruge if her fordi jeg ikke er inde i et return. Man kan også bruge logical &&
  // If 'products' is undefined, show a loading message
  if (!products) {
    return <div>Loading!!!</div>
  }
  // Hvis de ellers er sande returnerer den dette

  // Once 'products' is available, render the list
  return (
    <ul>
      {/* det dataset vi får tilbage sætter vi ind i en variabel son hedder products */}
      {products.products.map(product => {
        return <li key={product.id}>{product.category}</li>
      })}
    </ul>
  )
}

export default Page
