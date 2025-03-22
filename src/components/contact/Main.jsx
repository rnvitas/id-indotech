"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const customIcon = new L.Icon({
  iconUrl: `${basePath}/icon/pin.png`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Main() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${basePath}/api/contact`, input);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: res.data.message,
        showConfirmButton: false,
        timer: 2000,
      });

      setInput({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log("Error response:", error.response);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flat-title-page">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading text-center">Get In Touch</h1>
              <ul className="breadcrumbs flex justify-center">
                <li className="icon-keyboard_arrow_right">
                  <Link href={`${basePath}/`}>Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`${basePath}/contact`}>Contact</Link>
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
                  center={[-6.2138004, 106.8266223]}
                  zoom={20}
                  style={{ height: "460px", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[-6.2138004, 106.8266223]}
                    icon={customIcon}>
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
          <div className="row align-items-stretch">
            {" "}
            {/* Tambahkan align-items-stretch */}
            <div className="col-md-12">
              <motion.div
                variants={animations.fadeUp}
                initial="hidden"
                whileInView="visible">
                <div className="heading-section-1">
                  <h2 className="tf-title pb-20">Information</h2>
                  <p className="pb-40">
                    Get in touch with Indotech Digital Group—your trusted
                    partner in digital innovation. Whether you have inquiries,
                    collaborations, or need assistance, we're here to help.
                  </p>
                </div>
              </motion.div>
            </div>
            {[
              {
                icon: "lets-icons:map-light",
                title: "Office address",
                desc: "Gedung Wirausaha Lantai 1 Unit 104, Jalan Hr Rasuna Said Kav. C-5, Kel Karet, Kec Setia Budi, Jakarta, Indonesia Kode Pos 12920",
              },
              {
                icon: "mdi-light:email",
                title: "Email",
                desc: "info@indotechdigital.id",
              },
              {
                icon: "solar:phone-outline",
                title: "Phone number",
                desc: "(+62) 21 1234 5678",
              },
            ].map((item, index) => (
              <div className="col-md-4 d-flex" key={index}>
                {" "}
                {/* Tambahkan d-flex */}
                <motion.div
                  variants={animations.scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  className="w-100">
                  <div className="box-icon-item d-flex flex-column h-100 justify-content-center align-items-center">
                    <Icon icon={item.icon} width="48" height="48" />
                    <div className="title">
                      <a href="#">{item.title}</a>
                    </div>
                    <p className="flex-grow-1">{item.desc}</p>{" "}
                    {/* Tambahkan flex-grow-1 */}
                  </div>
                </motion.div>
              </div>
            ))}
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
              <form
                id="commentform"
                className="comment-form"
                onSubmit={handleSubmit}>
                <div className="flex gap30">
                  <fieldset className="name">
                    <input
                      className="style-1"
                      type="text"
                      id="name"
                      placeholder="Your name*"
                      name="name"
                      tabindex="2"
                      value={input.name}
                      aria-required="true"
                      required
                      onChange={handleInput}
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
                      value={input.email}
                      aria-required="true"
                      onChange={handleInput}
                      required
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
                      value={input.subject}
                      aria-required="true"
                      required
                      onChange={handleInput}
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
                    required
                    value={input.message}
                    onChange={handleInput}></textarea>
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
