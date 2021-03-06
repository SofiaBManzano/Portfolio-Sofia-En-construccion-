const Hello = (props) => {
  return (
    <article className="me">
      <h1 className="me__name">Hello</h1>
      <h2 className="me__name">
        I am{" "}
        <span className={`me__name--myName ${props.borderText}`}>Sofía</span>
      </h2>
      <div className="me__containerJobs">
        <span className="fas fa-light fa-code-branch me__containerJobs--icon"></span>
        <ul className="me__positions">
          <li className="me__positions--job">Frontend developer</li>
          <li className="me__positions--job">Motion grapher</li>
          <li className="me__positions--job">Video editor</li>
        </ul>
      </div>
    </article>
  );
};
export default Hello;
