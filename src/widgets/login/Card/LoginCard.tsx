"use client";

import Image from "next/image";
import { useEffect } from "react";
import AppButton from "~/shared/ui/app-button/app-button";
import * as VKID from "@vkid/sdk";
import { useGoogleLogin } from "@react-oauth/google";
import authCallback from "~/widgets/Login/lib/authCallback";

export default function LoginCard({ className }: { className?: string }) {
  useEffect(() => {
    VKID.Config.init({
      app: 52837188,
      redirectUrl: "http://localhost/feed",
      scope: "email",
    }).get();
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      authCallback(response.access_token);
    },
  });

  return (
    <div
      className={`${className} flex flex-col items-center px-20 py-7 rounded-appButton overflow-hidden`}
    >
      <div className="absolute -z-10 -top-20 -right-20 -bottom-20 -left-20 bg-[#151111b8] backdrop-blur-sm" />
      <h2 className="text-3xl font-bold text-white mb-8">
        Войти через соц сети
      </h2>
      <AppButton
        className="mb-5 w-full !bg-[#0077FF]"
        title="Войти через VK ID"
        leading={
          <Image src="/login/vk-icon.png" alt="" width={36} height={24} />
        }
        onClick={() => VKID.Auth.login()}
      />
      <AppButton
        className="mb-5 w-full !bg-[#fafafa] !text-[#535353]"
        title="Войти через Google"
        leading={
          <Image src="/login/google-icon.png" alt="" width={24} height={24} />
        }
        onClick={() => googleLogin()}
      />
      <p className="text-white text-center">
        Создавая аккаунт вы подтверждаете согласие с{" "}
        <span className="text-primary underline underline-offset-4">
          правилами сервиса{" "}
        </span>
        и{" "}
        <span className="text-primary underline underline-offset-4">
          политикой конфиденциальности
        </span>
      </p>
    </div>
  );
}
