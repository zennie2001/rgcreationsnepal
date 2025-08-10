"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight , Pause, Play } from "lucide-react";
import Link from "next/link";

// Hero slides data
const slides = [
  {
    id: 1,
    image: "/mainbanner1.jpg",
    description: "Top Architectural design services",
    title: (
      <>
      We are experts <br className="lg:hidden sm:block"/> and brand <br className="hidden lg:block"/> creators in<br className="lg:hidden sm:block"/> hospitality industry
      </>
    ),
  },
  {
    id: 2,
    image: "/mainbanner2.jpg",
    description: "Best Luxury Construction.",
    title:(
      <>
      Luxury Construction.<br className="lg:hidden sm:block"/> Timeless <br className="hidden lg:block"/> Design. <br className="lg:hidden sm:block"/> Trusted Excellence
      </>
    ) ,
  },
  {
    id: 3,
    image: "/third.jpg",
    description: "Premium Commercial architecture",
    title: (
      <>
      Where Vision Meets <br className="lg:hidden sm:block"/> Structure <br className="hidden lg:block"/> Premium <br className="lg:hidden sm:block"/> Construction in Nepal
      </>
    ),
  },
  {
    id: 4,
    image: "/main-banner4(1).jpg",
    description: "Elegant Residential architecture",
    title: (
      <>
      Top-Rated Banquet <br className="lg:hidden sm:block"/> Hall Construction Experts  <br className="hidden lg:block"/> in <br className="lg:hidden sm:block"/> Nepal – Where Elegance <br className="lg:hidden sm:block"/> Meets Engineering
      </>
    ),
  },
];

const Hero = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="relative w-full md:h-[90vh] h-[70vh] 2xl:h-[85vh] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.description}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center md:items-start mt-40 xxl:mt-40 justify-center z-30">
        <div className="text-center  text-white  mx-8  ">
          <h2 style={{ whiteSpace: "pre-line" }} className="text-2xl md:text-4xl font-bold  mb-3 leading-tight  ">
            {slides[currentSlide].title}
          </h2>

          
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
      aria-label="move left"
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronRight size={20} className="rotate-180" />
      </button>

      <button
      aria-label="move right"
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pause/Play Button */}
      <button
      aria-label="pause-play"
        onClick={togglePause}
        className="absolute left-1/2 lg:top-[37%] top-[76%]  z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors"
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
          aria-label="Pagination Dots"
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-darkGreen" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      {/* Services Section */}
      <div className="absolute hidden  md:block w-full bottom-12  px-4 z-30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Night Clubs Design */}
            <div className="text-left p-6 rounded-2xl text-white backdrop-blur-md bg-white/10 group cursor-pointer">
              <div className="mb-3 flex justify-start">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.4933 23.8898C50.2138 23.774 49.8922 23.838 49.6782 24.0518L47.4383 26.2918V11.0619C47.4383 10.6488 47.1034 10.314 46.6904 10.314H40.9439L43.0299 8.22803C43.0302 8.22773 43.0305 8.22733 43.0308 8.22704L45.0407 6.2171C45.4713 5.78647 45.7085 5.21363 45.7085 4.60456C45.7085 3.99549 45.4713 3.42284 45.0407 2.99201L42.7165 0.667789C42.2858 0.237159 41.713 0 41.1039 0C40.4949 0 39.9221 0.237159 39.4914 0.667789L37.4805 2.67872L35.0505 5.10863L29.8453 10.3139H6.63012V2.91498C6.63012 2.50187 6.29523 2.16708 5.88221 2.16708C2.63881 2.16728 0 4.80589 0 8.04949V39.8153C0 39.8706 0.00636937 39.9243 0.0177148 39.9761C0.121018 41.3523 0.716455 42.6311 1.71157 43.6018C2.77525 44.6392 4.1794 45.2106 5.66545 45.2106H28.5194L24.2151 49.5148C24.0013 49.7288 23.9373 50.0503 24.053 50.3299C24.1688 50.6093 24.4416 50.7915 24.744 50.7915H50.2071C50.6201 50.7915 50.955 50.4567 50.955 50.0436V24.5808C50.955 24.2783 50.7726 24.0056 50.4933 23.8898ZM40.5493 1.7256C40.855 1.41967 41.3531 1.41967 41.6589 1.7256L43.9832 4.04992C44.2891 4.35575 44.2891 4.85366 43.9832 5.15959L42.5012 6.64166L39.0671 3.20767L40.5493 1.7256ZM38.0094 4.26539L41.4434 7.69927L40.0711 9.07157L36.6373 5.63769L38.0094 4.26539ZM49.4593 32.9846H48.0795C47.6664 32.9846 47.3316 33.3194 47.3316 33.7325C47.3316 34.1456 47.6664 34.4804 48.0795 34.4804H49.4593V36.7341H48.0795C47.6664 36.7341 47.3316 37.0689 47.3316 37.482C47.3316 37.8952 47.6664 38.2299 48.0795 38.2299H49.4593V40.4836H48.0795C47.6664 40.4836 47.3316 40.8184 47.3316 41.2315C47.3316 41.6446 47.6664 41.9794 48.0795 41.9794H49.4593V44.2332H48.0795C47.6664 44.2332 47.3316 44.5681 47.3316 44.9811C47.3316 45.3942 47.6664 45.729 48.0795 45.729H49.4593V49.296H26.5495L34.104 41.7417C34.3961 41.4495 34.3961 40.976 34.104 40.6839C34.0705 40.6504 34.0344 40.6213 33.9967 40.5955C33.7055 40.396 33.3048 40.4254 33.0462 40.6839L30.0152 43.715H5.66555C3.39726 43.715 1.57124 41.9441 1.49939 39.6799C1.50367 39.5378 1.51472 39.3968 1.53243 39.2575C1.53253 39.2567 1.53263 39.2559 1.53273 39.2551C1.54109 39.1889 1.55114 39.1231 1.56259 39.0576C1.56388 39.0501 1.56527 39.0426 1.56657 39.0352C1.57702 38.9768 1.58876 38.9186 1.6016 38.8607C1.60518 38.8446 1.60896 38.8285 1.61274 38.8125C1.62409 38.7635 1.63633 38.7148 1.64947 38.6664C1.65663 38.6401 1.6641 38.6141 1.67176 38.5879C1.68271 38.5499 1.69405 38.512 1.7061 38.4745C1.71814 38.437 1.73098 38.3998 1.74401 38.3627C1.75307 38.3367 1.76203 38.3108 1.77178 38.285C1.78999 38.236 1.8093 38.1876 1.8292 38.1395C1.83488 38.1257 1.84045 38.1116 1.84632 38.0978C1.8719 38.0381 1.89847 37.9791 1.92654 37.9207C1.92773 37.9183 1.92882 37.9158 1.93002 37.9133C2.51501 36.7027 3.64009 35.8001 4.9903 35.5201C4.99408 35.5193 4.99787 35.5184 5.00165 35.5176C5.06355 35.505 5.12605 35.4941 5.18895 35.4841C5.1994 35.4824 5.20985 35.4803 5.22049 35.4787C5.27732 35.47 5.33474 35.4633 5.39217 35.4568C5.40829 35.455 5.42431 35.4525 5.44054 35.4509C5.49597 35.4453 5.5519 35.4417 5.60783 35.4382C5.62555 35.4371 5.64326 35.4352 5.66098 35.4343C5.73422 35.4306 5.80807 35.4287 5.88221 35.4287C6.29523 35.4287 6.63012 35.0939 6.63012 34.6808V29.258C6.63012 28.8449 6.29523 28.5101 5.88221 28.5101C5.4692 28.5101 5.13431 28.8449 5.13431 29.258V33.98C3.87138 34.1397 2.69912 34.703 1.77477 35.6057C1.67753 35.7006 1.58538 35.7993 1.49561 35.8997V8.04949C1.49561 5.8858 3.07063 4.08277 5.13421 3.72668V11.0619V26.2665V26.2666C5.13421 26.6796 5.4691 27.0145 5.88211 27.0145C6.29513 27.0145 6.63002 26.6796 6.63002 26.2666V26.2665V11.8098H28.3496L24.215 15.9443C23.923 16.2365 23.923 16.7099 24.215 17.002C24.5071 17.294 24.9807 17.294 25.2727 17.002L30.6839 11.5908C30.6841 11.5906 30.6842 11.5904 30.6844 11.5903L35.5794 6.6953L39.0132 10.1293L38.6103 10.5322C38.61 10.5324 38.6096 10.5327 38.6093 10.533L23.529 25.6135L20.0952 22.1796L23.0677 19.2071C23.3598 18.9149 23.3598 18.4415 23.0677 18.1494C22.7756 17.8574 22.302 17.8574 22.0101 18.1494L18.5086 21.6508C18.4899 21.6695 18.4724 21.6893 18.4559 21.7096C18.4505 21.7164 18.4456 21.7236 18.4404 21.7307C18.4299 21.7447 18.4195 21.7589 18.4099 21.7736C18.4044 21.7821 18.3994 21.7909 18.3942 21.7998C18.386 21.8137 18.378 21.8278 18.3708 21.8423C18.366 21.8516 18.3617 21.8611 18.3573 21.8708C18.3507 21.8855 18.3445 21.9004 18.3388 21.9153C18.3368 21.9206 18.3342 21.9256 18.3323 21.9308L16.8752 26.0585L15.8818 28.8729C15.8687 28.9103 15.8592 28.9483 15.8522 28.9866H13.3649C12.9519 28.9866 12.617 29.3214 12.617 29.7345C12.617 30.1476 12.9519 30.4824 13.3649 30.4824H34.0767C34.4898 30.4824 34.8246 30.1476 34.8246 29.7345C34.8246 29.3214 34.4898 28.9866 34.0767 28.9866H19.2169L23.778 27.3765C23.7817 27.3752 23.7853 27.3733 23.7891 27.3719C23.8068 27.3653 23.8242 27.3579 23.8414 27.3501C23.8483 27.3469 23.8552 27.3439 23.8618 27.3406C23.8798 27.3317 23.8974 27.3218 23.9147 27.3113C23.9203 27.3079 23.926 27.3048 23.9315 27.3013C23.9495 27.2898 23.967 27.2771 23.9843 27.2638C23.9885 27.2605 23.993 27.2576 23.9972 27.2542C24.018 27.2375 24.0384 27.2195 24.0577 27.2002L39.4481 11.8099H45.9424V27.7877L35.2442 38.4859C34.9521 38.7781 34.9521 39.2515 35.2442 39.5436C35.2624 39.5618 35.2814 39.579 35.301 39.595C35.4382 39.7067 35.6057 39.7627 35.7731 39.7627C35.9405 39.7627 36.1081 39.7067 36.2451 39.595C36.2647 39.5791 36.2837 39.5618 36.3019 39.5436C36.3022 39.5433 36.3019 39.5436 36.3022 39.5433L49.4593 26.3861V32.9846ZM22.1611 26.3608L20.0188 27.1171L18.5915 25.6898L19.3478 23.5475L22.1611 26.3608Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-lg 2xl:text-xl font-bold mb-2">Luxury Nightclub Construction</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 ">
                RG Creations Nepal builds high-end nightclubs with stunning interiors, vibrant lighting, and superior acoustics—designed for unforgettable nightlife experiences.

              </p>
              <Link href={'/luxury-nightclub-construction'} aria-label="Luxury Nightclub & Casino Construction">
              <button className="text-white text-sm font-medium hover:text-teal-400 transition-colors cursor-pointer ">
                View Our Nightclub Construction
              </button>
              </Link>
            </div>

            {/* Hotel Design */}
            <div className="text-left p-6 rounded-2xl text-white backdrop-blur-md bg-white/10 group cursor-pointer">
              <div className="mb-3 flex justify-start">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 58 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9958 49.6624C10.9958 50.1962 10.563 50.629 10.0292 50.629H0.966667C0.432825 50.629 0 50.1962 0 49.6624C0 49.1285 0.432825 48.6957 0.966667 48.6957H10.0292C10.563 48.6957 10.9958 49.1285 10.9958 49.6624ZM22.475 7.00821C26.2061 7.00821 29.2417 10.0438 29.2417 13.7749V15.4665C29.2417 16.0004 28.8088 16.4332 28.275 16.4332H16.675C16.1412 16.4332 15.7083 16.0004 15.7083 15.4665V13.7749C15.7083 10.0438 18.7439 7.00821 22.475 7.00821ZM17.6417 13.7749V14.4999H27.3083V13.7749C27.3083 11.1098 25.1401 8.94155 22.475 8.94155C19.8099 8.94155 17.6417 11.1098 17.6417 13.7749ZM8.03542 46.7624C8.56926 46.7624 9.00281 46.3294 9.00208 45.7944L8.95133 8.01282C8.94686 4.6539 11.6637 1.93321 15.0228 1.93321H15.4369C17.3751 1.93321 19.1515 2.82617 20.3105 4.38311C20.6293 4.81122 21.2349 4.90003 21.6631 4.58128C22.0914 4.26252 22.18 3.6569 21.8613 3.22867C20.3562 1.207 17.9545 0 15.4369 0H15.0228C10.5944 0 7.01208 3.5867 7.018 8.01548L7.06875 45.797C7.06947 46.3304 7.50206 46.7624 8.03542 46.7624ZM53.65 33.5915V27.2885C53.65 24.4344 51.3279 22.1124 48.4739 22.1124H22.0928C19.2387 22.1124 16.9167 24.4344 16.9167 27.2885V29.604C16.9167 30.1379 17.3495 30.5707 17.8833 30.5707C18.4172 30.5707 18.85 30.1379 18.85 29.604V27.2885C18.85 25.5004 20.3047 24.0457 22.0928 24.0457H34.4375V34.9207C34.4375 35.4546 34.8703 35.8874 35.4042 35.8874C35.938 35.8874 36.3708 35.4546 36.3708 34.9207V24.0457H48.4739C50.262 24.0457 51.7167 25.5004 51.7167 27.2885V33.6172C49.5459 33.8511 47.85 35.6938 47.85 37.9258V38.7874C47.85 39.3212 48.2828 39.754 48.8167 39.754C49.3505 39.754 49.7833 39.3212 49.7833 38.7874V37.9258C49.7833 36.602 50.8603 35.5249 52.1842 35.5249H53.6658C54.9897 35.5249 56.0667 36.602 56.0667 37.9258V46.2949C56.0667 47.6187 54.9897 48.6958 53.6658 48.6958H49.7833C49.7833 42.369 49.788 42.7583 49.775 42.6542C49.8487 42.0639 49.3871 41.5667 48.8167 41.5667H27.1875C26.6537 41.5667 26.2208 41.9995 26.2208 42.5333C26.2208 43.0672 26.6537 43.5 27.1875 43.5H47.85V49.6625C47.85 50.1963 48.2828 50.6292 48.8167 50.6292H53.6658C56.0557 50.6292 58 48.6848 58 46.2949V37.9258C58 35.5672 56.0934 33.5915 53.65 33.5915ZM43.8625 48.6957C42.9884 48.6957 18.5155 48.6957 17.1426 48.6957C15.8188 48.6957 14.7417 47.6186 14.7417 46.2948V37.9258C14.7417 36.602 15.8188 35.5249 17.1426 35.5249H18.6242C19.948 35.5249 21.0251 36.602 21.0251 37.9258V43.379C21.0251 43.9129 21.4579 44.3457 21.9918 44.3457C22.5256 44.3457 22.9585 43.9129 22.9585 43.379V37.9258C22.9585 35.5359 21.0141 33.5915 18.6242 33.5915H17.1426C14.7527 33.5915 12.8083 35.5359 12.8083 37.9258V46.2949C12.8083 48.6848 14.7527 50.6292 17.1426 50.6292H43.8625C44.3963 50.6292 44.8292 50.1963 44.8292 49.6625C44.8292 49.1287 44.3963 48.6957 43.8625 48.6957Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-lg 2xl:text-xl font-bold mb-2">Elegant Banquet Hall & Event venues Construction</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                We design luxurious banquet halls ideal for weddings and events—featuring seamless flow, grand entrances, and elegant finishes.

              </p>
              <Link href={'/elegant-banquet-hall-construction'} aria-label="Elegant Banquet Hall & Event venues Construction">
              <button className="text-white text-sm font-medium hover:text-teal-400 transition-colors ">
                View Our Banquet & Event Builds
              </button>
              </Link>
            </div>

            {/* Banquet Design */}
            <div className="text-left p-6 rounded-2xl text-white backdrop-blur-md bg-white/10 group cursor-pointer">
              <div className="mb-3 flex justify-start">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9237 11.0964H37.21C36.7873 11.0964 36.3819 11.2643 36.083 11.5632C35.7841 11.8621 35.6162 12.2675 35.6162 12.6901V13.5747L31.6318 9.45483C31.4832 9.30058 31.3049 9.1779 31.1078 9.09409C30.9106 9.01029 30.6986 8.9671 30.4843 8.9671C30.2701 8.9671 30.0581 9.01029 29.8609 9.09409C29.6637 9.1779 29.4855 9.30058 29.3368 9.45483L9.41493 30.0381C9.19737 30.2632 9.0509 30.5474 8.99382 30.8552C8.93674 31.163 8.97157 31.4808 9.09396 31.7689C9.21635 32.057 9.42088 32.3027 9.68203 32.4754C9.94318 32.648 10.2494 32.7399 10.5624 32.7395H13.6145V50.4063C13.6145 50.829 13.7824 51.2344 14.0813 51.5332C14.3802 51.8321 14.7855 52 15.2082 52H45.7604C46.1831 52 46.5885 51.8321 46.8874 51.5332C47.1863 51.2344 47.3542 50.829 47.3542 50.4063V32.7395H50.4062C50.7193 32.7399 51.0255 32.648 51.2866 32.4754C51.5478 32.3027 51.7523 32.057 51.8747 31.7689C51.9971 31.4808 52.0319 31.163 51.9748 30.8552C51.9178 30.5474 51.7713 30.2632 51.5537 30.0381L46.5175 24.8345V12.6901C46.5175 12.2675 46.3496 11.8621 46.0507 11.5632C45.7518 11.2643 45.3464 11.0964 44.9237 11.0964ZM46.645 29.552H45.7604C45.3377 29.552 44.9324 29.72 44.6335 30.0188C44.3346 30.3177 44.1667 30.7231 44.1667 31.1458V48.8125H16.802V31.1458C16.802 30.7231 16.6341 30.3177 16.3352 30.0188C16.0363 29.72 15.6309 29.552 15.2082 29.552H14.3237L30.4843 12.8575L36.0625 18.6269C36.283 18.8557 36.567 19.0134 36.8779 19.0796C37.1888 19.1459 37.5123 19.1176 37.807 18.9985C38.1018 18.8795 38.3541 18.675 38.5317 18.4114C38.7093 18.1478 38.804 17.8371 38.8037 17.5192V14.2839H43.33V25.4402C43.3295 25.8533 43.4895 26.2504 43.7762 26.5478L46.645 29.552Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M2.59375 48.8125C2.17106 48.8125 1.76569 48.9805 1.4668 49.2793C1.16791 49.5782 1 49.9836 1 50.4063C1 50.829 1.16791 51.2344 1.4668 51.5332C1.76569 51.8321 2.17106 52 2.59375 52H7.37501C7.7977 52 8.20307 51.8321 8.50196 51.5332C8.80085 51.2344 8.96876 50.829 8.96876 50.4063C8.96876 49.9836 8.80085 49.5782 8.50196 49.2793C8.20307 48.9805 7.7977 48.8125 7.37501 48.8125H6.57813V12.1563H7.37501C7.7977 12.1563 8.20307 11.9883 8.50196 11.6895C8.80085 11.3906 8.96876 10.9852 8.96876 10.5625C8.96876 10.1398 8.80085 9.73444 8.50196 9.43555C8.20307 9.13666 7.7977 8.96875 7.37501 8.96875H2.59375C2.17106 8.96875 1.76569 9.13666 1.4668 9.43555C1.16791 9.73444 1 10.1398 1 10.5625C1 10.9852 1.16791 11.3906 1.4668 11.6895C1.76569 11.9883 2.17106 12.1563 2.59375 12.1563H3.39063V48.8125H2.59375Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M50.4063 1C49.9836 1 49.5782 1.16791 49.2793 1.4668C48.9805 1.76569 48.8125 2.17106 48.8125 2.59375V3.39063H12.1563V2.59375C12.1563 2.17106 11.9883 1.76569 11.6895 1.4668C11.3906 1.16791 10.9852 1 10.5625 1C10.1398 1 9.73444 1.16791 9.43555 1.4668C9.13666 1.76569 8.96875 2.17106 8.96875 2.59375V7.37501C8.96875 7.7977 9.13666 8.20307 9.43555 8.50196C9.73444 8.80085 10.1398 8.96876 10.5625 8.96876C10.9852 8.96876 11.3906 8.80085 11.6895 8.50196C11.9883 8.20307 12.1563 7.7977 12.1563 7.37501V6.57813H48.8125V7.37501C48.8125 7.7977 48.9805 8.20307 49.2793 8.50196C49.5782 8.80085 49.9836 8.96876 50.4063 8.96876C50.829 8.96876 51.2344 8.80085 51.5332 8.50196C51.8321 8.20307 52 7.7977 52 7.37501V2.59375C52 2.17106 51.8321 1.76569 51.5332 1.4668C51.2344 1.16791 50.829 1 50.4063 1Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              
              <h3 className="text-lg 2xl:text-xl font-bold mb-2">Hotel, Resort & Casino Construction Experts</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                From boutique hotels to grand resorts, we create stylish, durable spaces that deliver comfort, elegance, and lasting value.
              </p>
              <Link href="/hotel-resort-construction" aria-label="Hotel & Resort Construction Experts">
              <button className="text-white text-sm font-medium hover:text-teal-400 transition-colors cursor-pointer">
                View Our Hotel & Resort Designs
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
