import type { ImgHTMLAttributes } from "react";

/**
 * A plain `<img>` with a WebP sibling offered first.
 *
 * Every photograph in /public has a `.webp` derivative generated beside it
 * (same basename, resized to how it is actually displayed). Browsers that
 * support WebP — effectively all of them — take the smaller file; anything
 * older still gets the untouched original, so nothing is lost.
 *
 * `picture { display: contents }` in globals.css keeps the wrapper out of the
 * layout, so existing `.parent img { … }` rules and object-fit keep working.
 */
type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string };

const OPTIMISABLE = /\.(jpe?g|png|avif)$/i;

export default function Img({ src, ...imgProps }: Props) {
  const webp = src.replace(OPTIMISABLE, ".webp");

  return (
    <picture>
      {webp === src ? null : <source srcSet={webp} type="image/webp" />}
      <img src={src} {...imgProps} />
    </picture>
  );
}
