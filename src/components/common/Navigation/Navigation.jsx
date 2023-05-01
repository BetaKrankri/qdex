import { useEffect } from "react";

function Navigation({ currentPosition, setPosition }) {
  useEffect(() => {
    const getNavigationDetails = async () => {};
    getNavigationDetails();
  }, [currentPosition]);

  const handleNext = () => {
    setPosition((p) => p + 1);
  };
  const handleBack = () => {
    setPosition((p) => p - 1);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "3fr 2fr 3fr",
        gap: ".5rem",
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <NavButton onClick={handleBack}>Back</NavButton>
      {currentPosition}
      <NavButton onClick={handleNext}>Next</NavButton>
    </div>
  );
}
export default Navigation;

////////////////////
function NavButton({ onClick, children }) {
  return (
    <button
      style={{
        width: "100%",
        minHeight: "40px",
        display: "grid",
        placeItems: "center",
        border: 'none',
        background: 'hsl(0,0%,30%)',
        color: 'white'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
