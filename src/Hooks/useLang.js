import { useContext } from "react";
import { Context } from "../Context/Lang";

const useLang = () => {
  const ctx = useContext(Context);

  return [ctx.lang, ctx.setLang];
};

export default useLang;
