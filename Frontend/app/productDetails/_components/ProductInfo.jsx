import { CiShoppingCart } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { FiAlertOctagon } from "react-icons/fi";
import SkeletonProudctInfo from "./SkeletonProudctInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis";
import { useContext } from "react";
import { CartContext } from "../../_context/CartContext";
function ProductInfo({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const { user } = useUser();

  const router = useRouter();

  const handelAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // Logic to add cart by user
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          product: [product?.id],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          if (res.status === 204) {
            console.log("Cart Created Successfully! No content returned.");
            setCart((oldCart) => [
              ...oldCart,
              {
                id: generateProductId(),
                product,
              },
            ]);
          } else {
            console.log("Cart Created Successfully!", res.data.data);
            setCart((oldCart) => [
              ...oldCart,
              {
                id: res?.data?.data?.id,
                product,
              },
            ]);
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  };
  

  return (
    <>
      {product?.id ? (
        <div className="mt-4">
          <h1 className="text-3xl font-bold">{product?.attributes?.title}</h1>
          <h3 className="text-sm text-gray-400">
            {product?.attributes?.brand}
          </h3>
          <p className="text-[17px] w-72 md:w-96 pt-5 ">
            {product?.attributes?.description[0]?.children[0].text}
          </p>
          <h2 className="text-[15px] my-3 text-gray-500 flex items-center gap-2">
            {product?.attributes?.instanceDelivery ? (
              <LuBadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <FiAlertOctagon className="text-red-500 h-5 w-5" />
            )}
            Eligibal For Instance Delivery
          </h2>
          <h2 className="mt-4 text-teal-600 text-2xl">
            ${product?.attributes?.price}
          </h2>

          <div  >
          <button
            onClick={handelAddToCart}
            className="bg-teal-600 mt-3 hover:bg-teal-500 p-3 rounded-lg text-white flex gap-2 items-center"
          >
            <CiShoppingCart className="text-4xl" />
            Add To Cart
          </button>
          </div>
        </div>
      ) : (
        <SkeletonProudctInfo />
      )}
    </>
  );
}

export default ProductInfo;
