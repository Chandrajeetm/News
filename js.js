let apikeys='0490d1a7ff8049cf87a80aa89f4cdb0c';
let NewsSection= document.getElementById('NewsSection');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=0490d1a7ff8049cf87a80aa89f4cdb0c`, true);




xhr.onload=function()
{
    if (this.status === 200)
    {   let json1 = JSON.parse(this.responseText);
       
        let articles = json1.articles;
         let newsHtml = "";
         
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `   <div class="accordion-item">
            <h2 class="accordion-header" id="heading">
              <button class="accordion-button " id="searching" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <b> Breaking News ${index+1} : </b> &nbsp  &nbsp ${ element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading" data-bs-parent="#accordionExample">
              <div class="accordion-body flexy " >
              <img src="${element["urlToImage"]}" width=250px height= 250px alt="">
           ${element["description"]} <br> <a href="${element["url"]}"  target="_blank" >Read more </a>
              </div>
            </div>
          </div>
         `;
            newsHtml += news;
        });
        NewsSection.innerHTML = newsHtml;

    }
    else{
        console.log("Some error occured")
    }
}
xhr.send()
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName('accordion-item');
 
    Array.from(noteCards).forEach(function (element) {
       let cardTxt1 = element.getElementsByTagName("button")[0].innerText;
      
      
        if (cardTxt1.includes(inputVal) ) {
            element.style.display = "block";
        }
        
        else {
            element.style.display = "none";
        }

    })
})