import "./artist.css";
import { Instagram } from 'lucide-react';

import { Twitter } from 'lucide-react';
import { Share2 } from "lucide-react";
import { Linkedin } from 'lucide-react';
import { Button } from "../ui/button";
const ArtistDashBoard = () => {
    return (
        <div className="w-screen">
            <div className="bg-[url('https://res.cloudinary.com/dffepahvl/image/upload/v1759736433/x8g7ekr9fvpb3tzeulmh.jpg')] object-cover w-screen min-h-[200px]">
                <p>CHomu</p>

            </div>
            <div className="px-10  ">
                <div className="flex flex-row justify-between w-full">


                    <img src="https://res.cloudinary.com/dffepahvl/image/upload/v1753534237/sdwv6uaqggpcnnufpmop.jpg" alt="image" className="w-[200px] h-[160px] rounded-2xl mt-[-50px]" />
                    <Share2 className="border-2 p-2 border-gray-200 cursor-pointer mt-4 rounded-lg" size={"44"} />
                </div>

                <div>
                    <p className="font-bold text-2xl">Paras Chopra</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                        @chopraparas
                    </p>

                </div>
                <div className="mt-4 flex flex-row gap-4 cursor-pointer justify-between mb-6 max-w-[200px]">

                    <Instagram className="p-1 border-2 border-white rounded-2xl" size={36} />

                    <Twitter className="p-1 border-2 border-white rounded-2xl" size={36} />
                    <Linkedin className="p-1 border-2 border-white rounded-2xl" size={36} />





                </div>
                <div className="max-w-[200px]">
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="font-bold">Following</p>
                            <p>10000</p>

                        </div>
                        <div>
                            <p className="font-bold">Followers</p>
                            <p>10000</p>

                        </div>

                    </div>
                    <Button className="mt-4 p-3 w-full cursor-pointer">
                        Follow
                    </Button>
                </div>
                <div className="mt-6 max-w-[200px] ">
                    <div className="flex justify-between items-end">
                        <p className="text-xl font-bold">BIO</p>
                        <p className="text-sm font-bold">Joined 2024</p>
                    </div>
                    <div className="h-0.5 w-full bg-black mt-4 max-w-[200px]">
                        <p className="line-clamp-6 ">
                            Shah Rukh Khan, fondly known as the “King of Bollywood,” is one of the world’s most celebrated actors, producers, and entrepreneurs. Born on November 2, 1965, in New Delhi, he began his journey on television before achieving superstardom in films like Dilwale Dulhania Le Jayenge, Chennai Express, and Pathaan. With over 80 movies to his credit, SRK is admired for his charisma, intelligence, and versatility.




                        </p>
                        <span className="text-blue-500 cursor-pointer ml-1">...View More</span>
                    </div>



                </div>


            </div>
  

        </div>
    )
}

export default ArtistDashBoard;
