import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  title?: string;
  description?: string;
  renderRightActions?: () => ReactNode;
};

export default function Header(props: HeaderProps) {
  const { title, description, renderRightActions } = props;

  const RightActions = () => {
    if (renderRightActions) return <>{renderRightActions()}</>;
    return (
      <div className="flex items-center gap-3">
        <Link
          to="/projects/new"
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          New Project
        </Link>
        <Link
          to="/account"
          className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg border border-default dark:border-strong transition-colors"
        >
          Account
        </Link>
      </div>
    );
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-soft border-b border-gray-200 dark:border-gray-700 mb-8">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white truncate">
              {title || "Dream To Act | Project Manager of Your Life"}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {description || "Create your best life through targeted action"}
            </p>
            <span className="text-sm text-gray-500/50 dark:text-gray-400/50">
              <Link to="/">Home Page</Link>&nbsp;&nbsp;
              <Link to="/projects">Projects Page</Link>
            </span>
          </div>
          <RightActions />
        </div>
      </div>
    </header>
  );
}
