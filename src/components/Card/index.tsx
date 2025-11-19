type CardProps = {
  img: any;
  population: string;
  region: string;
  capital: string;
};

export const Card = ({ img, population, region, capital }: CardProps) => {
  return <div>{img}</div>;
};
