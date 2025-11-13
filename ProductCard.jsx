import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {

const {id}= useParams();

const [product, setProduct ]= useState({
        id: "",
        title: "", 
        description: "",
        price:"",
        images: [],
    });

useEffect(()=> {
    const fetchProduct= async ()=> {
        const res= await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
        )
        const result= await res.json();
        setProduct(result)
    }
    fetchProduct();
    },[])



  return (

    <> 
  
     <Card style={{ width: '30rem' }}>
       <Card.Img
        variant="top"
        src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
        alt={product.title}
      />
      <Card.Body>
        <Card.Title> {product.title}</Card.Title>
        <Card.Text> {product.description} </Card.Text>
        <Link>
        <Button variant="primary"> Add to Cart </Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard