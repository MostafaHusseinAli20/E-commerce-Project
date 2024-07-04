// import banner1 from './assets/headerBanner/banner-1.jpg'
// import banner2 from './assets/headerBanner/banner-2.jpg'
// import banner3 from './assets/headerBanner/banner-3.jpg'
import Image from 'next/image';
// import mndiaopjdnioadnuibdiyab from './assets/headerBanner/intelBanner1.jpeg'
// import losajsaihbsiuagbsaby from './assets/headerBanner/intelBanner2.jpeg'
function Hero() {
  return (
    <>
      <div class="max-w-7xl mb-10 mx-auto mt-4">
        <div id="default-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-[30rem]">
            <div class=" duration-700 ease-in-out" data-carousel-item>
              <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                
              </span>
                <Image
              src="https://res.cloudinary.com/diuvrerqo/image/upload/v1719796562/intelBanner1_zem6dw.jpg"
              width={2000}
              height={0}
              alt=''/>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
              src="https://res.cloudinary.com/diuvrerqo/image/upload/t_banner8/v1719939653/fwebp_sdnata.webp"
              width={2000}
              height={0}
              alt='Banner 2'/>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
               <Image
              src="https://res.cloudinary.com/diuvrerqo/image/upload/t_banner8/v1719940252/mz8abx8nudh1pxm0-0_0_desktop_0_1X_eja0wx.webp"
              width={2000}
              height={0}
              alt='Banner 3'/>
            </div>
          
          </div>
          <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <button
            type="button"
            class="flex z-[1200] absolute bottom-8 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="flex absolute bottom-8 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="hidden">Next</span>
            </span>
          </button>
        </div>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>
    </>
  );
}

export default Hero;
