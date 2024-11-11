function openurl(event) {
    event.preventDefault(); // Prevent form submission
    var url = "My Resume.pdf"; // Adjust the path if necessary
    window.open(url, "_blank"); // Opens the file in a new tab
}