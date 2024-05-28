# phase-1-project

In the animated Pokemon series, the Pokedex is practically a character of its own - it has a voice, distinct purpose and, sometimes, a sense of humor. In the video game franchise, the Pokedex serves as a badge of honor once completed, indicating that you have in fact caught them all. In both scenarios it is intended to serve as a sentient encyclopedia that will aid an aspiring trainer on their journey.

Our Pokedex, compiled to fulfill the requirements of Flatiron School's first Phase, is a little more rudimentary compared to the technology of the same name featured in the animated and the video game series. Using the publically available Pokemon API, our Pokedex fetches information for a number of Pokemon specified at the top of the index.js file, creates the appropriate number of line items for each Pokemon and appends those line items to a list with which a user can interact.

Upon selecting a line item in the Pokemon list, the image of the Pokemon will appear to the left, along with its typing and a short description.

Fulfillment of Project Requirements:

1. Our Pokedex is an HTML/CSS/JS frontend that accesses a publically available API that returns (far) more than 5 objects with (far) more than three attributes. Navigating the vastness of the dataset was one of the most challenging aspects of creating this program.

2. You will find only one HTML file here, indicating that the entire app runs on a single page.

3. We use three Event Listeners in our JavaScript code. You can find them in the index.js file at lines 55, 60, and 106, respectively. These event listeners enable the user to click on each Pokemon in the list and update the Pokemon, as well as hover over the image of the Pokemon to view a reverse image of the same Pokemon. If the user leaves the image div, the image reverts to the front facing default image.

4. We use two instances of array iteration in this app. You can find those examples in the index.js file at lines 17 and 25, respectively. These were necessary to iterate over the dataset to both pull the Pokemon's typing as well as pull an English language description of each Pokemon, contained at a different API endpoint than the rest of the dataset.

5. The final requirement is that we maintain good coding best practices. For better or worse, someone else will have to be the judge of that.

Stefan's CSS Updates as of 5/28/24:

During the project we were a little strapped for time and wound up mounting the HTML and JavaScript on top of an image of a Pokedex instead of designing one using CSS. I've returned to do so after resisting the design aspect of web development for more or less the entire time I spent at Flatiron so that I might force myself to learn a thing or two.
