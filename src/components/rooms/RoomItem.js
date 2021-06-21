import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = ({ room }) => {
  const { createdAt, name } = room;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{name}</h3>
        <TimeAgo
          datetime={new Date(createdAt)}
          className="font-normal text-black-45"
        />
      </div>
      <div>
        <span className="d-flex align-items-center text-black-70">
          No message to display ...
        </span>
      </div>
    </div>
  );
};

export default RoomItem;
