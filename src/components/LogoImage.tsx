import Image from "next/image";
import logoImage from "../../public/logo.svg";
import { cn } from "@/lib/shadcn-utils";

export default function LogoImage({ className }: { className?: string }) {
  return (
    <span className="inline-block align-bottom">
      <Image
        src={logoImage}
        alt="LGTM logo image"
        className={cn("w-10", className)}
      />
    </span>
  );
}
