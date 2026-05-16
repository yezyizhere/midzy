import { MEMBER_PROFILES } from "@/constants/data";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 px-5 mb-10 lg:px-10 py-10">
      {MEMBER_PROFILES.map((member, idx) => {
        const isLastOdd = idx === MEMBER_PROFILES.length - 1 && MEMBER_PROFILES.length % 2 !== 0;
        return (
          <div
            key={member.name}
            className={`flex gap-8 md:gap-10 items-end md:items-center md:justify-center ${member.layout === 'right' ? 'flex-row-reverse text-right' : 'pl-5 md:pl-0'} ${isLastOdd ? 'lg:col-span-2' : ''}`}
          >
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-[1.02] transition-transform duration-300 flex-shrink-0">
              <Image
                src={member.image}
                width={600}
                height={900}
                priority
                className="w-40 h-56 sm:w-48 sm:h-64 md:w-64 md:h-[340px] lg:w-72 lg:h-96 xl:w-80 xl:h-[426px] rounded-xl shadow-2xl border border-zinc-700 object-cover"
                alt={member.nameKr}
              />
            </a>
            <div className={`flex flex-col ${member.layout === 'right' ? 'items-end' : 'items-start'}`}>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={member.sign} className="w-20 md:w-28 lg:w-32 mb-4 md:mb-6 filter brightness-110" alt={`${member.nameKr} 사인`} />
              </a>
              <div className="leading-tight">
                <p className="font-bold text-lg md:text-2xl lg:text-3xl mb-1 md:mb-2">
                  {member.name} <br />
                  {member.nameKr}
                </p>
                <p className="text-zinc-400 text-sm md:text-lg lg:text-xl">{member.birth}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  );
}
