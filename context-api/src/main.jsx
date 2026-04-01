import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { productData } from '../public/data.js'
import App from './App.jsx'
import { ProductsItem } from './context/ProductContext.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsItem value={productData}>
  <App />

    </ProductsItem>
  
  </StrictMode>,
)
