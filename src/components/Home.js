import "./Home.css";
import myself from "../assets/images/image2.jpg";
export default function Home() {
  return (
    <div id="Home">
      <div className="left">
        <div className="left-inside">
          <p className="line1">welcome to my portfolio</p>
          <div className="line2">Hello,my</div>
          <div className="line2">
            name is <span className="name1">Pranav.</span>
          </div>
          <p className="line3">
            i'm a visual designer from iiit surat
            <span className="name2">@</span>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="right-inside">
          <img width={400} src={myself} alt="" />
        </div>
      </div>
    </div>
  );
}
