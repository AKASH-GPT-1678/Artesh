import React from 'react';
import { Bookmark } from 'lucide-react';

interface JobCardProps {
  title?: string;
  company?: string;
  location?: string;
  employmentType?: string;
  workType?: string;
  experience?: string;
  postedTime?: string;
  applicants?: number;
  tags?: string[];
  isBookmarked?: boolean;
  onBookmark?: () => void;
  logo?: string | null;
}

const JobCard: React.FC<JobCardProps> = ({ 
  title = "Job Title",
  company = "Company Name",
  location = "Location",
  employmentType = "Full Time",
  workType = "Remote",
  experience = "0-2 Years",
  postedTime = "1 day ago",
  applicants = 0,
  tags = [],
  isBookmarked = false,
  onBookmark = () => {},
  logo = null
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
    
          <div className="w-12 h-12 bg-black rounded flex items-center justify-center flex-shrink-0">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover rounded" />
            ) : (
              <span className="text-white font-bold text-xl">P</span>
            )}
          </div>
          
      
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{company} • {location}</p>
          </div>
        </div>
        
 
        <button 
          onClick={onBookmark}
          className="text-gray-400 hover:text-blue-600 transition-colors"
        >
          <Bookmark 
            className={`w-5 h-5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} 
          />
        </button>
      </div>
      
 
      <div className="flex flex-wrap gap-2 mb-4">
        {employmentType && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {employmentType}
          </span>
        )}
        {workType && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {workType}
          </span>
        )}
        {experience && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {experience}
          </span>
        )}
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="text-xs text-gray-500">
        {postedTime} • {applicants} Applicants
      </div>
    </div>
  );
};



export default JobCard;