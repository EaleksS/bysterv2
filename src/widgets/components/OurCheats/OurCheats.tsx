"use client";

import { FC } from "react";
import styles from "./OurCheats.module.scss";
import { Cheats } from "@/entities";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { Loader } from "@/shared";
import { useCheatsQuery } from "@/widgets/hooks/useCheatsQuery";

interface Props {
	lang: string;
}

export const OurCheats: FC<Props> = ({ lang }): JSX.Element => {
	const { isLoading, newData: data } = useCheatsQuery();

	return (
		<div
			className={` ${styles.our_cheats}`}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={styles.items}>
				{!isLoading ? (
					data.length &&
					data.map((e: ICheats) => <Cheats lang={lang} key={e.id} {...e} />)
				) : (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							position: "absolute",
							left: 0,
							right: 0,
						}}
					>
						<Loader />
					</div>
				)}
			</div>
		</div>
	);
};
