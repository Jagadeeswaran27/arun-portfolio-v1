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
    link: "https://www.behance.net/gallery/221011453/Glow-Product-Design",
  },
  {
    id: "2",
    title: "Cravein-Home meal App",
    image: mealApp,
    link: "https://www.behance.net/gallery/236196341/CraveInA-Homemade-Food-Delivery-%28UIUX-Case-Study%29",
  },
  {
    id: "3",
    title: "Caige- Jewellery Brand",
    image: caige,
    link: "https://www.behance.net/gallery/213773935/Brand-Identity",
  },
];
