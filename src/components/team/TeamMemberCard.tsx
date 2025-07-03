
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TeamMemberModal from './TeamMemberModal';
import { TeamMember } from '@/data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-white/30 overflow-hidden"
        onClick={() => setIsModalOpen(true)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Badge 
              className="absolute top-4 right-4 bg-blue-600/90 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {member.department}
            </Badge>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {member.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                Click to view full profile
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <TeamMemberModal
        member={member}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default TeamMemberCard;
