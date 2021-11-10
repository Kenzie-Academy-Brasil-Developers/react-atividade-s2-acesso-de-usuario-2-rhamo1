import { useParams, Link } from "react-router-dom";

export const Company = ({ members }) => {
  const id = useParams();
  const member = members.find((memb) => {
    return memb.id === id.id;
  });
  return (
    <div className="homeContainer">
      <div className="box">
        <h1>Detalhes do cliente</h1>

        <h2 className="box">Nome: {member && member.name}</h2>
        <p className="box">Tipo: {member && member.type}</p>

        <Link className="link" to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
};
