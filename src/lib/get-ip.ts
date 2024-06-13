import { headers } from "next/headers";

const getIp = () => {
  const ip = headers().get("x-forwarded-for");
  return ip;
};

export default getIp;
