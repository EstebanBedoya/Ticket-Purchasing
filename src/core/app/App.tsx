// @packages
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// @scripts
import MainPage from "../../components/pages/mainPage";
import { getShows } from "../../services/schedule";
import { AnyAction } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();

  const onGetData = async () => {
    dispatch(getShows() as unknown as AnyAction);
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
