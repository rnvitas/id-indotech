import "../styles/globals.css";
import "../styles/responsive.css";
import "../styles/shortcodes.css";
import "../styles/animation.css";
import "../styles/custom.css";
import "../styles/update.css";

// import "animate.css";
import Navbar from "@/components/fragments/Navbar";
import Footer from "@/components/fragments/Footer";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Indotech Digital Group",
  description:
    " A technology company specializing in software development,digital marketing, social media management, video production,and innovation in the digital and fintech industries. As atechnology consortium, Indotech Digital Group provides integrated digital solutions for various industries, ranging from education and entertainment to finance.",
  icons: {
    icon: `${basePath}/icon/favicon.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body`} id="page">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
