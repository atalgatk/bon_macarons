"use client";
import { useState, useEffect } from "react";



export default function Home() {
  // Продукты с категорией
  const products = [

    { id: 1, name: "Набор «МИКС»", price: 12500, description: "В наборе: 5 макаронс, 3 моти, 5 клубники в шоколаде", img: "/images/mix_set.jpg", category: "Макаронс" },
    { id: 2, name: "Набор «Цилиндр Волшебства»", price: 13000, img: "/images/cilindr_vol.jpeg", category: "Макаронс"},
    { id: 3, name: "Набор «Волшебство»", price: 13200, img: "/images/volshebstvo.jpeg", category: "Макаронс"},
    { id: 4, name: "Набор «Сказка»", price: 15525, img: "/images/skazka.jpeg", category: "Макаронс"},
    { id: 5, name: "Набор «Love Размер М»", price: 18350, img: "/images/love_m.jpeg", category: "Макаронс"},
    { id: 6, name: "Набор «Чайный»", price: 12525, img: "/images/tea.jpeg", category: "Макаронс"},
    { id: 7, name: "Набор «Макаронс 15 шт»", price: 12375, img: "/images/macarons_15.png", category: "Макаронс"},
    { id: 8, name: "Набор «Love Размер S»", price: 13900, img: "/images/love_s.jpeg", category: "Макаронс"},
    { id: 9, name: "Набор «Сердце Размер S»", price: 13900, img: "/images/heart_s.jpeg", category: "Макаронс"},
    { id: 10, name: "Набор «Сердце Размер М»", price: 18350, img: "/images/heart_m.jpeg", category: "Макаронс"},
    { id: 11, name: "Набор «Моти и Макаронс»", price: 13050, img: "/images/mochi_mac.jpeg", category: "Макаронс"},
    { id: 12, name: "Набор С Муссовыми Десертами", price: 11550, img: "/images/muss_deserts.jpeg", category: "Макаронс"},
    { id: 13, name: "Набор «Нежность»", price: 20500, img: "/images/nezhnost.jpeg", category: "Макаронс"},
    { id: 14, name: "Набор «Макаронс 20 шт»", price: 16500, img: "/images/20_macarons.jpeg", category: "Макаронс"},
    { id: 15, name: "Набор «Макаронс 25 шт»", price: 20625, img: "/images/25_macarons.jpeg", category: "Макаронс"},
    { id: 16, name: "Набор «LOVE»", price: 29500, img: "/images/love.png", category: "Макаронс"},
    { id: 17, name: "Набор «MOM»", price: 28500, img: "/images/set_mom.jpeg", category: "Макаронс"},
    { id: 18, name: "Набор «Сердце Размер L»", price: 35900, img: "/images/heart_l.jpeg", category: "Макаронс"},
    { id: 19, name: "Набор «Love Размер L»", price: 13000, img: "/images/love_l.jpeg", category: "Макаронс"},
    { id: 20, name: "Набор «Нежный Mix»", description: "В наборе: Бенто торт, 8шт макаронс, 4шт моти", price: 17500, img: "/images/nezh_mix.png", category: "Макаронс"},
    { id: 21, name: "Набор «Принцесса»", price: 13000, img: "/images/princess.png", category: "Макаронс"},
    { id: 22, name: "Набор «Извинение»", price: 12500, img: "/images/sorry.png", category: "Макаронс"},
    { id: 23, name: "Набор «Милашка»", price: 9500, img: "/images/milashka.png", category: "Макаронс"},
    { id: 24, name: "Набор «Big Macaroons»", price: 9600, img: "/images/big_macaroons.png", category: "Макаронс"},
    
    { id: 25, name: "Набор «Маме»", price: 29900, img: "/images/mame.jpg", category: "Клубника в шоколаде" },
    { id: 26, name: "Набор «Ягодная Корзина»", price: 13700, img: "/images/berry_korzina.jpg", category: "Клубника в шоколаде" },
    { id: 44, name: "Круглая Коробка: Размер S", price: 13500, img: "/images/circle_s.jpg", category: "Клубника в шоколаде" },
    { id: 45, name: "Набор из 25 клубник в шоколаде", price: 22500, img: "/images/25_strawb.jpg", category: "Клубника в шоколаде" },
    { id: 46, name: "Набор «Сердце»", price: 13500, img: "/images/zhurek_s.jpg", category: "Клубника в шоколаде" },
    { id: 47, name: "Набор «Сердце S»", price: 13500, img: "/images/s_zhurek.jpg", category: "Клубника в шоколаде" },
    { id: 48, name: "Микс клубники в шоколаде и макаронс", description: "12шт",  price: 9900, img: "/images/mix_12.jpg", category: "Клубника в шоколаде" },
    { id: 49, name: "Набор из 15 клубник в шоколаде", price: 12375, img: "/images/nabor_15.jpg", category: "Клубника в шоколаде" },
    { id: 50, name: "Микс Клубники в шоколаде и Макаронс", description: "10 шт",price: 8250, img: "/images/10_strawb.jpg", category: "Клубника в шоколаде" },
    { id: 51, name: "Микс Клубники в шоколаде и Макаронс", description: "15 шт", price: 12375, img: "/images/mix_straw15.jpg", category: "Клубника в шоколаде" },
    { id: 52, name: "Набор из 9 клубник в шоколаде", price: 7500, img: "/images/9_strw.jpg", category: "Клубника в шоколаде" },

    { id: 27, name: "Бонбоньерка с шоколадной начинкой", price: 1250, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 28, name: "Бонбоньерка в нежнейшем оформлении из фатина", price: 1450, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 29, name: "1 шт макаронс в коробочке", price: 1050, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 30, name: "2 шт мини макаронс", description: "Диаметр макаронс 3см", price: 950, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 31, name: "4 шт мини макаронс", description: "Диаметр макаронс 3см", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 32, name: "2 шт золотых макаронс", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 33, name: "1 шт макаронс в коробочке в фатине", price: 1150, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 34, name: "2 белые сердечки", price: 1300, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 35, name: "Сердца 2 шт в коробочке", price: 1300, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 36, name: "4 мини макаронс в прозрачной коробочке", price: 1250, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 37, name: "Безе в коробочке", price: 650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 38, name: "1 шт макаронс с печатью", description: "От 30 шт принимаем на печать",price: 1050, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 39, name: "Бонбоньерки из 4-х шт мини макаронс", description: "Цена в полном оформлении 1650тг. Мини макаронс 4шт, сургун, бирка (дизайн от нас), сухоцветы, лента и цвет макаронс подберем под ваше мероприятие", price: 1650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 40, name: "С цветочным оформлением", price: 1650, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 41, name: "Нежность", price: 1400, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 42, name: "3 макаронс коробочка с окошком", price: 2200, img: "/strawberry2.jpg", category: "Бонбоньерки" },
    { id: 43, name: "2 шт золотых макаронс", price: 1350, img: "/strawberry2.jpg", category: "Бонбоньерки" },

  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
  const savedCity = localStorage.getItem("city");

  if (!savedCity && window.innerWidth < 768) {
    setIsCityModalOpen(true);
    } else if (savedCity) {
      setSelectedCity(savedCity);
    }
  }, []);

  const chooseCity = (city) => {
    localStorage.setItem("city", city);
    setSelectedCity(city);
    setIsCityModalOpen(false);
  };
    

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#FFF6F8] min-h-screen">

      {/* HEADER */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-light tracking-wide text-[#4C3A42]">
          Bon Macarons
        </h1>
        <p className="mt-4 text-[#A46B7A] text-lg">
          Нежные подарочные наборы ручной работы
        </p>
      </div>

      {/* CART BUTTON */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed top-6 right-6 bg-[#D499A6] hover:bg-[#C07F8E] text-white px-6 py-3 rounded-full shadow-lg transition"
      >
        🛍 {cart.length}
      </button>

      {/* CATEGORY OR PRODUCTS VIEW */}

{!selectedCategory ? (

  // ===== ГЛАВНАЯ СТРАНИЦА (КАТЕГОРИИ) =====
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-20">

    {[
      { title: "Макаронс", image: "/images/macarons_15.png" },
      { title: "Клубника в шоколаде", image: "/images/berry_korzina.jpg" },
      { title: "Бонбоньерки", image: "/strawberry2.jpg" },
    ].map((cat) => (
      <div
        key={cat.title}
        onClick={() => setSelectedCategory(cat.title)}
        className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
      >
        <img
          src={cat.image}
          alt={cat.title}
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-3xl font-light tracking-wide">
            {cat.title}
          </h2>
        </div>
      </div>
    ))}

  </div>

) : (

      // ===== ТОВАРЫ ВЫБРАННОЙ КАТЕГОРИИ =====
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-10 text-[#A46B7A] hover:underline"
        >
          ← Назад к категориям
        </button>

        <div className="grid md:grid-cols-2 gap-12">

          {products
            .filter((product) => product.category === selectedCategory)
            .map((product) => {

              const cartItem = cart.find((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-sm hover:shadow-2xl overflow-hidden transition duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                    />

                    {cartItem && (
                      <div className="absolute top-4 right-4 bg-[#D499A6] text-white px-4 py-1 rounded-full text-sm shadow">
                        ×{cartItem.quantity}
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-medium text-[#4C3A42]">
                      {product.name}
                    </h2>

                    <p className="mt-3 text-xl text-[#A46B7A] font-semibold">
                      {product.price} ₸
                    </p>

                    <button
                      onClick={() => addToCart(product)}
                      className="mt-6 w-full bg-[#D499A6] hover:bg-[#C07F8E] text-white py-4 rounded-full font-medium tracking-wide transition duration-300"
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              );
            })}

        </div>
      </div>

    )}

    {/* CITY MODAL */}
    {isCityModalOpen && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
        <div className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl">

          <button
            onClick={() => setIsCityModalOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-400"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold text-center mb-8">
            Выберите город
          </h2>

          <div className="space-y-4">

            {["Алматы", "Астана"].map((city) => (
              <button
                key={city}
                onClick={() => chooseCity(city)}
                className="w-full py-4 border rounded-2xl hover:bg-black hover:text-white transition"
              >
                {city}
              </button>
            ))}

          </div>

        </div>
      </div>
    )}

      {/* CART SIDEBAR */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl p-8 overflow-y-auto">
            <h2 className="text-3xl font-light text-[#4C3A42] mb-8">
              Корзина
            </h2>

            {cart.length === 0 && (
              <p className="text-gray-400">Корзина пуста</p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div>
                  <p className="text-[#4C3A42] font-medium">
                    {item.name}
                  </p>
                  <span className="text-gray-400 text-sm">
                    ×{item.quantity}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-[#A46B7A] font-semibold">
                    {item.price * item.quantity} ₸
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-gray-400 hover:text-red-400"
                  >
                    убрать
                  </button>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <>
                <p className="text-xl font-semibold text-[#4C3A42] mb-6">
                  Итого: {totalPrice} ₸
                </p>

                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl mb-4 focus:ring-2 focus:ring-[#D499A6] outline-none"
                />

                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl mb-6 focus:ring-2 focus:ring-[#D499A6] outline-none"
                />

                <button className="w-full bg-[#D499A6] hover:bg-[#C07F8E] text-white py-4 rounded-full text-lg transition">
                  Оформить заказ
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

