"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import CopyButton from "@/components/CopyButton";
import DownloadButton from "@/components/DownloadButton";
import ShareButton from "@/components/ShareButton";
import EditArea from "@/components/EditArea";
import LgtmImage from "@/components/LgtmImage";
import { siteMetadata } from "@/lib/constants";
import { DesignInfo } from "@/types/lgtm-data";
import { useEffect, useState } from "react";

function ImageInfoModal({ theme }: { theme: string }) {
  const url = `${siteMetadata.SITE_URL}/api/v1/lgtm-images?theme=${theme}`;

  const [info, setInfo] = useState<DesignInfo | null>(null);

  useEffect(() => {
    async function getDesignInfo(theme: string) {
      try {
        const response = await fetch(
          `${siteMetadata.SITE_URL}/api/v1/design-info?theme=${theme}`,
        );
        const { designInfo } = await response.json();
        setInfo(designInfo);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`fetch error: ${error.message}`);
          setInfo(null);
        }
      }
    }

    getDesignInfo(theme);
  }, [theme]);

  return (
    <Sheet>
      <SheetTrigger>
        <LgtmImage theme={theme} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="space-y-8 p-10">
        <SheetHeader>
          <SheetTitle>{theme}</SheetTitle>
          <ul>
            <li>desc: {info?.description}</li>
            <li>author: {info?.author}</li>
            <li>editableFields: {info?.editableFields?.join(", ")}</li>
          </ul>
        </SheetHeader>
        <LgtmImage theme={theme} />
        <div className="flex gap-4">
          <CopyButton url={url} />
          <DownloadButton url={url} />
        </div>
        <ShareButton />
        <EditArea />
      </SheetContent>
    </Sheet>
  );
}

export default ImageInfoModal;
