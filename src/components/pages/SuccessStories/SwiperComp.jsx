import { styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SuccessStoriesList from "./SuccessStoriesList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const SwiperStyle = styled(Box)(({ theme }) => ({
  ".swiperContainer": {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  ".textStyle": {
    color: "#ffccbc",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "18px",
    textAlign: "center",
  },
}));

function SwiperComp() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SwiperStyle>
      <Box className="swiperContainer">
        <Swiper
          slidesPerView={isMatch ? 1 : 3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={2000}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {SuccessStoriesList.map((userStory, indx) => {
            return (
              <SwiperSlide key={indx}>
                <Box sx={{ padding: "25px 5px" }}>
                  <Typography className="textStyle">
                    {userStory.story}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </SwiperStyle>
  );
}

export default SwiperComp;
