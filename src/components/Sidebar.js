import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import ChatRoomList from './rooms/ChatRoomList';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (topSidebarRef) {
      setHeight(topSidebarRef.current.scrolHeight);
    }
  }, [topSidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>join conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
