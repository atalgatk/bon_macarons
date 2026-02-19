import { useState } from "react";


export default function Home() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [activeCategory, setActiveCategory] = useState("Макаронс"); // По умолчанию
  const [isCartOpen, setIsCartOpen] = useState(false);

  {/* Приветствие */}
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff0f5] text-center">
    <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">
      Bon Macarons!
    </h1>
    <p className="text-xl mb-1 animate-fadeInDown animate-delay-200">г. Алматы</p>
    <p className="text-xl animate-fadeInDown animate-delay-400">Тел: +7 700 123 4567</p>
  </div>


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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const handleBuyWhatsApp = () => {
    if (cart.length === 0) {
      alert("Добавьте хотя бы один товар в корзину");
      return;
    }
    if (!customerName || !customerPhone) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    const phone = "77077787009"; // ваш номер WhatsApp
    const itemsList = cart.map(item => `${item.name} — ${item.price} ₸`).join("\n");
    const message = encodeURIComponent(
      `Здравствуйте! Я хочу заказать:\n${itemsList}\nИтого: ${totalPrice} ₸\nИмя: ${customerName}\nТелефон: ${customerPhone}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // Список категорий
  const categories = [...new Set(products.map(p => p.category))];

  return (
      <div className="min-h-screen 
        bg-gradient-to-b 
        from-[#1a0f0f] 
        via-[#2a1a1a] 
        to-[#f5e6ea]">

        {/* HERO С ФОТО */}
    <section 
    className="h-[80vh] relative overflow-hidden flex items-center justify-center"
    >

      {/* Фоновая картинка */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/welcome.png')" }}
      ></div>

      {/* Fade только фона */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-transparent 
                      via-transparent 
                      to-[#2a1a1a]">
      </div>

      {/* ТЕКСТ — выше всех слоёв */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bon Macarons!
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
           Выбор тех, кто знает толк в сладостях - от Алматы до Астаны🎀
        </h1>

        <p className="text-lg md:text-xl">
          г.Алматы, Кунаева 19 в «FF»
        </p>
        <p className="text-lg md:text-xl">
          • +7 707 778 7009
        </p>
      </div>

    </section>

      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8"></h1>

      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed top-6 right-6 bg-[#c48a9a] hover:bg-[#b57888] text-white px-5 py-3 rounded-full shadow-lg z-40"
      >
        🛒 Ваша Корзина ({cart.length})
      </button>

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
            <div key={product.id} className="w-45 p-4 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-80 object-contain bg-white" 
            />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
                <p className="mt-1 text-lg text-gray-600">{product.price} ₸</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full bg-[#c48a9a] hover:bg-[#b57888] text-white text-lg py-5 rounded-lg transition"
              >
                Добавить в корзину
              </button>

            </div>
          ))}
      </div>

      {/* Корзина */}

      {isCartOpen && (
  <>
    {/* Затемнение фона */}
    <div
      className="fixed inset-0 bg-black/30 z-40"
      onClick={() => setIsCartOpen(false)}
    ></div>

    {/* Панель корзины */}
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-300">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#a46b7a]">Корзина</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-2xl font-bold"
        >
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500">Корзина пуста</p>
      ) : (
        <>
          <ul className="mb-4">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-3">
          
          <div>
            <p className="font-medium">
              {item.name} × {item.quantity}
            </p>
            <p className="text-sm text-gray-500">
              {item.price * item.quantity} ₸
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-lg"
          >
            ×
          </button>

        </div>
      ))}

          </ul>

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
            className="w-full p-3 border rounded mb-4"
          />


          <p className="font-semibold mb-4">
            Итого: {totalPrice} ₸
          </p>

          <button
            onClick={handleBuyWhatsApp}
            className="w-full bg-[#c48a9a] hover:bg-[#b57888] text-white py-3 rounded-lg"
          >
            Заказать
          </button>
        </>
      )}
    </div>
  </>
)}



    </div>
  );
}

