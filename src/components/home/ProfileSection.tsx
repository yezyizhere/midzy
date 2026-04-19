import { MEMBER_PROFILES } from "@/constants/data";

export default function ProfileSection() {
  return (
    <section className="flex flex-col gap-10 px-5 mb-10">
      {MEMBER_PROFILES.map((member, idx) => (
        <div 
          key={member.name} 
          className={`flex gap-4 items-end ${member.layout === 'right' ? 'flex-row-reverse text-right pr-5' : 'pl-5'}`}
        >
          <img 
            src={member.image} 
            className="w-48 h-auto rounded-lg shadow-lg border border-zinc-700" 
            alt={member.nameKr} 
          />
          <div className={`flex flex-col ${member.layout === 'right' ? 'items-end' : 'items-start'}`}>
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={member.sign} className="w-20 mb-2 filter brightness-110" alt={`${member.nameKr} 사인`} />
            </a>
            <div className="leading-tight">
              <p className="font-bold text-lg">{member.name} / {member.nameKr}</p>
              <p className="text-zinc-400 text-sm">{member.birth}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
