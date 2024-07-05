import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image.jpg" alt="Image not found" />;
}

function Intro() {
  return (
    <div>
      <h1>Swastik Sharma</h1>
      <p>Aspiring Full Stack Developer.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="blue" />
      <Skill skill="CSS" emoji="💪" color="Red" />
      <Skill skill="Js" emoji="💪" color="orange" />
      <Skill skill="React" emoji="💪" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
