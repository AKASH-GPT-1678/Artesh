import React from 'react'
import './production.css';
import Image from "../assets/vite.svg";
import { Button } from "./ui/button.tsx";
import { Plus } from 'lucide-react';
import { Share2 } from 'lucide-react';
import Jobs from "./Jobs";
import Peoples from './people.tsx';
import CompanyView from './companyview';
import Location from './location.tsx';

const company = [
    {
        Location: "Mumbai, India",
        CompanySize: "250 employees",
        CompanyType: "Design and Technology Firm"
    }
];
const peopleData = [
    {
        imageUrl: "https://res.cloudinary.com/dffepahvl/image/upload/v1755282442/jsvagwzn2qidwa25dmky.webp",
        name: "Yash Rajesh",
        position: "Founder and CEO",
        companyName: "YRF"
    },
    {
        imageUrl: "https://res.cloudinary.com/dffepahvl/image/upload/v1755282442/jsvagwzn2qidwa25dmky.webp",
        name: "Priya Kapoor",
        position: "Creative Director",
        companyName: "YRF"
    }
];
const companyData = [
    {
        companyName: "YRF",
        location: "Mumbai, India",
        imageUrl: "https://res.cloudinary.com/dffepahvl/image/upload/v1755282442/jsvagwzn2qidwa25dmky.webp"
    },
    {
        companyName: "Dharma Productions",
        location: "Mumbai, India",
        imageUrl: "https://res.cloudinary.com/dffepahvl/image/upload/v1755282442/jsvagwzn2qidwa25dmky.webp"
    }
];

const ProductionView = () => {
    const [truncate, setTruncate] = React.useState(true);

    return (
        <div style={{ width: "100%" }}>

            <div
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1759615425/nb08fny3nqib8ypudol0.jpg')",
                    backgroundSize: "cover"
                }}
                id="banner"
            />
            <div id="company-info-container">
                <div id='company-info'>



                    <div id='company-title'>
                        <div >
                            <img src={Image} alt="title" />
                            <div>
                                <p>Yash Raj Studio</p>
                                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                                    We are a team of talented artists who bring
                                </p>
                            </div>
                        </div>
                        <div>
                            <Share2 className="border-2 p-2 border-gray-200 cursor-pointer  rounded-lg" size={"44"} />
                            <Button variant={"secondary"} size="lg" className="bg-blue-500 text-white">
                                <span className={"flex flex-row gap-2 items-center cursor-pointer"}> <Plus size={"lg"} />   Follow</span>
                            </Button>


                        </div>

                    </div>

                    <div id="description">
                        <div>
                            <p>Website</p>
                            <a href="https://www.yashrajfilms.com/" className={"text-blue-500 underline"}>yashrajstudio.com</a>
                        </div>
                        <div className={"flex flex-row justify-between w-full px-24"}>
                            <div>
                                <p>Location</p>
                                <p className={"key-info"}>{company[0].Location}</p>
                            </div>
                            <div>
                                <p>Company Size</p>
                                <p className={"key-info"}>{company[0].CompanySize}</p>
                            </div>
                            <div>
                                <p>Company Type</p>
                                <p className={"key-info"}>{company[0].CompanyType}</p>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
            <div id={"about-container"} className={"p-4"}>
                <div className='flex flex-row gap-5'>
                    <div className={"about-content max-w-2xl "}>
                        <p className={"font-semibold"}>About YRF</p>


                        <p className={`${truncate ? "line-clamp-6" : ""}`}>

                            Yash Raj Films (YRF) is one of India’s leading film production and distribution companies, founded by legendary filmmaker Yash Chopra in 1970. Headquartered in Mumbai, YRF has produced some of Bollywood’s most iconic and commercially successful movies. The studio is known for its grand storytelling, strong emotions, and memorable music. Under the leadership of Aditya Chopra, YRF has expanded into talent management, digital content, and music production. It also owns YRF Studios, one of the most advanced film production facilities in India. The company continues to shape the modern Indian cinema landscape through innovation and creative excellence.
                        </p>
                        <span className={"text-[16px] cursor-pointer text-blue-600"} onClick={() => setTruncate(!truncate)}>{truncate ? "Read More" : "Read less"}</span>

                        <div>
                            <Jobs />
                            <Location/>

                        </div>
                      
                    </div>
                    <div>
                        <Peoples people={peopleData} />
                        <CompanyView companies={companyData} />

                    </div>


                </div>


            </div>



        </div>
    )
}

export default ProductionView;
