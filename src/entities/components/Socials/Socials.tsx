import { FC } from "react";
import styles from "./Socials.module.scss";
import Image from "next/image";
import { BsDiscord, BsYoutube } from "react-icons/bs";
import { Text } from "@/shared";
import { dictionary } from "@/dictionaries/content";

interface Props {
	lang: string;
}

export const Socials: FC<Props> = ({ lang }): JSX.Element => {
	return (
		<div className={styles.socials}>
			<div className={styles.img}>
				<Image
					src="https://hacks.byster.one/img/gear.png"
					alt="шестеренка"
					width="150"
					height="150"
				/>
			</div>
			<Text type="h1" center up fw="600" mt="50px">
				{dictionary[lang].mainSlideSocial}
			</Text>
			<ul className={styles.socials_items}>
				<li>
					<a
						href="https://discord.gg/byster"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#7289da" }}
					>
						<BsDiscord />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/@bysterwow5133"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#FF0000" }}
					>
						<BsYoutube />
					</a>
				</li>
			</ul>
		</div>
	);
};
