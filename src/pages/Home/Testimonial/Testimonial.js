import React from 'react';
import './Testimonial.css';
import person1 from '../../../assets/person-1.jpg';
import person2 from '../../../assets/person-2.jpg';
import person3 from '../../../assets/person-3.jpg';
import person4 from '../../../assets/person-4.jpg';

function Testimonial() {
  return (
    <div className="container testimonial-container text-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h5 className="pt-5" id="testimonials-heading">
          TESTIMONIALS
        </h5>
        <h1 className="big-green-heading mb-4">What Clients Say</h1>
        <p className="sub-text">
          We place huge value on strong relationships and have seen the benefits
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </p>
      </div>
      <div className="row pt-5 pb-4">
        <div className="col-12 col-sm-6 col-md-3 text-center pb-3">
          <div className="card testimonial-card justify-content-center align-items-center pt-3">
            <div className="card-img-top">
              <img
                src={
                  'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png'
                }
                className="avatar-image"
                alt="Person 4"
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text testimonial-card-text mb-5">
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png"
                  alt="Double Quotes open"
                />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350738.png"
                  alt="Double Quotes close"
                />
              </p>
              <h6 className="name-heading">Net Renolds</h6>
              <p className="card-text designation pb-3">Chief Accountant</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center pb-3">
          <div className="card testimonial-card justify-content-center align-items-center pt-3">
            <div className="card-img-top">
              <img
                src={
                  'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png'
                }
                className="avatar-image"
                alt="Person 2"
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text testimonial-card-text mb-5">
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png"
                  alt="Double Quotes open"
                />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350738.png"
                  alt="Double Quotes close"
                />
              </p>
              <h6 className="name-heading">Celia Almeda</h6>
              <p className="card-text designation pb-3">Secratary</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center pb-3">
          <div className="card testimonial-card justify-content-center align-items-center pt-3">
            <div className="card-img-top">
              <img
                src={
                  'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png'
                }
                className="avatar-image"
                alt="Person 3"
              />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text testimonial-card-text mb-5">
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png"
                  alt="Double Quotes open"
                />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350738.png"
                  alt="Double Quotes close"
                />
              </p>
              <h6 className="name-heading">Bob Roberts</h6>
              <p className="card-text designation pb-3">Sales Manager</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 text-center pb-3">
          <div className="card testimonial-card justify-content-center align-items-center pt-3">
            <div className="card-img-top">
              <img
                src={
                  'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png'
                }
                className="avatar-image"
                alt="Person 4"
              />
            </div>

            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text testimonial-card-text mb-5">
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png"
                  alt="Double Quotes open"
                />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <img
                  className="double-quotes"
                  src="https://cdn-icons-png.flaticon.com/512/7350/7350738.png"
                  alt="Double Quotes close"
                />
              </p>
              <h6 className="name-heading">Mattie Smith</h6>
              <p className="card-text designation pb-3">Accountant-auditor</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pb-5">
        Image from <span style={{ textDecoration: 'underline' }}>Freepik</span>
      </p>
    </div>
  );
}

export default Testimonial;
