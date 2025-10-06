import "./people.css";
import { Button } from "./ui/button";

interface PersonInfo {
  imageUrl: string;
  name: string;
  position: string;
  companyName: string;
}
interface PeoplesProps {
  people: PersonInfo[];
}

const Peoples = ({ people }: PeoplesProps) => {
  return (
    <div>
      <p className="font-bold text-xl mb-4">People at Yash Raj Films</p>
    <div id="main-container">
      

      <div id="people-container">
        {people.map((person, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={person.imageUrl}
              alt={"people"}
              className=" rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-xl">{person.name}</p>
              <p>{person.position} of {person.companyName}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full p-3 border-2 border-blue-600 mt-6 cursor-pointer text-blue-500" variant={"outline"}>Show All</Button>
    </div>
    </div>
  );
};
  

export default Peoples
