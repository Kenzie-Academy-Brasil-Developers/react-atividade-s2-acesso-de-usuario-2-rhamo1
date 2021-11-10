import { Link } from "react-router-dom";

export const Home = ({ members }) => {
  return (
    <div className="homeContainer">
      {members.map((member, id) => (
        <Link
          className="link"
          key={id}
          to={
            member.type === "pj"
              ? `/company/${member.id}`
              : `/customer/${member.id}`
          }
        >
          {member.name}
        </Link>
      ))}
    </div>
  );
};
