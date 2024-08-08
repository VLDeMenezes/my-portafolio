"use client";
import { PATHROUTES } from "@/helpers/Routes.Helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push(PATHROUTES.HOME);
    }, 5000);
  });
  return (
    <main className="text-center">
      <Image
        className="mx-auto my-10"
        src="/celphone broken.svg"
        alt="Algo salio mal"
        width={200}
        height={200}
      />
      <p>Wuau, I can`t search this URL... Let me redirect you!</p>
    </main>
  );
};

export default NotFound;
