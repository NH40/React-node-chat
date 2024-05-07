/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return <div style={{ height: "100vh"}}>
		<PrettyChatWindow
			projectId ="725246cb-0bb5-4cc4-96b8-f0fe24e99e2a"
			username = {props.user.username }
			secret= {props.user.secret}
			style={{height: "100%"}}
		/>
	</div>;
};
export default ChatsPage;