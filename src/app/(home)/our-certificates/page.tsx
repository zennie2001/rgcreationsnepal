"use client"
import PageHeader from '@/components/PageHeader'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import "react-image-gallery/styles/css/image-gallery.css";
export default function OurCertificate() {
    const images=[
        {
            "name":"PIER",
            "subtile":"6 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/cef1/d40a/48be911d2cf650219e8c3427bdc2566a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EeWY9MmWJ05LigowKHeLSTFZ6nL2Im1-ykioipd8t1wfsoJ03OgeM1QbpNfRcQVThP00ioSDMFzqZDSJ5gtlApYSMWJIvYjBhHsNQZfhATyvrXbhouaZOGnTuQU2iMfPBovJU629E2u6MxUfX5URIfUCR~ggBythw~I7TZ9c0Sr-E7mDYlOcHk780h80qXKhBdIq7FoglRzErZZDbxADA7IW60S9XPQdbJQYJmJfezmSUHYDHtCJb1zwDyWoWKRApzzc4SlKO~B1XrLE8gZcDuvwBkOxPSeFzufK7iIhd6lV9UwNuIaje2FmEo8wtXThTd8fRNulguUR91Wq3SYWcA__"
        },
        {
            "name":"ICEF",
            "subtile":"2 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/db06/d527/2c30f4eca5ff39f6bea7d8735c7a25da?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOOzbZysvUWlGJ2BXinprqosR3IjFin1-oGpeqz2TADFAwyNlo19BrgmIxc3mwdAht~mTOEp42tYUVIO8FVkoWuvj~0lHUZQJe8QWFdPK6dj40a1dMbbh0lZHcgIcIzQK69yPflkqFnP598b2VPaKUMNk5QSbUSQKmMfVKoq1ub3PeCYR1olrCTPZRnBr0xCWzlijmkPcykEEc9haPsHM7Z12cP6OwEdeTm-JETCFqMyF1n29FaOY1W3xxU1FfLUJVd1HNIZvyceb866QDkCX2LvubObMi4VRKPIabPL~G~0CizGe7VxdcDcceys8sHxzj7EFRiFlnOPP14q1G4UYQ__"
        },
        {
            "name":"ICEF Agency Certificate",
            "subtile":"4 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/5d34/22b3/ab3f81cb491b431c9b56dfc16b4c7848?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6qI7Jt--nvB~w32qbsy1oC25~pp9yy0ALnN91PUt2z2Xe3bV7h6dFHPGgGBDlnrtujBj4V3YuPyN9i3dIOmY5~GkSF5QhJb5MKJctR9t~1lsuRG41hzP2PDzqLdbLvFMxXCjMxCZ-6xQJL8GD5~EyIORmPUN3flzD8U~P~Idan3rYzN66aMe-seXLrB0-PDHQ1-eQxGcU8mSXahyBzhdQSfay0g01e53kFVLh0CusWQZid9rQL~EPUazt2l2Z6GBwo1WUUNUH8KcvR2aUrkIJzPqzPTK1rElygbj6iVemFMwbwWBz9cGN1jmWZsEWzUTDg73JI-KnfI8e7JcjUuNw__"
        },
        {
            "name":"PIER",
            "subtile":"6 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/cef1/d40a/48be911d2cf650219e8c3427bdc2566a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EeWY9MmWJ05LigowKHeLSTFZ6nL2Im1-ykioipd8t1wfsoJ03OgeM1QbpNfRcQVThP00ioSDMFzqZDSJ5gtlApYSMWJIvYjBhHsNQZfhATyvrXbhouaZOGnTuQU2iMfPBovJU629E2u6MxUfX5URIfUCR~ggBythw~I7TZ9c0Sr-E7mDYlOcHk780h80qXKhBdIq7FoglRzErZZDbxADA7IW60S9XPQdbJQYJmJfezmSUHYDHtCJb1zwDyWoWKRApzzc4SlKO~B1XrLE8gZcDuvwBkOxPSeFzufK7iIhd6lV9UwNuIaje2FmEo8wtXThTd8fRNulguUR91Wq3SYWcA__"
        },
        {
            "name":"ICEF",
            "subtile":"6 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/5d34/22b3/ab3f81cb491b431c9b56dfc16b4c7848?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6qI7Jt--nvB~w32qbsy1oC25~pp9yy0ALnN91PUt2z2Xe3bV7h6dFHPGgGBDlnrtujBj4V3YuPyN9i3dIOmY5~GkSF5QhJb5MKJctR9t~1lsuRG41hzP2PDzqLdbLvFMxXCjMxCZ-6xQJL8GD5~EyIORmPUN3flzD8U~P~Idan3rYzN66aMe-seXLrB0-PDHQ1-eQxGcU8mSXahyBzhdQSfay0g01e53kFVLh0CusWQZid9rQL~EPUazt2l2Z6GBwo1WUUNUH8KcvR2aUrkIJzPqzPTK1rElygbj6iVemFMwbwWBz9cGN1jmWZsEWzUTDg73JI-KnfI8e7JcjUuNw__"
        },
        {
            "name":"ICEF Agency Certificate",
            "subtile":"12 Photos",
            "images":"https://s3-alpha-sig.figma.com/img/db06/d527/2c30f4eca5ff39f6bea7d8735c7a25da?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOOzbZysvUWlGJ2BXinprqosR3IjFin1-oGpeqz2TADFAwyNlo19BrgmIxc3mwdAht~mTOEp42tYUVIO8FVkoWuvj~0lHUZQJe8QWFdPK6dj40a1dMbbh0lZHcgIcIzQK69yPflkqFnP598b2VPaKUMNk5QSbUSQKmMfVKoq1ub3PeCYR1olrCTPZRnBr0xCWzlijmkPcykEEc9haPsHM7Z12cP6OwEdeTm-JETCFqMyF1n29FaOY1W3xxU1FfLUJVd1HNIZvyceb866QDkCX2LvubObMi4VRKPIabPL~G~0CizGe7VxdcDcceys8sHxzj7EFRiFlnOPP14q1G4UYQ__"
        },
      
    ];
   


 
  return (
    <main>
  <PageHeader
                link="/our-certificates"
                title="Our Certificates"
            />
            <section className='w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12'>
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full'>
{images.map((e,i)=>{
    return <div key={i} className='flex flex-col items-center w-full '>
        <div className='lg:h-[222px] h-[500px]  md:w-[395px] w-full p-3 rounded-md border border-borderColor'>
<img src={e.images} alt="" className='object-contain h-full w-full'/>

        </div>
<p className='text-base font-bold text-secondary py-2'>{e.name}</p>

    </div>
})}
</div>
<div className="flex items-center gap-2">
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowBack />
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        1
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        2
                    </button>
                    <p className="flex_center p-2 rounded-md text-sm size-10">
                        ....
                    </p>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        5
                    </button>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowForward />
                    </button>
                </div>
            </section>
           
    </main>
  )
}
