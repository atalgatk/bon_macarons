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

    const phone = "7777777777"; // ← замените на ваш номер WhatsApp
    const message = encodeURIComponent(
      `Здравствуйте! Я хочу заказать:\n${product.name}\nЦена: ${product.price} ₸\nИмя: ${customerName}\nТелефон: ${customerPhone}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow">
      <img src={product.img} alt={product.name} className="w-full rounded" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="mt-2 text-xl font-semibold">{product.price} ₸</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Ваше имя"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="tel"
          placeholder="Ваш телефон"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
      </div>

      <button
        onClick={handleBuyWhatsApp}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
      >
        Заказать через WhatsApp
      </button>
    </div>
  );
}

