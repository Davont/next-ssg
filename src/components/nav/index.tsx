import { useRouter } from "next/router";
import Link from "next/link";
export default function Nav() {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <div>
      <Link href={"/"}>
        <div>Home</div>
      </Link>
      <Link href={"/about"}>
        <div>about</div>
      </Link>
    </div>
  );
}
