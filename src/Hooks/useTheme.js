import { useContext } from "react";
import { Context } from "../Context/Theme";

const useTheme = () => {
  const ctx = useContext(Context);

  return [ctx.theme, ctx.setTheme];
};

export default useTheme;
