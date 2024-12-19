"use client"
import PageHeader from "@/components/PageHeader";
import blogImage from '@/assets/images/blogImage.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestCard from "@/components/TestCard";
import PrimaryButton from "@/components/UI/PrimaryButton";
import { PiShareFatLight } from "react-icons/pi";
import TopTestSection from "@/components/TopTestSection";
import tips from '@/assets/images/tips.svg';
import support from '@/assets/images/support.svg';
import teacher from '@/assets/images/teacher.svg';
import handshake from '@/assets/images/handshake.svg';
import table from '@/assets/images/Table.svg';
import itels from '@/assets/images/itels.svg';
import Image from "next/image";
import FAQ from "@/sections/FAQ";



export default function TestDetails() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader
        link="/test-list"
        title="Test Preparation"
      />
      <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">

        <TopTestSection />
        <div className="lg:py-8 py-3 flex gap-7 lg:items-center items-start lg:justify-center justify-start w-full overflow-x-scroll">
        <button className="flex_center py-3 flex-shrink-0 px-5 border border-tertiary text-tertiary rounded-md   font-medium">
        IELTS Overview
                    </button>
                    <button className="flex_center py-3 px-5 flex-shrink-0  text-text rounded-md w-max font-medium">
                    Syllabus
                    </button>
                    <button className="flex_center py-3 px-5 flex-shrink-0  text-text rounded-md w-max font-medium">
                    Score
                    </button>
                    <button className="flex_center py-3 px-5 flex-shrink-0  text-text rounded-md w-max font-medium">
                    At Reaction Nepal
                    </button>
                    <button className="flex_center py-3 px-5 flex-shrink-0  text-text rounded-md w-max font-medium">
                    How to Register?
                    </button>
                    <button className="flex_center py-3 px-5 flex-shrink-0  text-text rounded-md w-max font-medium">
                    FAQs
                    </button>
          {/* <div className="px-5 py-2 rounded-md font-medium border border-tertiary text-tertiary flex items-center justify-center">
            IELTS Overview
          </div> */}
          {/* <div className="px-5 py-2 rounded-md font-medium text-text  flex items-center justify-center">
         
          </div>
          <div className="px-5 py-2 rounded-md font-medium text-text  flex items-center justify-center">
            Score
          </div>
          <div className="px-5 py-2 rounded-md font-medium text-text  flex items-center justify-center">
            At Reaction Nepal
          </div>
          <div className="px-5 py-2 rounded-md font-medium text-text  flex items-center justify-center">
            How to Register?
          </div>
          <div className="px-5 py-2 rounded-md font-medium text-text  flex items-center justify-center">
            FAQs
          </div> */}
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-5  w-full">
          <div className="lg:w-[50%] w-full">
            <h1 className="text-3xl font-semibold text-secondary">Why Reaction Nepal?</h1>
            <p className="text-text py-2">Reaction Nepal Consultancy Experts offers one-on-one IELTS tutoring to help you ace the test.</p>
            <ul className="text-text list-disc px-5">
              <li>At Reaction Nepal Consultancy, we assign highly skilled instructors that genuinely care about your success and guarantee high-quality instruction to students.</li>
              <li>Individualized one-on-one instruction.</li>
              <li>The most recent testing techniques and trends are taught to our trainers.</li>
              <li>Our entire staff of highly skilled and motivated test-prep experts at Reaction Nepal Consultancy is dedicated to helping our students succeed on these difficult exams.</li>
              <li>IELTS scores are crucial for admission to the best medical schools, and Reaction Nepal Consultancy can help you achieve the highest possible score and get into the school of your dreams. </li>
            </ul>
          </div>
          <div className="lg:w-[50%] w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
            <TestBox title={"IELTS Tips ,Techniques"} subtitle={"We have honed our strategies to tackle the IELTS over the past 10 years and as such have tips that IELTS proven to work"} image={tips} />
            <TestBox title={"Personalised Support"} subtitle={"With your IELTS Tutor, you will begin to develop your revision plan to ensure that you tackle every IELTS section"} image={support} />
            <TestBox title={"Expert IELTS Tutors"} subtitle={"All of our IELTS Tutors scored in the top 10% of the exam, and have been teaching IELTS tips and techniques"} image={teacher} />
            <TestBox title={"Top Strategy Teaching "} subtitle={"Our expert tutors will teach you trusted stategies that have equipped thousands of test-takers"} image={handshake} />
          </div>

        </div>
        <section className="lg:pt-14 pt-4 ">
          <h1 className="font-semibold text-secondary text-3xl ">IELTS Overview</h1>
          <p className="text-text py-3">IELTS is an English language exam that must be taken by foreign applicants who want to study or work in a country where English is the primary language of communication. The UK, Australia, New Zealand, the United States, and Canada are the most common nations where IELTS is recognised for university applications. The exam primarily assesses the test taker’s ability to communicate in the four core English language abilities of hearing, reading, speaking, and writing. IDP Education Australia and Cambridge English Language Assessment jointly own and administer the IELTS test.</p>
          <p className="text-secondary py-5 text-xl font-semibold">Types of IELTS Exams</p>
          <Image src={table} alt="" />
          <section>
            <h1 className="font-semibold text-secondary text-3xl py-6">IELTS Syllabus</h1>
            <p className="text-text">IELTS is an English language exam that must be taken by foreign applicants who want to study or work in a country where English is the primary language of communication. The UK, Australia, New Zealand, the United States, and Canada are the most common nations where IELTS is recognised for university applications. The exam primarily assesses the test taker’s ability to communicate in the four core English language abilities of hearing, reading, speaking, and writing. IDP Education Australia and Cambridge English Language Assessment jointly own and administer the IELTS test.</p>
            <p className="text-xl font-semibold py-3 pt-5">Listening: </p>
            <ul className="text-text list-disc px-5">
              <li>Candidates listen to the recording just once before responding to the questions. </li>
              <li>Test-takers in the paper-based format have ten minutes to move their responses to the main answer sheet. </li>
              <li>After completing the listening test in computer-based format, individuals have two minutes to go over their responses. </li>

            </ul>
            <p className="text-xl font-semibold py-3 pt-5">Reading:  </p>
            <ul className="text-text list-disc px-5">
              <li>A range of questions are employed, such as multiple-choice questions, questions that match headings, facts, sentence endings, or features, questions that require short answers, and questions that require the creation of sentences, tables, notes, summaries, flow charts, or diagrams. </li>
            </ul>
            <p className="text-xl font-semibold py-2 pt-5">Writing:</p>
            <p className="font-bold text-secondary text-sm py-1">Academic Module:</p>
            <ul className="text-text list-disc px-5">
              <li>The main focus of Task 1 is report writing, which includes describing charts and diagrams.  </li>
              <li>At least 150 words must be written by the students.  </li>
              <li>Writing an essay (discussing a point of view or debating a topic or issue) is task two. </li>
              <li>Students must write a minimum of 250 words. </li>

            </ul>
            <p className="font-bold text-secondary text-sm pb-1 pt-3">General Training Module :</p>
            <ul className="text-text list-disc px-5">
              <li>It also has 2 writing tasks. </li>
              <li>Task 1 presents a Letter Prompt (formal or informal). Students must write at least 150 words for the same. </li>
              <li>Task 2 is same as that of Academic Module. </li>
            </ul>
            <p className="text-xl font-semibold py-3 pt-5">Speaking :</p>
            <ul className="text-text list-disc px-5">
              <li>Part 1: The examiner queries the student about his or her studies, employment, interests, and other things. </li>
              <li>Part 2: The candidate has one minute to be ready and discuss a predetermined subject. </li>
              <li>Part 3: The examiner and you have a conversation.</li>

            </ul>
          </section>
          <section className="pt-10">
            <h1 className="font-semibold text-secondary text-3xl ">IELTS Score</h1>
            <Image src={itels} alt="" className="pt-3" />

          </section>
        </section>
        <section className="flex flex-col items-start w-full">
          <h1 className="font-semibold text-secondary text-3xl ">At Reaction Nepal</h1>
          <p className="text-secondary py-5 text-xl font-semibold">Course Duration</p>
          <ul className="text-text list-disc px-5">
            <li>60 Hours in 6 Weeks, Monday to Friday, with 2 hours everyday (tutorial and class work)</li>

          </ul>
          <p className="text-secondary py-5 text-xl font-semibold">Sunday Tests</p>
          <ul className="text-text list-disc px-5">
            <li>Our students are put into mock tests every Sunday to consolidate their practice and gain confidence for the real exam. </li>
            <li>They can not only get their scores reported with the instructors' comments, but they can also feel that the real exam is just another test.  </li>
            <li>We cater to standardized paper tests as per the requirements and criteria of the real test. </li>
          </ul>
          <p className="text-secondary py-5 text-xl font-semibold">Course Start Date</p>
          <ul className="text-text list-disc px-5">
            <li>Generally, new classes commence every Monday. </li>
            <li>The students, however, can get admitted anytime and join the class at their convenience, as some of the classes are rolling on all year round. </li>
          </ul>
          <p className="text-secondary py-5 text-xl font-semibold">Class Hours</p>
          <ul className="text-text list-disc px-5">
            <li>07:00-09:00</li>
            <li>08:00-10:00</li>
            <li>12:00-14:00</li>
            <li>13:00-15:00</li>
            <li>16:00-18:00</li>

          </ul>
          <p className="text-text pt-4">Please contact the office to arrange a class at your convenience if needed.</p>
          <p className="text-secondary py-5 text-xl font-semibold">Materials Provided on Admission</p>
          <ul className="text-text list-disc px-5">
            <li>1 skill-building IELTS Book, 1 Note book, 2 CDs, and 1 ballpoint pen </li>
          </ul>
          <p className="text-secondary py-5 text-xl font-semibold">Self-Access Library and Lab</p>
          <ul className="text-text list-disc px-5">
            <li>The students can access the pool of various books on their course for reference.  </li>
            <li>Our library is fully equipped with the latest books, and we always make sure they have ample resources to explore during their preparation.  </li>
            <li>Similarly, they can practice the tests in the lab as per their convenience.</li>
          </ul>
        </section>
        <section className="flex flex-col items-start w-full">
          <h1 className="font-semibold text-secondary text-3xl ">How to Register?</h1>
          <p className="pt-3">To register for an IELTS test, follow these six simple steps. You can also download the Information for candidates booklet.</p>
          <ul className="text-text list-disc px-5 py-3">
            <li>Find your nearest IELTS centre and check the test dates to find two options that suit you. Note the deadline for registering for each test date. (You can also see the cost of the test at your centre in local currency on the IELTS Worldwide Search.) </li>
            <li>Check with your organisation or on the Global Recognition System whether you need to sit an Academic or General Training test. </li>
            <li>Print out the IELTS Application Form or ask your test centre for a copy. Read the information for candidates, terms and conditions, complete the form and sign it. Please make sure you have a valid postal address and use the same name as on your passport.</li>
            <li>Organise two passport-sized photographs, less than six months old, and sign the back of each. Take a photocopy of your current passport – this must be valid and not expired. (Some centres will accept a national identity card.)</li>
            <li>If you want your results to be sent automatically to a university or educational institution, include the correct details in the section on the IELTS Application Form.</li>
            <li>Take your application into your IELTS test centre with your money. If you send it by mail, please talk to your centre about the method of payment.</li>
            <li>Once you have registered, the test centre will confirm your IELTS test date, time and venue. Please note the Speaking test can be up to 7 days before or after the test date.</li>
          </ul>
          <p className="pt-5">On the test day, you must bring the same passport or national identity card that you entered on the Application Form.</p>
          <p className="pt-5">In Nepal, basically intended test-takers register from British Council and IDP Nepal office</p>
          <ul className="text-text list-disc px-5 py-3">
            <li>http://www.ieltsidpnepal.com </li>
            <li>http://www.britishcouncil.org/nepal-exams-ielts-dates.htm</li>
            <li>https://www.extraback.in/nepal/datesheet.aspx</li>
            <li>http://www.ieltsnepal.com/</li>

          </ul>
          <p className="font-bold text-text">Notice: For our IELTS students, we facilitate their date registration. Please, contact the Front Desk Service.</p>
        </section>
      </section>
      <FAQ />
    </main>
  )
}


function TestBox({ title, image, subtitle }: any) {
  return (
    <div className="bg-bodyColor rounded-md px-8 py-5">
      <Image src={image} alt="" className="size-8" />
      <p className="font-semibold text-xl text-secondary py-3 pt-4">{title}</p>
      <p className="text-text text-sm">{subtitle}</p>
    </div>
  )
}
