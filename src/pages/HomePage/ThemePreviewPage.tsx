import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

export default function ThemePreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎨 Цветовая палитра
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Primary (Синий)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-light rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    primary-light
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    primary
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-dark rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    primary-dark
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Secondary (Розовый)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-light rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    secondary-light
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    secondary
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-dark rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    secondary-dark
                  </span>
                </div>
              </div>
            </div>

            {/* Success Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Success (Зеленый)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success-light rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    success-light
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    success
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success-dark rounded-lg"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    success-dark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🔘 Кнопки
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Primary Button
              </button>
              <button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Secondary Button
              </button>
              <button className="bg-success hover:bg-success-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Success Button
              </button>
              <button className="bg-primary-light text-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-primary-light/80 transition-colors">
                Light Primary
              </button>
              <button className="bg-secondary-light text-secondary-dark px-6 py-3 rounded-lg font-medium hover:bg-secondary-light/80 transition-colors">
                Light Secondary
              </button>
              <button className="bg-success-light text-success-dark px-6 py-3 rounded-lg font-medium hover:bg-success-light/80 transition-colors">
                Light Success
              </button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📋 Карточки
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Проект Alpha
                </h3>
                <span className="px-3 py-1 bg-success-light text-success-dark rounded-full text-sm font-medium">
                  Активный
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Описание проекта с использованием настроенной темы Tailwind CSS
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Дедлайн: 15.12.2024
                </span>
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Подробнее
                </button>
              </div>
            </div>

            {/* Task Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-medium p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Задача Beta
                </h3>
                <span className="px-3 py-1 bg-secondary-light text-secondary-dark rounded-full text-sm font-medium">
                  В процессе
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Важная задача требующая внимания и выполнения в срок
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Прогресс: 75%
                </span>
                <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Открыть
                </button>
              </div>
            </div>

            {/* Habit Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-strong p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Привычка Gamma
                </h3>
                <span className="px-3 py-1 bg-primary-light text-primary-dark rounded-full text-sm font-medium">
                  Ежедневно
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Полезная привычка для улучшения продуктивности
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Серия: 12 дней
                </span>
                <button className="bg-success hover:bg-success-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Выполнить
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📝 Формы
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Создать новый проект
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Название проекта
                </label>
                <input
                  type="text"
                  placeholder="Введите название..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Описание
                </label>
                <textarea
                  placeholder="Описание проекта..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Создать
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🏷️ Статусы и индикаторы
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-success-light text-success-dark rounded-full text-sm font-medium">
                ✅ Завершено
              </span>
              <span className="px-3 py-1 bg-primary-light text-primary-dark rounded-full text-sm font-medium">
                🔄 В процессе
              </span>
              <span className="px-3 py-1 bg-secondary-light text-secondary-dark rounded-full text-sm font-medium">
                ⏳ Ожидает
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                ❌ Отменено
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                ⚠️ Просрочено
              </span>
            </div>
          </div>
        </section>

        {/* Shadows Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🌟 Тени
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Мягкая тень
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                shadow-soft
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-medium p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Средняя тень
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                shadow-medium
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-strong p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Сильная тень
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                shadow-strong
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
