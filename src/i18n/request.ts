import { getRequestConfig } from "next-intl/server";
import { staticLocale } from "./config";

export default getRequestConfig(async () => {
  const locale = staticLocale;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
  };
});
