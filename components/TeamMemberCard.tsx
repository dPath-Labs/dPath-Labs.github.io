import { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'member' | 'advisor';
}

export default function TeamMemberCard({ member, variant = 'member' }: TeamMemberCardProps) {
  const photoSize = variant === 'member' ? 'w-28 h-28' : 'w-24 h-24';
  const photoText = variant === 'member' ? 'text-4xl' : 'text-3xl';

  return (
    <div className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-10 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:brightness-105 relative group">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></div>
      
      <div className="flex items-start gap-8">
        <div className={`${photoSize} ${photoText} rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 border-2 border-gray-200 dark:border-gray-600 relative overflow-hidden font-bold text-white transition-all duration-300`}>
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-full"></div>
          {member.initials}
        </div>
        
        <div className="flex-1">
          <div className="text-blue-500 text-lg font-bold mb-4 transition-colors duration-300">
            {member.name}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide mb-5 transition-colors duration-300">
            {member.role}
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
            {member.description}
          </div>
          <div className="flex gap-5">
            {Object.entries(member.links).map(([key, value]) => 
              value ? (
                <a
                  key={key}
                  href={value}
                  className="text-blue-500 text-xs uppercase tracking-wide border-b border-transparent hover:border-blue-500 transition-all duration-300"
                >
                  {key === 'googleScholar' ? 'Google Scholar' : key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}