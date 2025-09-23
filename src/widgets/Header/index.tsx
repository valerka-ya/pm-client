export default function Header(props: {
  title?: string;
  description?: string;
}) {
  const { title, description } = props;
  return (
    <header className="bg-white dark:bg-gray-800 shadow-soft border-b border-gray-200 dark:border-gray-700 mb-8">
      <div className="container mx-auto px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title || "Dream To Act | Project Manager of Your Life"}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {description || "Create your best life through targeted action"}
        </p>
      </div>
    </header>
  );
}
