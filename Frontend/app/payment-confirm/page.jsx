import Image from "next/image";
import gif from './assets/giphy.webp'
import Link from "next/link";
function PaymentConfirm() {
    return ( 
        <>
            <div className="flex flex-col justify-center items-center px-5 mt-4">
                <Image
                src={gif}
                height={180}
                width={180}
                alt="" />
                <h2 className="text-[24px] mt-3 font-bold">Payment Successful !</h2>
                <h2 className="text-[17px] font-medium text-center text-gray-500 mt-6">We Sent An 
                    Email With Your Order Confirmation Aloning With Digital Content
                </h2>
                <Link href="/" className="p-3 mt-6 text-white rounded-lg hover:bg-teal-500
                 bg-teal-600 font-medium"> Go To Home </Link>
            </div>
        </>
     );
}

export default PaymentConfirm;