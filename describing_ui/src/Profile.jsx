import Avatar from "./Avatar";
import Card from "./Card";
import Info from "./Info";

const Profile = (props) => {
 
  return (
    <div>
      <h1>Profile Component </h1>
      <Card>
    <Avatar {...props}></Avatar>
    <Info age={props.age} ></Info>
      </Card>
    </div>
  );
};

export default Profile;