import axios from "axios";
import { useEffect, useState } from "react";
import { detailopt } from "../helpers/constant";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [d, setDetail] = useState(null);

  // Get flight details whenever id changes
  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailopt
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          <span>X</span>
        </p>
        {!d ? (
          <p className="load">Loading</p>
        ) : (
          <>
            <h2>{d.aircraft.model?.text}</h2>
            <h2>{d.aircraft.model?.code}</h2>
            <p>Tail Num: {d.aircraft?.registration}</p>
            <img src={d.aircraft?.images?.large[0]?.src} />
            <p>Company: {d.airline?.short}</p>
            <p>
              Origin:{" "}
              <a href={d.airport.origin?.website}>{d.airport?.origin?.name}</a>
            </p>
            <p>
              Destination:{" "}
              <a href={d.airport.destination?.website}>
                {d.airport?.destination?.name}
              </a>
            </p>
            <p>
              Status:{" "}
              <span className="status" style={{ background: d.status?.icon }}>
                {d.status?.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
