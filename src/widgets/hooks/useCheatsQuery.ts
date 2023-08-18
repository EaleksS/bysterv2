import { getCheats } from "../services/cheats.service";
import { ICheats } from "../interface/cheats.interface";
import { useQuery } from "@tanstack/react-query";

export const useCheatsQuery = () => {
	const { data, isLoading } = useQuery({
		queryKey: [`cheats`],
		queryFn: () => getCheats.getCheatsList(),
		keepPreviousData: true,
	});

	let newData: ICheats[] = [];

	if (!isLoading) {
		Object.values(data).forEach((el: any) => newData.push(el));
	}

	return { isLoading, newData };
};
