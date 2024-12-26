import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
export function ThemeToggle() {
  // Function to apply the theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const updateTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    // document.documentElement.setAttribute(
    //   "data-theme",
    //   isDark ? "theme-darker" : "theme-lighter"
    // );
  };

  const handleToggleClick = () => {
    const element = document.documentElement;

    // if not supported, just toggle the theme
    if (!document.startViewTransition) {
      element.classList.toggle("dark");
      updateTheme();
      return;
    }

    document.startViewTransition(() => {
      element.classList.toggle("dark");
      updateTheme();
    });
  };

  return (
    <button
      onClick={handleToggleClick}
      data-umami-event="theme-toggle"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </button>
  );
}
