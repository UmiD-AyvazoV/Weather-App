import { WiSunset } from "react-icons/wi";

export default function Info({ info , state }) {
  return (
    <>
      {state ? (
        <div className="info">
          <p id="seher">
            {info.name}, {info.sys.country}
          </p>
          <div className="umumiDeyer">
            <p id="istilik">{info.main.temp}</p>
            <WiSunset className="fa-c" />
          </div>
          <p id="havaDurumu">{info.weather[0].description}</p>
          <div className="his">
            <p id="hisolunan">{info.main.feels_like}</p>
            <WiSunset className="fa-c" />
          </div>
        </div>
      ) : null}
    </>
  );
}
