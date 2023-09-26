import React from "react"
import { useParams } from "react-router-dom"
const Product = ({ value }) => {
  const params = useParams()
  return (
    <div>
      Product{value} {params.id}
    </div>
  )
}

export default Product
