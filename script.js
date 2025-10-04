// Wait for the page to load
window.addEventListener("load", function() {

//fetch request to the API URL
const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");

fetchPromise.then(response => { // Grabs the response
    const jsonPromise = response.json(); // Converts response into JSON format
    jsonPromise.then(json => { // Grabs the JSON data
        console.log(json);

        const postList = document.getElementById("postList");
        const fetchButton = document.getElementById("fetchButton");

        // Event Listener for 'Fetch Posts' button
        fetchButton.addEventListener("click", () => {
            try {
                document.createElement("ul"); // Creates a list to display the posts
                // Loop through each item (post) in the recieved JSON data
                json.forEach(item => {
                    let postTitle = document.createElement("h2"); // Create an empty h2 element for the post title
                    let postBody = document.createElement("p"); // Create an empty p element for the post body
               
                    postTitle.innerText = item.title; // add the JSON text to the title element
                    postBody.innerText = item.body; // add the JSON text to the body element

                    // appends the JSON data to the existing postList div
                    postList.append(postTitle);
                    postList.append(postBody);
                });
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        });


        const submitButton = document.getElementById("submit");

        // Event Listner for 'Submit Post' button
        


    });
    });
});
