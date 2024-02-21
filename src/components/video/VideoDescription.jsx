import React, { useState } from "react";

export const VideoDescription = ({ description }) => {
  const hasUrl = React.useMemo(
    () => (line) => {
      return (
        line.startsWith("www.") ||
        line.startsWith("https://") ||
        line.startsWith("http://")
      );
    },
    []
  );

  const parts = React.useMemo(
    () => description && description.split("\n"),
    [description]
  );
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="w-full bg-neutral px-4 py-6 rounded-lg ">
      <p className="text-pretty text-gray">
        {!seeMore && description && (
          <>
            <span>

              {description.slice(0, 100)}
            </span>
            <span
              className="cursor-pointer text-sky ml-2"
              onClick={() => setSeeMore(true)}
            >
              see more...
            </span>
          </>
        )}
        {seeMore &&
          parts &&
          parts.map((line) => (
            <p className="my-2">
              {line.split(" ").map((str, i) =>
                hasUrl(str) ? (
                  <a className="text-sky mx-2" href={str}>
                    {str}
                  </a>
                ) : (
                  <span>{" " + str}</span>
                )
              )}
            </p>
          ))}
      </p>
    </div>
  );
};
