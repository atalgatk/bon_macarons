import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const product = {
    1: { name: "Набор «МИКС»", price: 12500, img: "/mix-set.jpg" },
    2: { name: "Набор «НЕЖНОСТЬ»", price: 14500, img: "/Nezhnost.jpg" },
    3: { name: "Макаронс Моти", price: 8000, img: "/moti.jpg" },
  }[id];

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleBuyWhatsApp = () => {
    if (!customerName || !customerPhone) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    const phone = "+77077787009"; 
    const message = encodeURIComponent(
      `Здравствуйте! Я хочу заказать:\n${product.name}\nЦена: ${product.price} ₸\nИмя: ${customerName}\nТелефон: ${customerPhone}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[500px] object-contain bg-white"
        />

        <div className="p-8">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="mt-2 text-2xl font-semibold">{product.price} ₸</p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Ваше имя"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-3 border rounded mb-3"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full p-3 border rounded mb-3"
            />
          </div>

          <button
            onClick={handleBuyWhatsApp}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg"
          >
            Заказать через WhatsApp
          </button>
        </div>

      </div>
    </div>
  );

}

