import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  return (
    <header>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wv_logo_proposal_flying_plane_wo_text.png/480px-Wv_logo_proposal_flying_plane_wo_text.png"
          alt=""
        />
        <h2>Flight Radar</h2>
      </div>
      <h4>
        {store.isloading
          ? "flight data is being prepared..."
          : `${store.flights.length} flights found`}
      </h4>
    </header>
  );
};

export default Header;
