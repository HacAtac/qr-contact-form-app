import { Link } from 'react-router-dom';
import './QRCodePage.css'; // Import the new CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  { quote: "The team was incredibly professional and efficient. I highly recommend their services!", author: "Emily Davis" },
  { quote: "Outstanding experience from start to finish. The customer service was exceptional!", author: "Michael Johnson" },
  { quote: "Their attention to detail and commitment to quality is unparalleled. Will definitely use their services again.", author: "Sarah Lee" },
  { quote: "Absolutely fantastic! They went above and beyond to meet our needs.", author: "James Smith" },
  { quote: "Reliable, professional, and great to work with. Couldn't have asked for a better experience.", author: "Linda Martinez" },
  { quote: "They delivered exactly what we needed and more. Highly recommended!", author: "David Brown" },
  { quote: "A seamless and enjoyable experience. Their expertise is top-notch.", author: "Jessica Wilson" },
  { quote: "I was impressed with their dedication and quality of work. Exceptional service!", author: "Chris Johnson" },
  { quote: "Their team is knowledgeable, responsive, and truly cares about their clients.", author: "Laura White" },
  { quote: "Exceeded our expectations in every way. A pleasure to work with.", author: "Robert Garcia" },
  { quote: "Professional, efficient, and always willing to go the extra mile.", author: "Nancy Lewis" },
  { quote: "Their innovative solutions have greatly benefited our business. Thank you!", author: "Thomas Walker" },
  { quote: "I highly recommend them for their exceptional service and expertise.", author: "Lisa Hall" },
  { quote: "Their commitment to quality and customer satisfaction is unmatched.", author: "Kevin Young" },
  { quote: "A fantastic team that delivers outstanding results. Will use them again!", author: "Karen Hernandez" },
  { quote: "Their professionalism and attention to detail made all the difference.", author: "Steven King" },
  { quote: "The best experience we've had with any service provider. Highly recommended!", author: "Patricia Scott" },
  { quote: "Top-notch service from a top-notch team. We couldn't be happier.", author: "Daniel Adams" },
  { quote: "They truly understand our needs and deliver exceptional results every time.", author: "Barbara Clark" },
  { quote: "A reliable partner that we can always count on. Thank you for your great work!", author: "Paul Rodriguez" },
  { quote: "Their expertise and dedication are evident in everything they do.", author: "Susan Hill" },
  { quote: "Consistently excellent service. We appreciate their hard work and dedication.", author: "Mark Allen" },
  { quote: "Their innovative approach and commitment to quality set them apart.", author: "Jennifer Wright" },
  { quote: "Outstanding results and a pleasure to work with. Highly recommend!", author: "Charles Lopez" },
  { quote: "A true partner in our success. We value their expertise and support.", author: "Elizabeth Green" },
  { quote: "They have exceeded our expectations at every turn. Simply the best!", author: "Richard Baker" },
  { quote: "Their professionalism, expertise, and dedication are second to none.", author: "Margaret Adams" },
  { quote: "A fantastic team that delivers exceptional results. We highly recommend them.", author: "Joseph Gonzalez" },
  { quote: "Their commitment to excellence and customer satisfaction is unparalleled.", author: "Dorothy Nelson" },
  { quote: "An outstanding experience from start to finish. Highly recommended!", author: "Donald Carter" },
  { quote: "Their innovative solutions and dedication to quality are truly impressive.", author: "Betty Mitchell" },
  { quote: "We couldn't be happier with their service. They are true professionals.", author: "George Perez" },
  { quote: "Their team is knowledgeable, responsive, and a pleasure to work with.", author: "Helen Roberts" },
  { quote: "They consistently deliver exceptional results and go above and beyond.", author: "Frank Campbell" },
  { quote: "A reliable and trustworthy partner. We highly recommend their services.", author: "Martha Stewart" },
  { quote: "Their expertise and commitment to excellence are evident in everything they do.", author: "Raymond Morris" },
];

const QRCodePage = () => (
  <div className="qr-container">
    <section className="qr-section">
      <h1>Contact Me</h1>
      <p>Scan the QR code to reach the contact form.</p>
      <div className="qr-code-wrapper">
        <img src="/qr-code.png" alt="QR Code" className="qr-code" />
      </div>
      <p>Or click the button below to go directly to the contact form:</p>
      <Link to="/contact">
        <button className="contact-button">We want to hear from you!</button>
      </Link>
    </section>
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false} autoPlay={true} className="carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </Carousel>
    </section>
  </div>
);

export default QRCodePage;
