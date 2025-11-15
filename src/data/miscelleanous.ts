import { caige, mealApp, moisturizer } from "../resources/images";

export type MiscellaneousItem = {
  id: string;
  title: string;
  image: string;
  link: string;
};

export const miscellaneousData: MiscellaneousItem[] = [
  {
    id: "1",
    title: "Glow-Roll on Moisturizer",
    image: moisturizer,
    link: "",
  },
  {
    id: "2",
    title: "Cravein-Home meal App",
    image: mealApp,
    link: "",
  },
  {
    id: "3",
    title: "Caige- Jewellery Brand",
    image: caige,
    link: "",
  },
];
