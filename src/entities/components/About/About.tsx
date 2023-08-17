import { FC } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import { Text } from "@/shared";
import { dictionary } from "@/dictionaries/content";

interface Props {
	lang: string;
}

export const About: FC<Props> = ({ lang }): JSX.Element => {
	return (
		<div className={styles.about}>
			<div className={styles.img}>
				<Image
					src="https://hacks.byster.one/img/gear.png"
					alt="шестеренка"
					width="150"
					height="150"
				/>
			</div>
			<div className={styles.title}>
				<Text type="h1" center up fw="600">
					{dictionary[lang].mainSlideAboutTitle}
				</Text>
				<Text mt="2rem" fz="20px" lh="25px" center>
					{dictionary[lang].mainSlideAboutText}
				</Text>
			</div>
		</div>
	);
};
