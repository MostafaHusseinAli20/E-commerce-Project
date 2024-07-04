import Link from "next/link";
import Image from "next/image";
function MouseItem({ product }) {
  return (
    <>
      <Link href={`/productDetails/${product.id}`}>
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <Image
            src={product?.attributes?.bannerCard?.data?.attributes?.url}
            height={180}
            width={350}
            alt="Img Product"
            className="cursor-pointer 
                hover:opacity-40
                duration-200
                ease-out
                rounded-lg xs:h-[100px] md:h-[220px] lg:h-[300px] object-cover"
          />
          <div className="text-center pt-4">
            <h1 className="mt-2 font-bold text-[17px] line-clamp-1">
              {product?.attributes?.title}
            </h1>
            <h5 className="pt-3 text-teal-600 text-xl ">
              ${product?.attributes?.price}
            </h5>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MouseItem;
