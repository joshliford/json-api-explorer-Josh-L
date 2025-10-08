// wait for the page to load
window.addEventListener("load", function() {

// fetch request to the API URL
fetch("https://jsonplaceholder.typicode.com/posts").then(response => { // grab the response from the API
    response.json().then((json) => { // convert the response into JSON format to use

        const postList = document.getElementById("postList");
        const fetchButton = document.getElementById("fetchButton");

        // Event Listener for 'Fetch Posts' button
        fetchButton.addEventListener("click", () => {
            let loading = document.getElementById("loading");
            loading.innerHTML = `<p>"Loading..."</p>`;
            loading.style.display = 'flex'; // display a 'loading' message when the button is clicked
            try {
                document.createElement("ul"); // creates a list to display the posts
                json.forEach(item => { // loop through each item (post) in the recieved JSON data
                    let postTitle = document.createElement("h2"); // create an empty h2 element for the post title
                    let postBody = document.createElement("p"); // create an empty p element for the post body
               
                    postTitle.innerText = item.title; // add the JSON text to the title element
                    postBody.innerText = item.body; // add the JSON text to the body element

                    // appends the JSON data to the existing postList div
                    postList.append(postTitle);
                    postList.append(postBody);
                });
                loading.style.display = 'none'; // remove the 'loading' message when the data loads
            } catch (error) { // Error handling
                console.error("Error fetching posts:", error);
            }
        });
    });
});

        const submitButton = document.getElementById("submit");
    
        // Event Listner for 'Submit Post' button
        submitButton.addEventListener("click", (event) => {
            event.preventDefault(); // prevents the page from reloading when a post is submitted
            const titleInput = document.getElementById("titleInput").value;
            const bodyInput = document.getElementById("bodyInput").value;
            // console.log("submit button clicked");
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    titleInput,
                    bodyInput,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

            const formSuccess = document.getElementById("formSuccess");
            formSuccess.innerText = `Post sucessfully uploaded. Post title: ${titleInput}`; // display a message when a post is "created"
        })
});
