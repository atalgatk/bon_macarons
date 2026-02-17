export default function Success() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-10 rounded shadow text-center">
        <h1 className="text-3xl font-bold text-green-700">Спасибо за заказ!</h1>
        <p className="mt-3">Мы скоро свяжемся с вами для подтверждения.</p>
      </div>
    </div>
  );
}
