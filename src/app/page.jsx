"use client";
import Discover from "@/components/landingPage/Discover";
import Hero from "@/components/landingPage/Hero";
import Product from "@/components/landingPage/Product";
import Service from "@/components/landingPage/Service";
import Step from "@/components/landingPage/Step";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Product />
      <Step />
      <Discover />
    </>
  );
}
