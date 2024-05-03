import React, { useState } from 'react';
import "./styles/Swifties.css";

function Swifties() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Taylor Swift ALL TOO WELL Quote Phone Tough Cases',
      price: 399,
      rating: 5,
      image: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded" alt="Taylor Swift ALL TOO WELL Quote Phone Case Tough Cases Taylor Swift Fan Gift Ideas Aesthetic Phone Cases iPhone 12, Samsung, More image 1" data-carousel-first-image="" data-perf-group="main-product-image" src="https://i.etsystatic.com/27017610/r/il/089561/3377151396/il_794xN.3377151396_mwu0.jpg" srcset="https://i.etsystatic.com/27017610/r/il/089561/3377151396/il_794xN.3377151396_mwu0.jpg 1x, https://i.etsystatic.com/27017610/r/il/089561/3377151396/il_1588xN.3377151396_mwu0.jpg 2x" fetchpriority="high" data-original-image-width="2290" data-src-zoom-image="https://i.etsystatic.com/27017610/r/il/089561/3377151396/il_fullxfull.3377151396_mwu0.jpg" data-index="0" height="285"',
      hoverImage: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded'
    },
    {
      id: 2,
      name: 'Taylor Swift iPhone Case, Eras Tour',
      price: 399,
      rating: 4,
      image: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded',
      hoverImage: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded'
    },
    {
      id: 3,
      name: 'Chairman Of The Tortured Poets Department - Tough Case',
      price: 499,
      rating: 4,
      image: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded',
      hoverImage: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded'
    },
    {
      id: 4,
      name: 'Sandstone Camo Glass Case',
      price: 499,
      rating: 3,
      image: 'wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer40_8745f978-8824-45f3-9858-b5fba24dcf85.jpg?v=1681385437&width=800'
    },
    {
      id: 5,
      name: 'Apple Camo Glass Case',
      price: 599,
      rating: 4,
      image: 'https://coveritup.com/cdn/shop/products/Layer37_faccfab8-4abe-494f-b41d-bce7a78b8767.jpg?v=1680939474&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer56_c22d594b-4171-469e-982a-4cf043419b41.jpg?v=1680939474&width=800'
    },
    {
      id: 6,
      name: 'Berry Camo Glass Case',
      price: 599,
      rating: 5,
      image: 'https://coveritup.com/cdn/shop/products/Layer42_edf735ae-7da2-4c37-b257-1612db11fa36.jpg?v=1680939940&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer38_aa45d79c-ae8c-4efe-9ebc-03e2e46a43a8.jpg?v=1680939940&width=800'
    },
    {
      id: 7,
      name: 'Blueberry Camo Glass Case',
      price: 499,
      rating: 3,
      image: 'https://coveritup.com/cdn/shop/products/Layer78_83be2d54-b639-4c40-aea6-169eb935b284.jpg?v=1681209812&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer76_520d5247-0a4f-412f-93ec-c99522d19d50.jpg?v=1681209812&width=800'
    },
    {
      id: 8,
      name: 'Bubblegum Camo Glass Case',
      price: 399,
      rating: 4,
      image: 'https://coveritup.com/cdn/shop/products/Layer105_6c50346a-d046-4423-93e4-94a9278c7de5.jpg?v=1681213640&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer133_12962a68-de2e-4ca4-b3bc-a54711dca587.jpg?v=1681213640&width=800'
    },
    {
      id: 9,
      name: 'Urban Camo Glass Case',
      price: 599,
      rating: 5,
      image: 'https://coveritup.com/cdn/shop/products/Layer67_fe8bbf13-b642-4a1f-bd80-7f01eac25d85.jpg?v=1681379775&width=800',
      hoverImage: 'https://coveritup.com/cdn/shop/products/Layer67_b74c5f15-3816-42ac-b60f-7b0da921474d.jpg?v=1681379775&width=800'
    }
  ]);

  const [sortType, setSortType] = useState('');

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'priceAsc') {
      return a.price - b.price;
    } else if (sortType === 'priceDesc') {
      return b.price - a.price;
    } else if (sortType === 'ratingDesc') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="img-main">
      <img className="img-m" src="https://i.pinimg.com/564x/c5/fc/3f/c5fc3fd530296d841fdf85cf78247036.jpg" />
      <section id="product1" className="section-p1">
        <h1 className="img-h1"><b>Choose Your Own Cover</b></h1>
        <div className="sorting">
        <label htmlFor="sort" className="sort-by">Sort By: </label>
        <select id="sort" onChange={handleSortChange} className="select-large">
            <option value="">Select</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="ratingDesc">Rating: High to Low</option>
          </select>
        </div>
        <div className="pro-container">
          {sortedProducts.map(product => (
            <div key={product.id} className="pro">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="image-hover">
                  <img src={product.hoverImage} alt={product.name} />
                </div>
              </div>
              <div className="des">
                <h4>{product.name}</h4>
                <div className="star">
                  {[...Array(product.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h3>Rs. {product.price}</h3>
              </div>
              <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Swifties;
