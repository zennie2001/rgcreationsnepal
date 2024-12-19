import PageHeader from '@/components/PageHeader'
import SectionHeader from '@/components/SectionHeader'
import holiday from '@/assets/images/holiday.svg';
import Image from 'next/image';

export default function Gallery() {
   
  return (
    <main>
  <PageHeader
                link="/holiday-list"
                title="Holiday List"
            />
            <section className='w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12'>
            <SectionHeader
                    smallTitle="Holidays"
                    title="A list of observed holidays, national, and other significant days"
                    className="lg:w-[60%] w-full text-center"
                />
 <Image
                        src={holiday}
                        alt="placeholder-image"
                        className=""
                    />
            </section>
           
    </main>
  )
}
