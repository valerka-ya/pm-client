export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-soft border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          🎨 Tailwind Theme Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Демонстрация настроенной цветовой палитры и компонентов
        </p>
      </div>
    </header>
  );
}
