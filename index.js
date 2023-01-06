const Button = (props) => {
  //  Write your code here.
  const {text}=props;
  const (<h1 className="buttons">{text}</h1>);
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button  className="yellow-button" text="like" />
      <Button className="white-button" text="Comment"/>
      <Button className="blue-button" text="Share"/>         
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
