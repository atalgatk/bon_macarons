import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [activeCategory, setActiveCategory] = useState("Макаронс"); // По умолчанию

  // Продукты с категорией
  const products = [
    { id: 1, name: "Набор «МИКС»", price: 12500, img: "/mix-set.jpg", category: "Макаронс" },
    { id: 2, name: "Набор «НЕЖНОСТЬ»", price: 14500, img: "/Nezhnost.jpg", category: "Макаронс" },
    { id: 3, name: "Клубника в шоколаде — малиновая", price: 5000, img: "/strawberry.jpg", category: "Клубника в шоколаде" },
    { id: 4, name: "Клубника в шоколаде — классическая", price: 4500, img: "/strawberry2.jpg", category: "Клубника в шоколаде" },
    { id: 5, name: "Бонбоньерка с шоколадной начинкой", price: 1250, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 6, name: "Бонбоньерка в нежнейшем оформлении из фатина", price: 1450, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 7, name: "1 шт макаронс в коробочке", price: 1050, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 8, name: "2 шт мини макаронс", description: "Диаметр макаронс 3см", price: 950, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 9, name: "4 шт мини макаронс", description: "Диаметр макаронс 3см", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 10, name: "2 шт золотых макаронс", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 11, name: "1 шт макаронс в коробочке в фатине", price: 1150, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 12, name: "2 белые сердечки", price: 1300, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 13, name: "Сердца 2 шт в коробочке", price: 1300, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 14, name: "4 мини макаронс в прозрачной коробочке", price: 1250, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 15, name: "Безе в коробочке", price: 650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 16, name: "1 шт макаронс с печатью", description: "От 30 шт принимаем на печать",price: 1050, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 17, name: "Бонбоньерки из 4-х шт мини макаронс", description: "Цена в полном оформлении 1650тг. Мини макаронс 4шт, сургун, бирка (дизайн от нас), сухоцветы, лента и цвет макаронс подберем под ваше мероприятие", price: 1650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 18, name: "С цветочным оформлением", price: 1650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 19, name: "Нежность", price: 1400, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 20, name: "3 макаронс коробочка с окошком", price: 2200, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 21, name: "2 шт золотых макаронс", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleBuyWhatsApp = () => {
    if (cart.length === 0) {
      alert("Добавьте хотя бы один товар в корзину");
      return;
    }
    if (!customerName || !customerPhone) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    const phone = "7777777777"; // ваш номер WhatsApp
    const itemsList = cart.map(item => `${item.name} — ${item.price} ₸`).join("\n");
    const message = encodeURIComponent(
      `Здравствуйте! Я хочу заказать:\n${itemsList}\nИтого: ${totalPrice} ₸\nИмя: ${customerName}\nТелефон: ${customerPhone}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // Список категорий
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">Bon Macarons</h1>

      {/* Выбор категории */}
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeCategory === cat
                ? "bg-pink-600 text-white"
                : "bg-white text-pink-700 border border-pink-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Товары выбранной категории */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products
          .filter((p) => p.category === activeCategory)
          .map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
                <p className="mt-1 text-lg text-gray-600">{product.price} ₸</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors"
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Корзина */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-xl shadow-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-700 mb-2">Корзина</h2>
          <ul className="mb-2 max-h-40 overflow-y-auto">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700 mb-1">
                <span>{item.name} — {item.price} ₸</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 font-bold"
                  title="Удалить"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-gray-800 mb-2">Итого: {totalPrice} ₸</p>

          <button
            onClick={clearCart}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg mb-2"
          >
            Очистить корзину
          </button>


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

          <button
            onClick={handleBuyWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg mt-2"
          >
            Заказать через WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}

