"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Loading() {
  return (
    <div class="preload preload-container">
      <div class="middle">
        <motion.div
          className="d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}>
          <Image
            src={`${basePath}/icon/lg-indotech.png`}
            alt="Loading..."
            width={300}
            height={300}
            className="img-fluid"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
