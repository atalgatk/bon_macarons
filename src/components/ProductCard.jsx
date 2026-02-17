export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={product.img} alt={product.name} className="w-full rounded" />
      <h3 className="mt-3 text-xl font-bold">{product.name}</h3>
      <p className="text-gray-700">{product.price} ₸</p>
      <a
        href={`/product/${product.id}`}
        className="block mt-3 bg-blue-600 text-white text-center py-2 rounded"
      >
        Подробнее / Купить
      </a>
    </div>
  );
}
