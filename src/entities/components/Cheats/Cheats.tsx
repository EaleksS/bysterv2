import { FC } from "react";
import styles from "./Cheats.module.scss";
import Image from "next/image";
import { Button, Text } from "@/shared";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";

interface Props extends ICheats {
	lang: string;
}

export const Cheats: FC<Props> = (props): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.cheats}>
			<div className={styles.bg}>
				<Image src={props.bg_img} alt="product" width={500} height={500} />
				<div className={styles.title}>
					<Image src={props.logo_img} alt="logo" width={200} height={200} />
					<Text type="h3" up fw="600">
						{props.name}
					</Text>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.detect}>
					<div
						className={`${styles.circle} ${
							props.main_hack_status && styles.detec
						}`}
					></div>
					{props.main_hack_status ? (
						<Text type="h3" up fw="600" color="#ff4040">
							{dictionary[props.lang].detect}
						</Text>
					) : (
						<Text type="h3" up fw="600">
							{dictionary[props.lang].unDetect}
						</Text>
					)}
				</div>
				<Text>с {props.main_status_time}</Text>
				<Button
					type="primary"
					radius="10px"
					onClick={() =>
						router.push(
							`/games/${props.name.toLowerCase()}-v${props.products[0].id}`
						)
					}
				>
					{dictionary[props.lang].go}
					<HiArrowNarrowRight className={styles.icon} />
				</Button>
			</div>
		</div>
	);
};
