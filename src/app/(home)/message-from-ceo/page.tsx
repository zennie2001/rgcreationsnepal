import PageHeader from '@/components/PageHeader'
import leftquote from '@/assets/images/leftquotes.svg';
import rightquote from '@/assets/images/rightquotes.svg';
import ceoimage from '@/assets/images/ceo.svg';
import mobileceoimage from '@/assets/images/mobileceo.svg';
import Image from 'next/image';

export default function MessageFromCeo() {

    return (
        <main>
            <PageHeader
                link="/Message From CEO"
                title="Message From CEO"
            />
            <section className='w-full flex  flex-col lg:pl-10 pl-0 lg:px-0 px-4  gap-12'>

                <div className='flex lg:flex-row flex-col gap-5 items-center  px-2 py-5'>
                    <h1 className='font-semibold text-3xl text-secondary lg:hidden inline'>Message From CEO</h1>
                    <Image
                        src={mobileceoimage}
                        alt="placeholder-image"
                        className="lg:hidden inline"
                    />
                    <div className='flex items-start lg:w-[55%] w-full gap-3'>
                        <Image
                            src={leftquote}
                            alt="placeholder-image"
                            className="lg:inline hidden"
                        />
                        <div className='w-full'>
                            <p>
                                It gives me immense pleasure to share with you the fact that Reaction Nepal Consultants has fully grown and developed into a full-fledged institution of its own kind, rendering specific academic and professional needs of our clientele in the fields of test preparation, counseling, processing, student placement, and various other services. Regarding test preparation such as IELTS and TOFEL-iBT, RNC has set up outstanding records, breaking all older limits in recent years. From this year on, CAE and various other professional English course packages are going to be introduced, which, we expect, will sincerely be instrumental to our learners as an asset in order to sharpen their diverse English skills.
                            </p>
                            <p className='mt-3'>Moreover, RNC has started a new initiative this year as its social facet, which will be called Corporate Social Responsibility (CSR). The Reaction Nepal CSR program will be frequently launched to enhance the educational quality in public primary schools in order to bridge the gap between the public and private schooling systems in the school level. Besides, RNC will constantly keep on involving itself in contributing to the community and society in general through various activities, ensuring the social re-engineering process of Nepali society. I wish you all the best with more innovative academic and professional services in the days to come!</p>
                            <div className='flex justify-end'>
                                <Image
                                    src={rightquote}
                                    alt="placeholder-image"
                                    className="lg:inline hidden"
                                />
                            </div>
                            <div className='flex flex-col items-start justify-start pt-10'>
                                <p className='font-semibold text-xl text-secondary'>Raju P. Khanal</p>
                                <p className='text-text'>CEO</p>
                                <p className='text-text'>Reaction Nepal Consultancy</p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={ceoimage}
                        alt="placeholder-image"
                        className="w-[40%] lg:inline hidden"
                    />
                </div>

            </section>

        </main>
    )
}
