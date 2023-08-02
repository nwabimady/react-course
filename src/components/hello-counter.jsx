import { useState, useEffect } from "react";

export const HelloCounter = () => {
  const [wallCount, setWallCount] = useState(0);
  const [slabCount, setSlabCount] = useState(0);

  useEffect(() => {
    console.log("Counter updated to: " + wallCount);
    document.title = `Count: ${wallCount}`;
  }, [wallCount]);

  useEffect(() => {
    console.log("default development test - to be removed");
  }, []);

  return (
    <>
      <div>Wall wallCounter: {wallCount} </div>
      <button
        onClick={() => {
          setWallCount(wallCount + 1);
        }}
      >
        Walls
      </button>
      <div>Slabs Counter: {slabCount} </div>
      <button
        onClick={() => {
          setSlabCount(slabCount + 1);
        }}
      >
        Slabs
      </button>
    </>
  );
};
