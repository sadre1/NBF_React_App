import { shimmer_card_unit } from "../config";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="w-56 h-60 p-5 m-3 shadow-lg bg-white rounded-lg">
      <div className="shimmer-img h-32 w-full mb-4 bg-gray-300 animate-pulse"></div>
      <div className="shimmer-title h-4 w-3/4 mb-2 bg-gray-300 animate-pulse"></div>
      <div className="shimmer-tags h-4 w-1/2 bg-gray-300 animate-pulse"></div>
      <div className="shimmer-details h-8 w-full bg-gray-300 animate-pulse"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap container mx-auto">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
