import type { ImageMetadata } from 'astro';

/**
 * Extra pixels needed when `object-fit: cover` crops a wider source into a narrower box:
 * the image is scaled to the box height, so its rendered width is box width × (source ratio / box ratio).
 */
export const coverFactor = (img: ImageMetadata, boxRatio: number) =>
  Math.max(1, +(img.width / img.height / boxRatio).toFixed(2));

/**
 * Build a `sizes` attribute from [media condition, rendered CSS width] pairs ('' = default slot),
 * optionally scaled by a cover factor. Widths were measured on the live site (1350/1440 px desktop, 412 px mobile).
 */
export const sizes = (slots: Array<[string, string]>, factor = 1) =>
  slots.map(([mq, w]) => `${mq ? `${mq} ` : ''}${factor === 1 ? w : `calc(${w} * ${factor})`}`).join(', ');
