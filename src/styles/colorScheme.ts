export interface ColorScheme {
    text: string;
    background: string;
    darkText: string;
    darkBackground: string;
  }
  
  export const COLOR_SCHEMES = {
    default: {
      text: "text-slate-900",
      background: "bg-lime-400",
      darkText: "dark:text-lime-500",
      darkBackground: "dark:bg-white"
    },
    reverse: {
      text: "text-lime-500",
      background: "bg-slate-900",
      darkText: "dark:text-slate-900",
      darkBackground: "dark:bg-lime-400"
    },
    blue: {
      text: "text-blue-900",
      background: "bg-blue-200",
      darkText: "dark:text-blue-200",
      darkBackground: "dark:bg-blue-900"
    },
    purple: {
      text: "text-purple-900",
      background: "bg-purple-200",
      darkText: "dark:text-purple-200",
      darkBackground: "dark:bg-purple-900"
    },
    orange: {
      text: "text-orange-900",
      background: "bg-orange-200",
      darkText: "dark:text-orange-200",
      darkBackground: "dark:bg-orange-900"
    }
  } as const;
  

  export type ColorSchemeName = keyof typeof COLOR_SCHEMES;
  
  export const getColorScheme = (name: ColorSchemeName): ColorScheme => {
    return COLOR_SCHEMES[name];
  };