# JavaScript Application

* This repository has an `array` of airline `object`s. Each airline has a name and a logoUrl.
* Open `index.html` in your browser
* Open the developer console, and type in `airlines` to see your array of airlines

### Deliverables
* List of Airlines
    * When the page loads, `append` a `ul` element to the page, then `append` an `li` `forEach` airline, 
        * Each `li` shoud contain the airline's name.
        * Each `li` should contain a button labeled "Delete".
            * Use `.addEventListener` to listen for when the button is `click`ed.
            * When it is, remove the `li` from the page.

* Airline Details
    * Add another button to the `li` labled "Details". When the Details button is clicked:
        * Remove the `ul` from the page
        * Add an `h1` tag to the page containing the airlines name
        * Add an `img` to display it's logo
            * Add some `.style` properties to keep the image from being huge! 

* Bonus
    * Create a "Back" button.
        * When this button is clicked
            * Remove the `h1` tag and the `img`
            * Display the List of Airlines as described above
    * Create an Edit Form
        * When the airline details are displayed, display a form to change the airlines name
        * When the user submits the form, the `h1` tag should be updated
        * If the user clicks on the "Back" button, the new name for the airline should be displayed in the list
