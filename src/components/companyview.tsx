import React from "react";
import "./company.css"
interface CompanyInfo {
    companyName: string;
    location: string;
    imageUrl: string;
}
interface CompanyProps {
    companies: CompanyInfo[];
}

const CompanyView : React.FC<CompanyProps>  = ({companies}) => {
    return (
        <div id={"company-container"}>
            {
                companies.map((company, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                        <div>
                            <p className={"font-bold"}>{company.companyName}</p>
                            <p>{company.location}</p>
                        </div>
                        <img src={company.imageUrl} alt={"company"} className="rounded-lg object-cover" />

                    </div>
                ))
            }




        </div>
    )
};

export default CompanyView;