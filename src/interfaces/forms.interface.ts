import { IApiResponse } from "./utils.interface";

interface IFormHookProps {
	initialData: any;
	id?: string;
	readFunction: (...args: any) => Promise<IApiResponse>;
	updateFunction: (...args: any) => Promise<IApiResponse>;
	deleteFunction: (...args: any) => Promise<IApiResponse>;
}

interface IValidation {
	type?: string;
	placeholder?: string;
	subtext?: string;
	$short?: boolean;
	options?: any[];
	name: string;
	title: string;
}

export type { IFormHookProps, IValidation };
