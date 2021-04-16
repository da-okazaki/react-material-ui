import { FC } from "react";
import { Card, YoutubeCard } from "../components/index";
import Slider from "react-slick";
import YoutubeLists from "../const/YoutubeList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Image = require("../assets/Image/ai_image.jpg");

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  verticalSwiping: true
};

const CardScreen: FC = () => {
  const listItems = YoutubeLists.map((lists) => (
    <div>
      <YoutubeCard label={lists.label} videoId={lists.videoId} />
    </div>
  ));

  return (
    <div>
      <Card image={Image} />
      <Slider {...settings}>{listItems}</Slider>
    </div>
  );
};
export default CardScreen;
