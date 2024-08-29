import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/shadcn-ui/button";
import { GITHUB_URL } from "@/lib/constants";
import LogoImage from "@/components/LogoImage";

function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      asChild
      variant="ghost"
      className="flex items-center gap-8 px-0 text-lg hover:bg-transparent hover:opacity-60"
    >
      {children}
    </Button>
  );
}

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-32 w-full items-center justify-between px-9 font-medium">
      <HeaderButton>
        <Link href="/">
          <LogoImage />
        </Link>
      </HeaderButton>

      <HeaderButton>
        <a href={GITHUB_URL} target="_blank">
          <SiGithub size={40} />
        </a>
      </HeaderButton>
    </header>
  );
}