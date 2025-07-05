import React from 'react';
import Navbar from './Navbar';

const collections = [
  {
    name: 'Nike Dunk Low',
    img: 'https://images.unsplash.com/photo-1717438030097-7e9e8123ae59?auto=format&fit=crop&w=768&q=80',
    desc: 'Classic style with modern comfort. The Nike Dunk Low is a timeless icon for every sneakerhead.',
    price: '$14,500',
  },
  {
    name: 'Nike Zoom Vomero 5',
    img: 'https://images.unsplash.com/photo-1717438029977-2e9e8123ae59?auto=format&fit=crop&w=768&q=80',
    desc: 'Experience plush cushioning and bold colorways with the Nike Zoom Vomero 5.',
    price: '$13,000',
  },
  {
    name: 'Nike Air Zoom Pegasus 40',
    img: 'https://images.unsplash.com/photo-1717438030123-3e9e8123ae59?auto=format&fit=crop&w=768&q=80',
    desc: 'The Pegasus 40 delivers responsive support for runners and everyday wear.',
    price: '$15,000',
  },
  {
    name: 'Jordan 1 Low G',
    img: 'https://images.unsplash.com/photo-1717438030155-4e9e8123ae59?auto=format&fit=crop&w=768&q=80',
    desc: 'A golf-inspired take on the classic Jordan 1 Low. Sleek, versatile, and ready for any occasion.',
    price: '$16,000',
  },
  {
    name: 'Nike Air Zoom Structure 25',
    img: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-3v0n1b6Qy4KkKkQw9vQw9vQw/user-3v0n1b6Qy4KkKkQw9vQw9vQw/img-3v0n1b6Qy4KkKkQw9vQw9vQw_5.png',
    desc: 'Engineered for stability and comfort, perfect for daily runs.',
    price: '$15,500',
  },
  {
    name: 'Nike Air Max Plus',
    img: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-3v0n1b6Qy4KkKkQw9vQw9vQw/user-3v0n1b6Qy4KkKkQw9vQw9vQw_3.png',
    desc: 'Bold design and legendary Air cushioning for all-day comfort.',
    price: '$17,200',
  },
];

const Collections = () => (
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
        {collections.map((item, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
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
                <div className="fw-semibold fs-5 text-primary mb-2">{item.price}</div>
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

export default Collections;