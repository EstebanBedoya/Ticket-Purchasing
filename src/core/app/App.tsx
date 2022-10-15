// @scripts
import MainPage from "../../components/pages/mainPage";
import { getShows } from "../../services/schedule";

function App() {
  const onGetData = (async () => {
    console.log(await getShows(), "testeo")
  })()
  
  
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
