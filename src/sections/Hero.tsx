import heroBg from '@/assets/images/heroBackground.jpg';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Image from 'next/image';
import { BiSearch } from "react-icons/bi";

export default function Hero() {
    return (
        <>
       {/* for mobile  */}
        <section className='lg:hidden font-jakarta'>
        <h1 className='font-normal text-[40px] leading-[56px] text-center pt-10 px-2 text-secondary'>Simplifying Your Journey To <span className='font-bold '>Study Abroad</span> </h1>
        <div className='flex flex-col items-center gap-3 px-5 mt-6'>
                    <input
                        type="text"
                        className='py-3 px-5 border border-borderColor  bg-transparent text-text placeholder-text rounded-[4px] w-full'
                        placeholder='Search university by name'
                    />
                    <p>
                        Or
                    </p>
                   <div className='w-full flex items-center gap-2 justify-center'>
                   <input
                        type="text"
                        className='py-3 px-5 border  bg-transparent border-borderColor text-text placeholder-text rounded-[4px] w-[83%]'
                        placeholder='Choose a place to study'
                    />
                    <button className='py-4 text-white flex items-center justify-center bg-tertiary w-[15%] rounded-[4px]'> 
<BiSearch className='text-xl'/>
                    </button>
                   </div>
                 
                </div>
                <Image
                src={heroBg}
                alt='image'
                className='w-full h-[440px] mt-7 object-cover'
            />
        </section>
        {/* desktop view */}
        <section className="w-full flex_center h-[90vh] relative lg:block hidden">
            <Image
                src={heroBg}
                alt='image'
                className='w-full h-full object-cover'
            />
            <div className="absolute flex flex-col justify-center gap-8 text-primary bottom-20 left-24">
                <h1 className='flex_center text-[56px]'>
                    Simplifying Your Journey To &nbsp;<span className='font-bold'>Study Abroad</span>
                </h1>
                <div className='flex items-center gap-4'>
                    <input
                        type="text"
                        className='py-2 px-6 border border-primary bg-transparent text-primary placeholder-primary rounded-md w-80'
                        placeholder='Search university by name'
                    />
                    <p>
                        Or
                    </p>
                    <input
                        type="text"
                        className='py-2 px-6 border border-primary bg-transparent text-primary placeholder-primary rounded-md w-80'
                        placeholder='Choose a place to study'
                    />
                    <PrimaryButton
                        text='Search'
                    />
                </div>
            </div>
        </section>
        </>
        
    )
}