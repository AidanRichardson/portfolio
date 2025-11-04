type tool = {
	name: string;
	icon: string;
};

type list_items = {
	name: string;
	icon: string;
};

type PreviewItem = {
	title: string;
	image: string[];
	description: string;
	link?: string;
	tools?: tool[];
	company?: string;
};

type List = {
	title: string;
	list_items: list_items[];
};
