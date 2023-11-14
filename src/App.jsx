import { useEffect, useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  //get flights
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  //opens the map and get plane id for detail
  const openDetail = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      {/* side detail */}
      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}

      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Map View
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          List View
        </button>
      </div>

      {showMapView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
