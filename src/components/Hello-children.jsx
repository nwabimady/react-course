export const HelloChildren = ({ children }) => {
  return (
    <>
      <div>
        {children}
        <p>This is a child of the title.</p>
      </div>
    </>
  );
};
