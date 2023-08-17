import { FC } from "react";
import styles from "./Accommodation.module.scss";
import Image from "next/image";
import { Text } from "@/shared";
import { dictionary } from "@/dictionaries/content";

interface Props {
	lang: string;
}

export const Accommodation: FC<Props> = ({ lang }): JSX.Element => {
	return (
		<div className={styles.accommodation}>
			<div className={styles.title}>
				<Text type="h1" center up fw="600">
					{dictionary[lang].mainSlideTitle}
				</Text>
				<Text mt="2rem" fz="20px" lh="25px" center>
					{dictionary[lang].mainSlideText}
				</Text>
			</div>
			<div className={styles.slider_img}>
				<Image
					src="https://hacks.byster.one/static/media/4a.b14eb4a8c94bf4aa9963.png"
					alt="img"
					width="250"
					height="600"
				/>
			</div>
		</div>
	);
};
