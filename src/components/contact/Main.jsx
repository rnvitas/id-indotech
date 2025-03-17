"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const customIcon = new L.Icon({
  iconUrl: "/icon/pin.png",
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
  const [isClient, setIsClient] = useState(false); // State untuk menandakan apakah klien

  useEffect(() => {
    setIsClient(true); // Set ke true setelah render di sisi klien
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", input);

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

  if (!isClient) {
    return null; // Jika tidak di sisi klien, jangan render komponen
  }

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

      {/* Formulir dan konten lainnya */}
    </>
  );
}
