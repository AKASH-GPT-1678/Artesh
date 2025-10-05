import "./people.css";

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
    <div id="main-container">
      <p className="text-2xl font-bold mb-4">People at Pixels Studio</p>

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
    </div>
  );
};
  

export default Peoples
