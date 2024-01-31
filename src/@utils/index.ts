type ToggleThemeParamType = {
  dark: boolean | undefined;
};

export const toggleTheme = (params: ToggleThemeParamType) => {
  let { dark } = params;

  localStorage.theme = dark ? "dark" : "light";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const getTheme = () => localStorage.getItem("theme");
