import { brands, teams } from '../constants';
import { FLEX } from '../globalStyles/NavbarStyles';

function BackedByBest() {
  return (
    <FLEX className="bg-[#010101] pb-10 min-h-screen pt-56 text-white ">
      <div className="text-3xl font-bold sm:text-5xl">Backed by the Best.</div>

      <div className="grid w-[300px] pt-10 sm:w-auto grid-cols-2 gap-4 md:grid-cols-4 place-content-center">
        {brands.map((brand) => (
          <div
            key={brand.index}
            className="flex items-center justify-center p-2"
          >
            <img src={brand.image} alt="brandName" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 md:grid-cols-4 md:pt-20 place-content-center">
        {teams.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt="memberPhoto"
              className="w-40 mx-auto mb-4 rounded-2xl h-34"
            />
            <p className="font-normal text-md">{member.name}</p>
            {member.prop && (
              <p className="text-xs text-gray-500 opacity-85">{member.prop}</p>
            )}
          </div>
        ))}
      </div>
    </FLEX>
  );
}

export default BackedByBest;
