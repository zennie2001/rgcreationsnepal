
import BlogDesign from "@/sections/Blog";
import NewsLetter from "@/sections/NewsLetter";
import Image from "next/image";

export default function RGMission() {
  return (
    <main>
      {/* <NewPageHeader title="Mission & Vision" /> */}
      <div className="container mx-auto py-10 bg-white">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2 relative">
            <Image
              src="/img-rg2.png"
              alt="Engineer with helmet"
              width={600}
              height={800}
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-[#051f4f] text-white px-4 py-4  rounded">
              <span className="text-5xl font-extrabold ">15+</span>
              <div className="text-xs mt-2">YEARS OF EXPERIENCE</div>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-20">
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to RG Creations Building Dreams, Crafting Excellence
            </p>
            <p className="text-gray-700 my-2">
              RG Creations stands as a beacon of innovation and quality in the
              realm of construction and business ventures. With a steadfast
              commitment to excellence, we specialize in bringing architectural
              visions to life, crafting buildings that resonate with elegance
              and functionality.
            </p>
            <p className="text-gray-700 mb-2">
              We boast a world-class international team featuring top architects
              globally. Tailoring our services to the scale and requirements of
              each project, we seamlessly integrate our international team when
              needed. Additionally, we specialize in constructing international
              chain hotels.
            </p>
            <p className="text-gray-700 mb-2">
              Our mission is to embrace cutting-edge technologies and
              sustainable practices to create innovative, environmentally
              responsible, and safe structures that meet the evolving needs of
              our clients.
            </p>
            <p className="text-gray-700">
              At RG Creations, we specialize in delivering quality construction
              for residential and commercial infrastructure projects. With a
              focus on craftsmanship, precision, and durability, we ensure each
              project meets the highest standards. Whether building your dream
              home or a robust commercial structure, we are committed to
              providing exceptional results on time and within budget. Your
              vision, our expertise—building the future together.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold md:mt-20 mb-6">Our Mission</h2>
              <p className="text-gray-700 max-w-xl mb-8">
                Our construction company endeavors to turn every vision into a
                tangible, quality construction. With innovation at the
                forefront, we aim to provide superior results on time and on
                budget that exceed the client’s expectations.
              </p>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white px-3 py-3 rounded-lg text-sm font-bold">
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.375 16.4263H4.875C4.17881 16.4263 3.51113 16.1497 3.01884 15.6574C2.52656 15.1651 2.25 14.4975 2.25 13.8013V6.80127C2.25 6.56921 2.15781 6.34665 1.99372 6.18255C1.82962 6.01846 1.60706 5.92627 1.375 5.92627C1.14294 5.92627 0.920376 6.01846 0.756282 6.18255C0.592187 6.34665 0.5 6.56921 0.5 6.80127L0.5 13.8013C0.5 14.9616 0.960936 16.0744 1.78141 16.8949C2.60188 17.7153 3.71468 18.1763 4.875 18.1763H15.375C15.6071 18.1763 15.8296 18.0841 15.9937 17.92C16.1578 17.7559 16.25 17.5333 16.25 17.3013C16.25 17.0692 16.1578 16.8466 15.9937 16.6826C15.8296 16.5185 15.6071 16.4263 15.375 16.4263ZM18.875 0.67627H6.625C5.92881 0.67627 5.26113 0.952831 4.76884 1.44511C4.27656 1.9374 4 2.60508 4 3.30127V12.0513C4 12.7475 4.27656 13.4151 4.76884 13.9074C5.26113 14.3997 5.92881 14.6763 6.625 14.6763H18.875C19.5712 14.6763 20.2389 14.3997 20.7312 13.9074C21.2234 13.4151 21.5 12.7475 21.5 12.0513V3.30127C21.5 2.60508 21.2234 1.9374 20.7312 1.44511C20.2389 0.952831 19.5712 0.67627 18.875 0.67627V0.67627ZM18.5163 2.42627L13.3713 7.57127C13.2899 7.65328 13.1931 7.71838 13.0865 7.7628C12.9799 7.80722 12.8655 7.83009 12.75 7.83009C12.6345 7.83009 12.5201 7.80722 12.4135 7.7628C12.3069 7.71838 12.2101 7.65328 12.1287 7.57127L6.98375 2.42627H18.5163ZM19.75 12.0513C19.75 12.2833 19.6578 12.5059 19.4937 12.67C19.3296 12.8341 19.1071 12.9263 18.875 12.9263H6.625C6.39294 12.9263 6.17038 12.8341 6.00628 12.67C5.84219 12.5059 5.75 12.2833 5.75 12.0513V3.62502L10.895 8.77002C11.3872 9.2616 12.0544 9.53771 12.75 9.53771C13.4456 9.53771 14.1128 9.2616 14.605 8.77002L19.75 3.62502V12.0513Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Luxurious Quality and Craftsmanship
                  </h4>
                  <p className="text-gray-600">
                    We aim to be pioneers in architectural innovation, creating
                    distinctive and appealing spaces that reflect the highest
                    standards of uniqueness and creativity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white px-3 py-3 rounded-lg text-sm font-bold">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.875 14.2499H6.585C6.70016 14.2506 6.81431 14.2285 6.92092 14.185C7.02753 14.1415 7.12449 14.0773 7.20625 13.9962L13.2613 7.93245L15.7462 5.49995C15.8283 5.4186 15.8934 5.32183 15.9378 5.2152C15.9822 5.10857 16.0051 4.99421 16.0051 4.8787C16.0051 4.76319 15.9822 4.64882 15.9378 4.54219C15.8934 4.43557 15.8283 4.33879 15.7462 4.25745L12.0363 0.503697C11.9549 0.421684 11.8581 0.356589 11.7515 0.312167C11.6449 0.267744 11.5305 0.244873 11.415 0.244873C11.2995 0.244873 11.1851 0.267744 11.0785 0.312167C10.9719 0.356589 10.8751 0.421684 10.7938 0.503697L8.32625 2.97995L2.25375 9.0437C2.17265 9.12546 2.10849 9.22242 2.06495 9.32903C2.02141 9.43564 1.99933 9.54979 2 9.66495V13.3749C2 13.607 2.09219 13.8296 2.25628 13.9937C2.42038 14.1578 2.64294 14.2499 2.875 14.2499ZM11.415 2.3587L13.8913 4.83495L12.6488 6.07745L10.1725 3.6012L11.415 2.3587ZM3.75 10.0237L8.93875 4.83495L11.415 7.3112L6.22625 12.4999H3.75V10.0237ZM16.875 15.9999H1.125C0.892936 15.9999 0.670376 16.0921 0.506282 16.2562C0.342187 16.4203 0.25 16.6429 0.25 16.8749C0.25 17.107 0.342187 17.3296 0.506282 17.4937C0.670376 17.6578 0.892936 17.7499 1.125 17.7499H16.875C17.1071 17.7499 17.3296 17.6578 17.4937 17.4937C17.6578 17.3296 17.75 17.107 17.75 16.8749C17.75 16.6429 17.6578 16.4203 17.4937 16.2562C17.3296 16.0921 17.1071 15.9999 16.875 15.9999Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Build your website</h4>
                  <p className="text-gray-600">
                    A tool that lets you build a custom website even if you know
                    nothing about web design or programming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white px-3 py-3 rounded-lg text-sm font-bold">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25 9.875H1.125C0.892936 9.875 0.670376 9.96719 0.506282 10.1313C0.342187 10.2954 0.25 10.5179 0.25 10.75V16.875C0.25 17.1071 0.342187 17.3296 0.506282 17.4937C0.670376 17.6578 0.892936 17.75 1.125 17.75H7.25C7.48206 17.75 7.70462 17.6578 7.86872 17.4937C8.03281 17.3296 8.125 17.1071 8.125 16.875V10.75C8.125 10.5179 8.03281 10.2954 7.86872 10.1313C7.70462 9.96719 7.48206 9.875 7.25 9.875ZM6.375 16H2V11.625H6.375V16ZM16.875 0.25H10.75C10.5179 0.25 10.2954 0.342187 10.1313 0.506282C9.96719 0.670376 9.875 0.892936 9.875 1.125V7.25C9.875 7.48206 9.96719 7.70462 10.1313 7.86872C10.2954 8.03281 10.5179 8.125 10.75 8.125H16.875C17.1071 8.125 17.3296 8.03281 17.4937 7.86872C17.6578 7.70462 17.75 7.48206 17.75 7.25V1.125C17.75 0.892936 17.6578 0.670376 17.4937 0.506282C17.3296 0.342187 17.1071 0.25 16.875 0.25V0.25ZM16 6.375H11.625V2H16V6.375ZM16.875 9.875H10.75C10.5179 9.875 10.2954 9.96719 10.1313 10.1313C9.96719 10.2954 9.875 10.5179 9.875 10.75V16.875C9.875 17.1071 9.96719 17.3296 10.1313 17.4937C10.2954 17.6578 10.5179 17.75 10.75 17.75H16.875C17.1071 17.75 17.3296 17.6578 17.4937 17.4937C17.6578 17.3296 17.75 17.1071 17.75 16.875V10.75C17.75 10.5179 17.6578 10.2954 17.4937 10.1313C17.3296 9.96719 17.1071 9.875 16.875 9.875ZM16 16H11.625V11.625H16V16ZM7.25 0.25H1.125C0.892936 0.25 0.670376 0.342187 0.506282 0.506282C0.342187 0.670376 0.25 0.892936 0.25 1.125V7.25C0.25 7.48206 0.342187 7.70462 0.506282 7.86872C0.670376 8.03281 0.892936 8.125 1.125 8.125H7.25C7.48206 8.125 7.70462 8.03281 7.86872 7.86872C8.03281 7.70462 8.125 7.48206 8.125 7.25V1.125C8.125 0.892936 8.03281 0.670376 7.86872 0.506282C7.70462 0.342187 7.48206 0.25 7.25 0.25V0.25ZM6.375 6.375H2V2H6.375V6.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Connect multiple apps
                  </h4>
                  <p className="text-gray-600">
                    The first business platform to bring together all of your
                    products from one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/img-rg4.png"
                  alt="Building 2"
                  width={400}
                  height={280}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/third-image.jpg"
                  alt="Building 3"
                  width={400}
                  height={280}
                  className="rounded-lg mt-4 object-cover"
                />
              </div>
              <Image
                src="/img-rg3.png"
                alt="Building 1"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <BlogDesign />
      <NewsLetter />
    </main>
  );
}
