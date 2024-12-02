import heroBg from '@/assets/images/heroBackground.jpg';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="w-full flex_center h-[90vh] relative">
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
    )
}