import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
const fetcherProducts = (url) => axios.get(url).then((res) => res.data.data);

export default function Modal({ product, closeModal, showModal }) {
  const [input, setInput] = useState({
    productId: product || "",
    name: "",
    wa: "",
    email: "",
  });

  const {
    data: order,
    error,
    isLoading,
  } = useSWR(`/api/products`, fetcherProducts);
  const orderSubject = order?.find(
    (item) => String(item.id) !== String(product)
  );
  // console.log(orderSubject);

  useEffect(() => {
    if (showModal && product) {
      if (product) {
        setInput({
          productId: product || "",
          name: "",
          wa: "",
          email: "",
        });
      } else {
        console.error("Product ID is not available in the product:", product);
      }
    }
  }, [showModal, product]);

  // Handle submit dan kirim data ke API
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting input:", input);
    if (!input.name || !input.wa || !input.email) {
      alert("Please fill all fields");
      return;
    }

    if (!input.productId) {
      alert("Product ID is missing!");
      return;
    }

    try {
      const response = await axios.post(`/api/order`, input);
      const whatsappMessage = `Hi, I would like to order: ${orderSubject?.title}. Name: ${input.name}, Emaol:${input.email}, WhatsApp: ${input.wa}`;
      const whatsappUrl = `https://wa.me/081818134331?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.location.href = whatsappUrl;
      closeModal();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <div></div>
                <button
                  onClick={closeModal}
                  type="button"
                  className="close"
                  aria-label="Close">
                  <span aria-hidden="true">
                    <Icon
                      icon="mingcute:close-fill"
                      width="32"
                      height="32"
                      style={{ color: "#fff" }}
                    />
                  </span>
                </button>
              </div>

              <div
                className="image px-3 py-3 mb-30"
                style={{ background: "#161616" }}>
                <img src="/icon/lg-indotech.png" alt="" />
              </div>

              <h2 style={{ borderTop: "1px solid #232323" }} className="pt-3">
                Complete Your Order
              </h2>
              <p>
                Complete your order by filling in the details. You'll be
                redirected to WhatsApp for assistance.
              </p>
              <form onSubmit={handleSubmit}>
                <fieldset className="email">
                  <input
                    type="text"
                    className="style-1 mb-4"
                    id="name"
                    placeholder="Full Name*"
                    name="name"
                    value={input.name}
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                    required
                  />
                  <div className="d-flex justify-content-between ">
                    <input
                      type="number"
                      className="style-1 mr-3"
                      id="wa"
                      placeholder="Whatsapp Number*"
                      name="wa"
                      value={input.wa}
                      onChange={(e) =>
                        setInput({ ...input, wa: e.target.value })
                      }
                      required
                    />
                    <input
                      type="email"
                      className="style-1"
                      placeholder="Email*"
                      name="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="d-flex justify-content-center items-center "
                  style={{ cursor: "pointer", margin: "0 auto" }}>
                  Submit and Redirect to WhatsApp{" "}
                  <Icon icon="gg:arrow-top-right" width="24" height="24" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
