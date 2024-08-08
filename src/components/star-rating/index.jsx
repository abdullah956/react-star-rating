import { useState } from "react"; // Importing the useState hook from React.
import { FaStar } from "react-icons/fa"; // Importing the star icon from the react-icons library.
import "./styles.css"; // Importing the CSS file for styling.

export default function StarRating({ noOfStars = 5 }) {
  // Declaring a functional component named StarRating that accepts a prop noOfStars, defaulting to 5.

  const [rating, setRating] = useState(0); // State variable 'rating' to keep track of the current rating, initialized to 0.
  const [hover, setHover] = useState(0); // State variable 'hover' to keep track of the star being hovered over, initialized to 0.

  function handleClick(getCurrentIndex) {
    // Function to handle click events on stars.
    setRating(getCurrentIndex); // Sets the rating to the index of the clicked star.
  }

  function handleMouseEnter(getCurrentIndex) {
    // Function to handle mouse enter events on stars.
    setHover(getCurrentIndex); // Sets the hover state to the index of the star being hovered over.
  }

  function handleMouseLeave() {
    // Function to handle mouse leave events on stars.
    setHover(rating); // Sets the hover state back to the current rating.
  }

  return (
    <div className="star-rating">
      {/* Container div for the star rating component */}
      {[...Array(noOfStars)].map((_, index) => {
        // Creating an array with a length of noOfStars and mapping over it.
        index += 1; // Adjusting the index to be 1-based instead of 0-based.

        return (
          <FaStar
            key={index} // Unique key for each star element.
            className={index <= (hover || rating) ? "active" : "inactive"}
            // Applying 'active' class if the star index is less than or equal to the hover state or the rating, otherwise 'inactive'.
            onClick={() => handleClick(index)} // Handling click event on the star.
            onMouseMove={() => handleMouseEnter(index)} // Handling mouse move event on the star.
            onMouseLeave={() => handleMouseLeave()} // Handling mouse leave event on the star.
            size={40} // Setting the size of the star icon.
          />
        );
      })}
    </div>
  );
}
