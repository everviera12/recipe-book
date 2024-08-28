import Image from "next/image";
import Link from "next/link";

const CardCountry = ({ name, _id, arrayCountry }) => {
  return (
    <div key={_id} className="">
      <Link
        href={"/"}
        className="p-4 shadow-lg rounded-xl bg-gradient-to-t flex flex-col items-center hover:opacity-90 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center">
          <Image
            width={100}
            height={100}
            src={arrayCountry}
            alt={`${name} Country`}
          />
        </div>

        <div>
          <h5 className="mt-4 text-xl font-semibold text-center">{name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CardCountry;
