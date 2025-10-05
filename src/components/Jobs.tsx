import React from "react";
import JobCard from "./jobtemplate";
const jobs = [
    {
        title: "UI/UX Designer",
        company: "Pixelz Studio",
        location: "Yogyakarta, Indonesia",
        employmentType: "Full Time",
        workType: "Remote",
        experience: "2-4 Years",
        postedTime: "5 day ago",
        applicants: 135,
        isBookmarked: true
    },
    {
        title: "UI Designer",
        company: "Pixelz Studio",
        location: "Yogyakarta, Indonesia",
        tags: ["Internship", "Onsite", "Fresh Graduate"],
        postedTime: "a day ago",
        applicants: 35,
        isBookmarked: false
    },
    {
        title: "Frontend End Developer",
        company: "Pixelz Studio",
        location: "Yogyakarta, Indonesia",
        employmentType: "Full Time",
        workType: "Onsite",
        experience: "1-3 Years",
        postedTime: "a day ago",
        applicants: 35,
        isBookmarked: false
    }
];
const Jobs = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-row justify-between mb-4">
                <h2 className="font-bold text-xl">Jobs from Yash Raj Films</h2>
                <span className="text-blue-600 font-semibold cursor-pointer text-lg">View all Jobs</span>

            </div>
            <div className="flex flex-col gap-4">
                {
                    jobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))
                }

            </div>
        </div>
    )
}

export default Jobs;