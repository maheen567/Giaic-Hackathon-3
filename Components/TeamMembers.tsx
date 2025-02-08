import Image from 'next/image';
import React from 'react';


interface Members {
    id: number
    image: any
    chefName: string
    position: string
  }
  
  const AllTeamMembers:Members[] = [
    {
        id: 1,
        image: '/aboutPhotos/teamMember1.jpg',
        chefName: 'Mark Henry',
        position: 'Owner',
    },
    {
        id: 2,
        image: '/aboutPhotos/teamMember2.jpg',
        chefName: 'Moon Henry',
        position: 'Founder',
    },
    {
        id: 3,
        image: '/aboutPhotos/teamMember3.jpg',
        chefName: 'Tom Monrow',
        position: 'Specialist',
    },
    {
        id: 4,
        image: '/aboutPhotos/teamMember4.jpg',
        chefName: 'Lucky Helen',
        position: 'Chef',
    },
  ]

const TeamMembers = () => {
  return (
   <div className="py-[30px] px-[5%] md:px-[7%]">
   <div className="flex flex-col items-center 
     justify-center text-center">
       <h1 className="text-[24px] sm:text-[28px] md:text-[48px] font-bold font-inter text-[#222] mb-1">
           Team Members
       </h1>
       <p className="text-[14px] md:text-[16px] text-[#414141] w-full sm:w-[90%] md:w-[580px] mb-8 font-[cursive] leading-snug">Our skilled and passionate team works together to ensure exceptional food quality, outstanding service, and a seamless experience for our customers.</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 lg:w-[100%] mb-5">
       
        {AllTeamMembers.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.chefName}
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover rounded-[6px] cursor-zoom-in transition-transform ease-linear duration-200 hover:scale-105"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col items-center p-4">
              <h1 className="font-bold text-lg">{item.chefName}</h1>
              <p className="font-normal font-mono text-sm text-[#414141]">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
   </div>
 </div>      
  )
}

export default TeamMembers
