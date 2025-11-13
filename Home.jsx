import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5 fw-bold" style={{ color: "#901649bc" }}>
        🛍️ Our Featured Products
      </h1>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Img
                  variant="top"
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/200"
                  }
                  alt={product.title}
                  style={{
                    objectFit: "cover",
                    height: "220px",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark" style={{ fontSize: "1.05rem" }}>
                    {product.title.length > 40
                      ? product.title.slice(0, 40) + "..."
                      : product.title}
                  </Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{
                      fontSize: "0.9rem",
                      minHeight: "50px",
                      overflow: "hidden",
                    }}
                  >
                    {product.description.length > 70
                      ? product.description.slice(0, 70) + "..."
                      : product.description}
                  </Card.Text>
                </Card.Body>
              </Link>

              <Card.Footer className="bg-white border-0 d-flex justify-content-between px-3 pb-3">
                <Button variant="outline-primary" size="sm">
                  Add to Cart
                </Button>
                <Link to={`/products/${product.id}`}>
                  <Button variant="primary" size="sm">
                    View More
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
