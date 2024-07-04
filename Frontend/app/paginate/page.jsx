"use client"
import { useState , useEffect } from 'react'
import ProductApis from '../_utils/ProductApis'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../_components/Pagination'
 function Paginate2() {
  const [pagination , setPagination] = useState([])

  useEffect(() => {
    getProductWithPagination()
  } , [])

  const getProductWithPagination = () => {
    ProductApis.getProductPagination()
    .then(res => setPagination(res.data.data))
    .catch(err => console.log(err.messae))
  }
  return (
    <>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center'>
    {pagination.length > 0 && 
      pagination.map(paginat => (
        <Link key={paginat.id} href={`/productDetails/${paginat.id}`}>
          <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <Image 
            src={paginat?.attributes?.bannerCard?.data?.attributes?.url}
            width={350}
            height={180}
            alt='Img Product'
            className="cursor-pointer
              hover:opacity-40
                duration-200
                ease-out
                xs:h-[100px] md:h-[220px] lg:h-[300px] object-cover"/>
            <div className="text-center pt-4">
              <h3 className="mt-2 font-bold text-[17px] line-clamp-1">
                {paginat?.attributes?.title}
              </h3>
              <h5 className="pt-3 text-teal-600 text-xl ">
                ${paginat?.attributes?.price}
              </h5>
            </div>
          </div>
        </Link>
      )) 
    }
    </div>
    <div className="flex justify-center my-10">
      <Pagination/>
    </div>
    </>
  )
}
export default Paginate2;