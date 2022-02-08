import React from "react";
import { Title } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper/core";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/pagination/pagination.min.css";

import { data } from "../data";

import "swiper/swiper.min.css";
import "../swiper.css";

import Member from "./Member";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const Team = () => {
  return (
    <div className="py-16 min-h-screen bg-white  " id="team">
      <Title title="Notre équipe" des1="Les membres bureaux de notre équipe" />
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-8 lg:p-20 p-12 gap-8 max-w-6xl mx-auto ">
        {data.officeMembers?.map((member) => (
          <Member key={member.id} {...member} />
        ))}
      </div>
      <div>
        <h1 className="text-center font-bold text-gray-700 mb-12 capitalize">
          Les conseillers de notre équipe{" "}
        </h1>
        <Swiper
          pagination
          navigation
          scrollbar
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
        >
          {data.advisors?.map((member) => (
            <SwiperSlide>
              <Member key={member.id} {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h1 className="text-center font-bold text-gray-700 mt-12 capitalize">
          Les Membres fondateurs{" "}
        </h1>
        <Swiper
          pagination
          navigation
          scrollbar
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
        >
          {data.members?.map((member) => (
            <SwiperSlide>
              <Member key={member.id} {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
