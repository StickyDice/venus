import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-between max-w-xl w-full px-15 py-3 items-center">
        <Link href="/">
          <Image src="/logo.jpg" alt="Flex Living" width={130} height={58} />
        </Link>
        <ul className="flex items-center gap-10">
          <Link href="/">Главная</Link>
          <Link href="/feed">Аренда</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/login">Аккаунт</Link>
        </ul>
      </nav>
    </header>
  );
}
