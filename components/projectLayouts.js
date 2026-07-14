/**
 * Matriz de layouts Bento — se cicla con index % length.
 * Añadir una variante aquí escala automáticamente el mosaico.
 */
export const layoutStyles = [
  {
    id: "horizontal",
    colSpan: "md:col-span-8",
    featured: true,
    article:
      "flex min-h-[320px] flex-col md:min-h-[380px] md:max-h-[500px] md:flex-row md:items-center md:justify-between md:gap-8",
    content: "order-2 mt-0 flex-1 md:order-1 md:w-1/2 md:max-w-[50%]",
    media:
      "order-1 mb-5 h-[200px] w-full max-h-[280px] md:order-2 md:mb-0 md:h-[240px] md:w-1/2 md:max-w-[50%] lg:h-[260px]",
    mediaAlign: "items-center justify-center",
    imageClass: "object-contain object-center",
    imageRotate: "",
    titleSize: "text-xl sm:text-2xl lg:text-[1.65rem]",
    lineClamp: "line-clamp-5 sm:line-clamp-6 md:line-clamp-7",
    imageSizes: "(max-width: 768px) 90vw, 40vw",
  },
  {
    id: "vertical-media-top",
    colSpan: "md:col-span-4",
    featured: false,
    article:
      "flex min-h-[300px] flex-col md:min-h-[340px] md:max-h-[460px]",
    content: "order-2 mt-4 flex-1",
    media:
      "order-1 mx-auto h-[160px] w-full max-w-[80%] sm:h-[180px]",
    mediaAlign: "items-center justify-center",
    imageClass: "object-contain object-center",
    imageRotate: "",
    titleSize: "text-lg sm:text-xl",
    lineClamp: "line-clamp-3 sm:line-clamp-4",
    imageSizes: "(max-width: 768px) 80vw, 25vw",
  },
  {
    id: "vertical-content-top",
    colSpan: "md:col-span-4",
    featured: false,
    article:
      "flex min-h-[300px] flex-col md:min-h-[340px] md:max-h-[460px]",
    content: "order-1 mb-4 flex-1",
    media:
      "order-2 mx-auto mt-auto h-[160px] w-full max-w-[80%] sm:h-[180px]",
    mediaAlign: "items-center justify-center",
    imageClass: "object-contain object-center",
    imageRotate: "",
    titleSize: "text-lg sm:text-xl",
    lineClamp: "line-clamp-3 sm:line-clamp-4",
    imageSizes: "(max-width: 768px) 80vw, 25vw",
  },
  {
    id: "horizontal-reverse",
    colSpan: "md:col-span-8",
    featured: true,
    article:
      "flex min-h-[320px] flex-col md:min-h-[380px] md:max-h-[500px] md:flex-row-reverse md:items-center md:justify-between md:gap-8",
    content: "order-2 mt-0 flex-1 md:order-none md:w-1/2 md:max-w-[50%]",
    media:
      "order-1 mb-5 h-[200px] w-full max-h-[280px] md:order-none md:mb-0 md:h-[240px] md:w-1/2 md:max-w-[50%] lg:h-[260px]",
    mediaAlign: "items-center justify-center",
    imageClass: "object-contain object-center",
    imageRotate: "-rotate-2 group-hover:rotate-0",
    titleSize: "text-xl sm:text-2xl lg:text-[1.65rem]",
    lineClamp: "line-clamp-5 sm:line-clamp-6 md:line-clamp-7",
    imageSizes: "(max-width: 768px) 90vw, 40vw",
  },
];

export function getLayoutForIndex(index) {
  return layoutStyles[index % layoutStyles.length];
}
