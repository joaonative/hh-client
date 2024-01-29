import { useAuth } from "../../AtuhContext";

function Greeting() {
  const { userData } = useAuth();

  const formattedName = userData?.name
    ? userData.name.charAt(0).toUpperCase() +
      userData.name.slice(1).toLowerCase()
    : "";
  return (
    <div>
      <h4 className="font-semibold text-xl w-full ">
        Hi, {formattedName}! Welcome to {""}
        <span className="text-primary">Harmony Hub.</span> Check your monthly
        insight:
      </h4>
    </div>
  );
}

export default Greeting;
