import { getProducts } from '@/service/products'
import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
