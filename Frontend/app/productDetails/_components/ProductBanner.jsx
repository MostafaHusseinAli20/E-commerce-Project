import Image from "next/image";
function ProductBanner({ product }) {
  return (
    <>
      {product?.attributes?.bannerCard?.data?.attributes?.url ? (
        <Image className="transition hover:scale-95 "
          src={product?.attributes?.bannerCard?.data?.attributes?.url}
          width={500}
          height={180}
          alt="Product Img"
        />
      ) : (
        <div className="w-[400] h-[225px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </>
  );
}

export default ProductBanner;
