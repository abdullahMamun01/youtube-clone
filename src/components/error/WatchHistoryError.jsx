import React from 'react';

const WatchHistoryError = () => {
  return (
    <div className="text-secondary min-h-screen w-full text-center my-auto flex justify-center items-center">
      <div>
        <h3 className='text-xl'>Keep track of what you watch</h3>
        <p className='text-sm'>Watch history isn't viewable when signed out. <a href="/login">Learn more</a></p>
      </div>
    </div>
  );
};

export default WatchHistoryError;
