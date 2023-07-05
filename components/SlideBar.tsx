import Blockchain from './Blockchains';
import JoinDiscord from './JoinDiscord';
import Tags from './Tags';

function SlideBar() {
  return (
    <div className=" flex-col lg:flex hidden">
      <JoinDiscord/>
      <Blockchain />
      <Tags />
    </div>
  );
}
export default SlideBar;
