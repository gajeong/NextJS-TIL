import React from 'react'
import { notFound } from 'next/navigation'
import { getProduct, getProducts } from '@/service/products'
type Props = {
  params: {
    slug: string
  }
}
export default function Pants({ params: { slug } }: Props) {
  const product = getProduct(slug)
  if (!product) {
    notFound()
  }
  return <div>{product}제품 설명 페이지</div>
}

export function generateStaticParams() {
  const products = getProducts()
  return products.map((product) => ({
    slug: product,
  }))
}
