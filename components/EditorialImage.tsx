import Image from "next/image";
import { verdantiaAssets, type VerdantiaAssetKey } from "@/lib/assets";

type EditorialImageProps = {
  assetKey: VerdantiaAssetKey;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  decorative?: boolean;
};

export function EditorialImage({
  assetKey,
  className,
  imageClassName,
  sizes = "(max-width: 760px) 100vw, (max-width: 1120px) 92vw, 60vw",
  priority,
  fill = true,
  decorative,
}: EditorialImageProps) {
  const asset = verdantiaAssets[assetKey];
  const isPriority = priority ?? asset.loading === "priority";
  const shouldDecorate = decorative ?? asset.role === "decorative";
  const alt = shouldDecorate ? "" : asset.alt;

  const image = (
    <Image
      className={imageClassName}
      src={asset.src}
      alt={alt}
      width={fill ? undefined : asset.width}
      height={fill ? undefined : asset.height}
      fill={fill || undefined}
      priority={isPriority}
      loading={isPriority ? undefined : "lazy"}
      sizes={sizes}
    />
  );

  if (!className) return image;

  return (
    <div className={className} aria-hidden={alt === "" ? true : undefined}>
      {image}
    </div>
  );
}
