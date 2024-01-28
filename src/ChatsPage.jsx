import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
      <PrettyChatWindow
        projectId='6ef0af8e-304a-4f46-bcd2-5bffab6cd3fa'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;