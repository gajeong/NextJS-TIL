import React from 'react'
import { notFound } from 'next/navigation'
import { getProduct, getProducts } from '@/service/products'

type Props = {
  params: {
    slug: string
  }
}

export default async function ProductPage({
  params: { slug },
}: Props) {
  const product = await getProduct(slug)
  if (!product) {
    notFound()
  }
  return <div>{product.name}제품 설명 페이지</div>
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.id,
  }))
}
