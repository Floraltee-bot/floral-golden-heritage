"use client"
import Card from '@/component/Card';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState, useRef } from 'react';



const galleryImages =[
    "/image/gal5.jpeg",
    "/image/gal 2.jpeg",
    "/image/gal 3.jpeg",
   "/image/gal1.jpeg",
   "/image/communities.jpeg",
   "/image/prefects.jpeg",
   "/image/gal6.png",
   "/image/gal7.png",
   "/image/next1.png",
   "/image/next2.png",
   "/image/next3.png",
   "/image/next4.png",
    ]

    const events = [
      { title: "Annual Cultural Day", date: "April 20, 2025" },
      { title: "Inter-House Sports", date: "May 15, 2025" },
    ];

    const schoolNews = [
      { image: "/image/communities.jpeg", title: "Community Services" },
      { image: "/image/teachers_day.jpg", title: "WORLD TEACHERS' DAY" },
      { image: "/image/prefects.jpeg", title: "FLORAL PREFECTS 2024/2025" },
    ];

    const activities = [
      { title: "Sports & Athletics", img: "/image/alter.jpg" },
      { title: "Music & Arts", img: "/image/music.jpg" },
      { title: "STEM & Robotics", img: "/image/robot.jpg" },
      { title: "Leadership & Clubs", img: "/image/sports.jpg" },
      { title: "Sports & Athletics", img: "/image/activies_3.jpeg" },
      { title: "Music & Arts", img: "/image/music.jpg" },
      { title: "STEM & Robotics", img: "/image/science_activities.jpg" },
      { title: "Leadership & Clubs", img: "/image/activities_2.jpeg" },
    ];

    // const testimonials = [
    //   { name: "Mrs. Johnson", text: "Floral Golden Heritage has transformed my child education!", img: "/image/parent_1.jpg" },
    //   { name: "Mr. Ade", text: "Excellent teachers and a great learning environment!", img: "/image/parent.jpg" },
    //   { name: "Mr. Lawson", text: " Floral has really help my child come out from her shell", img: "/image/parent_2.jpg" },
      
    // ];

    const testimonials = [
      {
        id: 1,
        name: "Mrs. Adebola Johnson",
        role: "Parent",
        message: "Floral Golden Heritage has provided an amazing learning experience for my child!",
        image: "/image/parent_1.jpg",
      },
      {
        id: 2,
        name: "Janet Adeyemi",
        role: "Student",
        message: "I love my school! The teachers are great, and the activities are fun!",
        image: "/image/test_4.jpg",
      },
      {
        id: 3,
        name: "Mr. Chinedu Okafor",
        role: "Parent",
        message: "The best decision I made was enrolling my child in this school.",
        image: "/image/parent_2.jpg",
      },
      {
        id: 4,
        name: "Grace Uchenna",
        role: "Student",
        message: "The extracurricular activities are exciting, and I have made great friends!",
        image: "/image/test_3.jpg",
      },
      
      {
        id: 5,
        name: "Abiola Adebayo",
        role: "Student",
        message: "Floral has really help me come out from my shell and be more confident.",
        image: "/image/test_1.jpg",
      },
      
      {
        id: 6,
        name: "Mr. James",
        role: "Parent",
        message: "Floral Golden Heritage has transformed my child education!",
        image: "/image/parent.jpg",
      },
      
      {
        id: 7,
        name: "Mrs. Micheal",
        role: "Parent",
        message: "Excellent teachers and a great learning environment!",
        image: "/image/parent_4.jpg",
      },
      
      {
        id: 8,
        name: "Elijah Grace",
        role: "Student",
        message: "The extracurricular activities are exciting, and I have made great friends!",
        image: "/image/student_1.jpg",
      },
      

    ];


const Outlet = () => {

  const achievementsRef = useRef(null);
  const isInView = useInView(achievementsRef, { once: true });

  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    awards: 0,
  });

  const targetStats = {
    students: 1500,
    teachers: 50,
    awards: 30,
  };

  useEffect(() => {
    if (isInView) {
      let interval = setInterval(() => {
        setStats((prev) => ({
          students: Math.min(prev.students + 30, targetStats.students),
          teachers: Math.min(prev.teachers + 1, targetStats.teachers),
          awards: Math.min(prev.awards + 1, targetStats.awards),
        }));
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView]);
  
  return (
    <section className='py-12 bg-white '>
        <div className='container mx-auto px-6 text-center mt-56 bg-stone-100'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-gray-800 mb-10  pt-10"
        >
          Our Programs
        </motion.h2>

        <motion.div
        className='grid md:grid-cols-3 pb-10 gap-8'
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0},
            visible: {
                opacity:1,
                transition: { staggerChildren: 0.3 }
            }
        }}
        >
            <Card 
            imageSrc="/image/presch.jpeg"
            title="PRE-SCHOOL"
            description="The mode of learning in the Pre-school classes includes sand play, water play, scribbling, colouring, tracing, rhymes, personal, social, and emotional development etc."
           link="../School" 
                   
            />
             <Card 
            imageSrc="/image/nursery.jpg"
            title="NURSERY"
            description="The mode of learning IN NURSERY includes engaging, interactive, and play-based, ensuring young learners develop essential skills in a nurturing environment."
           link="../School"         
            />
             <Card 
            imageSrc="/image/primary.jpg"
            title="PRIMARY"
            description="In the Primary Section, the mode of learning focuses on developing critical thinking, creativity, and a strong academic foundation while incorporating interactive and technology-driven approaches."
           link="../School"         
            />
        </motion.div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-40 mt-16 bg-stone-100 '>
        <div className='flex flex-col p-10 items-center'> 
        <div className='w-48 h-48 md-w-60 md:h-60 rounded-full overflow-hidden border-4 border-emerald-600'>
            <Image
            src="/image/dad.jpg"
            alt="Head of School"
            width={240}
            height={240}
            className="w-full rounded-full h-full object-cover" 
            />
        </div>
        <h3 className='mt-4  text-lg font-bold text-[#2c6e49]'>
            OLADEJI, SAMUEL OKANLAWON
        </h3>
        <h4>Proprietor, Floral Golden Heritage Schools.</h4>
        </div>
       
        <div className='md:w-3/5 text-center md:text-left'>
        <h2 className=' text-3xl font-bold text-[#2c6e49]'>
            WELCOME TO FLORAL GOLDEN HERITAGE
        </h2>
        <p className="mt-4 text-gray-700">
              It is my pleasure to welcome you to Floral Golden Heritage. A school dedicated to nurturing the next generation with quality education, values, and leadership skills.
            </p>
            <p className="mt-2 text-gray-700">
              We prepare and equip children for life, paying attention to their physical, spiritual, and emotional needs. Our aim is to provide a strong foundation where every child can thrive.
            </p>
            <div className='mt-6 mb-6' >
            <a href="../HeadSchool" className='px-6 py-3  bg-emerald-600 text-white rounded-md shadow-md hover:bg-green-700'>
            Learn More 
            </a>
            </div>
             </div>
             </div>
            <div className=' bg-emerald-600 py-16'>
            <div className='container mx-auto px-6 text-center'>
            <h2 className='text-3xl font-extrabold text-white  mb-12'>
            TAKE A SCHOOL TOUR
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden  w-full "
            >
              <Image
                src={src}
                alt={'Gallery image ${index + 1}'}
                width={300}
                height={200}
                className="w-full rounded-lg  object-cover"
                layout='responsive'
              />
            </motion.div>
            ))}
            </div>
            </div>
            </div>

            <div className='bg-white py-16'>
            <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Extracurricular Activities
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold">{activity.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>

     <div className='bg-[#fdfbf3] py-16 px-6'>
     <div ref={achievementsRef} className="text-center mt-16">
        <h2 className="text-3xl font-bold text-green-700">Our Achievements</h2>
        <div className="flex justify-center gap-10 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 shadow-lg rounded-md w-48"
          >
            <p className="text-4xl font-bold text-green-700">{stats.students}+</p>
            <p className="text-gray-600">Students Enrolled</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 shadow-lg rounded-md w-48"
          >
            <p className="text-4xl font-bold text-green-700">{stats.teachers}+</p>
            <p className="text-gray-600">Qualified Teachers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 shadow-lg rounded-md w-48"
          >
            <p className="text-4xl font-bold text-green-700">{stats.awards}+</p>
            <p className="text-gray-600">Awards Won</p>
          </motion.div>
        </div>
      </div>
     </div>

     <div className="max-w-6xl mx-auto px-6 text-center">



     <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        School News and Upcoming Events
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F5DC] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-lg mt-2 text-green-700">{event.date}</p>
            </motion.div>
          ))}
        </div>

      <div className="overflow-x-auto scroll-smooth snap-x flex gap-6 pt-7 pb-4">
        {schoolNews.map((news, index) => (
          <div
            key={index}
            className="snap-center flex-none w-[300px] md:w-[400px]"
          >
            <div className="relative h-60 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={news.image}
                alt={news.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-700 italic text-center">
              {news.title}
            </p>
          </div>
        ))}
      </div>
          
        
        
      </div>


     {/* <div className='bg-white py-16 px-6'>
     <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">What Parents Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#f5f5dc] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full" />
              <p className="mt-4 text-lg italic">"{testimonial.text}"</p>
              <h4 className="mt-2 font-bold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
     </div> */}

<div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-8">What Our Parents & Students Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic">"{testimonial.message}"</p>
                <h3 className="font-semibold mt-4 text-green-700">{testimonial.name}</h3>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Our Location
      </h2>

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.691582747208!2d3.258076274046109!3d6.560560422733528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ff8e48a2765%3A0x4f8cbda859e29de7!2s11%20Gabriel%20Adeyemi%20St%2C%20Ikotun%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742067316293!5m2!1sen!2sng"
       width="100%" 
       height="450"
        style= {{ border:0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </div>
      
    </section>
    
  );
};

export default Outlet;
