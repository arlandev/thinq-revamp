function WelcomeText(props) {
  return (
    <h2 className="text-xl">
      Welcome, <b>{props.firstName} {props.lastName}</b>
    </h2>
  );
}

export default WelcomeText;
