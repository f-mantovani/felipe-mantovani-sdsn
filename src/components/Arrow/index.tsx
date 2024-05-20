export const Arrow = ({ symbol }: { symbol: string }) => {
	const chooseArrow = () => {
	  switch (symbol) {
		case "↑":
		  return "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18";
		case "➚":
		  return "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25";
		case "↓":
		  return "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3";
		case "→":
		  return "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3";
	  }
	};
	return (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="h-5 w-5"
	  >
		<path strokeLinecap="round" strokeLinejoin="round" d={chooseArrow()} />
	  </svg>
	);
  };
  