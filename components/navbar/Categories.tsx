"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Plage",
    icon: TbBeach,
    description: "Cette propriété est proche de la plage !",
  },
  {
    label: "Piscines",
    icon: TbPool,
    description: "Cette propriété à une piscine !",
  },
  {
    label: "Moderne",
    icon: MdOutlineVilla,
    description: "Cette propriété est moderne !",
  },
  {
    label: "Campagne",
    icon: TbMountain,
    description: "Cette propriété est à la campagne !",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "Cette propriété est toute neuve et luxueuse !",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Cette propriété est dans un camping !",
  },
  {
    label: "Lac",
    icon: GiBoatFishing,
    description: "Cette propriété est proche d'un lac !",
  },
  {
    label: "Ski",
    icon: FaSkiing,
    description: "Cette propriété est proche du ski !",
  },
  {
    label: "Châteaux",
    icon: GiCastle,
    description: "Cette propriété est un ancien château !",
  },
  {
    label: "Îles",
    icon: GiIsland,
    description: "Cette propriété se trouve sur une île !",
  },
  {
    label: "Moulins",
    icon: GiWindmill,
    description: "Cette propriété possède des moulins à vent !",
  },
  {
    label: "Grottes",
    icon: GiCaveEntrance,
    description: "Cette propriété est proche des grottes !",
  },
  {
    label: "Arctique",
    icon: BsSnow,
    description: "Cette propriété est située dans un environnement arctique !",
  },
  {
    label: "Désert",
    icon: GiCactus,
    description: "Cette propriété se trouve dans le désert !",
  },
  {
    label: "Grange",
    icon: GiBarn,
    description: "Cette propriété se trouve dans une grange !",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
