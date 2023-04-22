let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendTodo(result) {
    let {
        title,
        link,
        description
    } = result;
    //Creating result-item(css class)--Div Container
    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    searchResultsE1.appendChild(resultItemE1);
    //Creating result-title(css class)--Anchor Title
    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultItemE1.appendChild(resultTitleE1);


    //Creating Break Element
    let titleBreak = document.createElement("br");
    resultItemE1.appendChild(titleBreak);
    //Creating URL Element
    let urlElement = document.createElement("a");
    urlElement.classList.add("result-url");
    urlElement.href = link;
    urlElement.target = "_blank";
    urlElement.textContent = link;
    resultItemE1.appendChild(urlElement);
    //Creating Break Element
    let lineBreakE1 = document.createElement("br");
    resultItemE1.appendChild(lineBreakE1);

    //Creating Description Element
    let descriptionElementE1 = document.createElement("p");
    descriptionElementE1.classList.add("line-description");
    descriptionElementE1.textContent = description;
    resultItemE1.appendChild(descriptionElementE1);

}

function displayResults(searchResults) {
    spinner.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendTodo(result);
    }
}

function searchWikepedia(event) {
    if (event.key === "Enter") {
        searchResultsE1.textContent = "";
        spinner.classList.toggle("d-none");
        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });

    }
}
searchInputE1.addEventListener('keydown', searchWikepedia);