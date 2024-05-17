import React from 'react';
import './Header.css'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headerPhotoArray = [
  { image: '/icons/array1.jpg' },
  { image: '/icons/array2.jpg' },
  { image: '/icons/array3.jpg' },
  { image: '/icons/array4.jpg' },
  { image: '/icons/array5.jpg' },
  { image: '/icons/array6.jpg' },
  { image: '/icons/array7.jpg' },
  { image: '/icons/array8.jpg' },
];

const Header = () => (
  <header className="header">
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {headerPhotoArray.map((photo, index) => (
        <div key={index}>
          <img src={photo.image} alt={`slide-${index}`} />
        </div>
      ))}
    </Carousel>
    <div className="hero">
      <img src="/icons/dc66bf61-d25a-406c-8f88-96aeead26f32.webp" alt="Green King Landscaping Logo" className="logo" />
      <h1>Green King Landscaping</h1>
      <p>Transforming Your Outdoor Spaces with Excellence</p>
    </div>
  </header>
);

export default Header;
