import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setCollections(data.collectionProducts))
      .catch(error => console.error('Error fetching collection products:', error));
  }, []);

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <section className="container custom-container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 mb-2">Nike Collections</h1>
          <p className="lead text-secondary">
            Browse exclusive Nike collections and limited edition releases. Find your next favorite pair.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {collections.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <div className="card h-100 border-0 shadow rounded-4 bg-white">
                <div
                  style={{
                    width: '100%',
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8f9fa',
                    borderRadius: '16px 16px 0 0',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '16px 16px 0 0'
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text text-secondary mb-2">{item.desc}</p>
                  <div className="fw-semibold fs-5 text-black mb-2">{item.price}</div>
                  <button className="btn btn-outline-primary btn-sm rounded-pill mt-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;