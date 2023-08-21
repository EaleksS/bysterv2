"use client";

import Image from "next/image";
import classes from "./Download.module.css";
import Link from "next/link";

const Download = () => {
	return (
		<div className="container">
			<div className={classes.title}>
				<Link href="/" className={classes.imgLink}>
					<Image
						className={classes.imgLogo}
						src="/logo.png"
						alt="logo"
						width={350}
						height={100}
					/>
				</Link>
				<a className={classes.link} href="./logo.png" download rel="noopener">
					Скачать
				</a>
			</div>
			<div className={classes.content}>
				<h1>ИНСТРУКЦИЯ</h1>
				<div className={classes.instruction}>
					<h3>Загрузка</h3>
					<div>
						<h2>1</h2>

						<p>
							Покупка происходит внутри лаунчера. Скачать и распаковать Byster в
							любом удобном для вас месте.
						</p>
						<Image
							src="/first_image.png"
							alt="first_image"
							width={939}
							height={522}
						/>
					</div>
				</div>
				<div className={classes.instruction}>
					<h3>Регистрация</h3>
					<div>
						<Image
							src="/second_image.png"
							alt="first_image"
							width={340}
							height={470}
						/>
						<p>
							Перед вами откроется окно регистрации. Придумайте логин и пароль и
							последним пунктом укажите откуда вы узнали о бустере.
						</p>
						<h2>2</h2>
					</div>
				</div>
				<div className={classes.instruction}>
					<h3>Запуск</h3>
					<div>
						<h2>3</h2>
						<p>
							Для начала стоит запустить Byster, потом следует нажать кнопку
							'Загрузить'
						</p>
						<Image
							src="/third_image.png"
							alt="first_image"
							width={971}
							height={582}
						/>
					</div>
				</div>
				<div className={classes.instruction}>
					<h3>Настройка игрового меню</h3>
					<div>
						<Image
							src="/fourth_image.png"
							alt="first_image"
							width={973}
							height={580}
						/>
						<p>
							После того как вы запустили Byster в игре, произведите настройки,
							а именно раставте нужные вам галочки напротив функций которые вам
							нужны и наслаждайтесь игрой вместе с Byster
						</p>
						<h2>4</h2>
					</div>
				</div>
				<div data-aos="fade-up" className={classes.instruction}>
					<h3>Видеоинструкция</h3>
					<div className={classes.iframe}>...</div>
				</div>
			</div>
		</div>
	);
};

export default Download;
