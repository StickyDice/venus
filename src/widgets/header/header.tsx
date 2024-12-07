import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-between max-w-xl w-full px-15 py-3 items-center">
        <Link href="./">
          <Image src="/logo.jpg" alt="Flex Living" width={130} height={58} />
        </Link>
        <ul className="flex items-center gap-10">
          <Link href="./">Home</Link>
          <Link href="./booking">Booking</Link>
          <Link href="./contacts">Contacts</Link>
          <Link href="./Profile">Profile</Link>
        </ul>
      </nav>
    </header>
  );
}
