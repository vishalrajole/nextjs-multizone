import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(import("../components/Header"));

export default function Home() {
  console.log("BLOG_URL: ", process.env.BLOG_URL);
  console.log("process: ", process.env);

  return (
    <div>
      <Header />
      <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <Image
        src="/static/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={160}
      />
    </div>
  );
}
