import React, { useState } from 'react';

export const VideoDescription = ({ description }) => {
  const hasUrl = React.useMemo(() => (line) => {
    return line.startsWith("www.") || line.startsWith("https://") || line.startsWith("http://");
  }, []);

  const parts = React.useMemo(() => (description && description.split('\n')), [description]);
  const [isMore,setIsMore] = useState(false)
  return (
    <div className='w-full bg-gray-200 px-4 py-6  box-border'>
      <p>
        {!isMore && description &&  <h1>{description.slice(0,100)} <span className='cursor-pointer text-sky-600' onClick={() => setIsMore(true)}>see more...</span></h1>}
        {isMore && parts && parts.map((line) => (
          <p className='my-2'>
            {line.split(" ").map((str, i) => (
              hasUrl(str) ? (
                <a className='text-sky-600 mx-2' href={str}>{str}</a>
              ) : (
                <span>{' ' + str}</span>
              )
            ))}
          </p>
        ))}
      </p>
    </div>
  );
};
