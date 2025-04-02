function WelcomeText(props) {
  return (
    <h2 className="text-3xl font-bold tracking-wide">
      Welcome, {props.firstName} {props.lastName}
    </h2>
  );
}

export default WelcomeText;
