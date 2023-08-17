"use client";

import { FC, useState } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import { MdPlayArrow } from "react-icons/md";

import { SwiperType } from "../../types/Swiper";
import Image from "next/image";
import { Loader, useWindowDimensions } from "@/shared";
import FilePlayer from "react-player/file";
import { IMedia } from "@/widgets/interface/cheats.interface";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
	media: IMedia[];
}

export const Slider: FC<Props> = ({ media }): JSX.Element => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [prevActive, setPrevActive] = useState(true);
	const [nextActive, setNextActive] = useState(false);

	const { width } = useWindowDimensions();

	const isActice = () => {
		setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
		setNextActive(
			Number(swiper?.slides?.length) ===
				Number(swiper && swiper?.activeIndex + 3)
		);
	};

	return (
		<div className="slider-wrapper" id="slider">
			{media.length ? (
				<>
					<Swiper
						onSwiper={(s) => setSwiper(s)}
						onSlideChange={() => isActice()}
						slidesPerView={width < 900 ? 1 : 2}
						spaceBetween={16}
						pagination={true}
						modules={[Pagination, Autoplay]}
						className="mySwiper"
					>
						{media.map((e, index) => (
							<SwiperSlide key={index}>
								<div className="img-slider">
									{e.type === "img" ? (
										<Image src={e.url} alt="product" width={500} height={500} />
									) : (
										<FilePlayer
											className="iframe"
											width="100%"
											style={{ borderRadius: 10 }}
											// height="472.5"
											// width="100%"
											height="100%"
											controls={true}
											// loop={true}
											// onPlay={() => setIsActive(true)}
											// onPause={() => setIsActive(false)}
											light={
												<Image
													src={e.thumbnail}
													alt="Thumbnail"
													width={500}
													height={500}
												/>
											}
											fallback={
												<div className="loaderPlayer">
													<Loader />
												</div>
											}
											url={e.url}
										/>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					{media.length > 2 && (
						<>
							<div
								className="prev"
								onClick={() => swiper && swiper.slidePrev()}
							>
								<MdPlayArrow
									style={prevActive ? { opacity: 0.2 } : {}}
									className="arrow_prev"
								/>
							</div>
							<div
								className="next"
								onClick={() => swiper && swiper.slideNext()}
							>
								<MdPlayArrow
									style={nextActive ? { opacity: 0.2 } : {}}
									className="arrow_next"
								/>
							</div>
						</>
					)}
				</>
			) : (
				"Фоток нету"
			)}
		</div>
	);
};
