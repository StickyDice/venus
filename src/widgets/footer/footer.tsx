import Image from "next/image";
import AppButton from "~/shared/ui/app-button/app-button";
import AppInput from "~/shared/ui/app-input/app-input";

export default function Footer() {
  return (
    <footer className="flex justify-center pb-6">
      <div className="px-15 pt-35 max-w-xl w-full flex justify-between">
        <div className="flex flex-col gap-4">
          <Image src="/logo.jpg" alt="Flex Living" width={130} height={58} />
          <div className="pl-5 flex flex-col gap-4">
            <p>
              Contact number:&nbsp;
              <a href="tel:+79999999999">+7 999 999 99-99</a>
            </p>
            <div className="flex">
              <a href="https://careers.linkedin.cn/">
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={24}
                  height={24}
                  priority={false}
                />
              </a>
              <a href="https://www.facebook.com/">
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={24}
                  height={24}
                  priority={false}
                />
              </a>
              <a href="https://x.com/">
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                  priority={false}
                />
              </a>
            </div>
            <p>© 2024 Flex Living</p>
          </div>
        </div>
        <div className="flex gap-15">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Company</p>
            <p>Home</p>
            <p>About us</p>
            <p>Our team</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Guests</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Career</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Privacy</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-2">Stay up to date</p>
          <p className="mb-4">
            Be the first to know about our newest apartment
          </p>
          <AppInput className="mb-4" placeholder="Email address" />
          <AppButton title="Subscribe" />
        </div>
      </div>
    </footer>
  );
}
