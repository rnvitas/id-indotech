"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/icon/pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Contact() {
  return (
    <>
      <div className="flat-title-page">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading text-center">Get In Touch</h1>
              <ul className="breadcrumbs flex justify-center">
                <li className="icon-keyboard_arrow_right">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section-2 contact-us">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="widget-gg-map">
                <MapContainer
                  center={[-6.2088, 106.8456]}
                  zoom={20}
                  style={{ height: "460px", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[-6.2088, 106.8456]} icon={customIcon}>
                    <Popup>📍 Our Office Location</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section-2 widget-box-icon">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-1">
                <h2 className="tf-title pb-20">Information</h2>
                <p className="pb-40">
                  Get in touch with Indotech Digital Group—your trusted partner
                  in digital innovation. Whether you have inquiries,
                  collaborations, or need assistance, we're here to help.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-icon-item">
                <img src="/assets/address.png" alt="" />
                <div className="title">
                  <a href="#">Office address</a>
                </div>
                <p>Jl. Teknologi No. 88, Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-icon-item">
                <img src="/assets/email.png" alt="" />
                <div className="title">
                  <a href="#">Email</a>
                </div>
                <p>info@indotechdigital.id</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-icon-item">
                <img src="/assets/phone.png" alt="" />
                <div className="title">
                  <a href="#">Phone number</a>
                </div>
                <p>
                  (+62) 21 1234 5678
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section-2 widget-box-icon">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-1">
                <h2 className="tf-title pb-20">Contact us</h2>
                <p className="pb-40">
                  Have A Question? Need Help? Don't Hesitate, Drop Us A Line
                </p>
              </div>
            </div>
            <div className="col-12">
              <form id="commentform" className="comment-form">
                <div className="flex gap30">
                  <fieldset className="name">
                    <input
                      className="style-1"
                      type="text"
                      id="name"
                      placeholder="Your name*"
                      name="name"
                      tabindex="2"
                      value=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="email">
                    <input
                      className="style-1"
                      type="email"
                      id="email"
                      placeholder="Email address*"
                      name="email"
                      tabindex="2"
                      value=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="subject">
                    <input
                      className="style-1"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      tabindex="2"
                      value=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                </div>
                <fieldset className="message">
                  <textarea
                    className="style-1"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message*"
                    tabindex="4"
                    aria-required="true"
                    required=""></textarea>
                </fieldset>
                <div className="btn-submit">
                  <button className="tf-button style-1" type="submit">
                    Send message <i className="icon-arrow-up-right2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
