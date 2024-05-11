document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    var card = document.querySelector("#cbody")
    var clutter="";
    var names = ["Sambhav Oswal","Eshwar shetty","shreyas bhat","Sambhav Oswal","Eshwar shetty","shreyas bhat","Sambhav Oswal","Eshwar shetty","shreyas bhat","Sambhav Oswal","Eshwar shetty","shreyas bhat","Sambhav Oswal","Eshwar shetty","shreyas bhat","Sambhav Oswal","Eshwar shetty","shreyas bhat"] ;
    for(var i=0;i<18;i++){
        clutter += 
        `<div class="card">
        <img class="pic" src="Screenshot_2024-01-02_232911-ai-brush-removebg-10i9hgr7.png" alt="Your Image">
        <div class="card-content">
        <b><div class="name"> ${names[i]} </div></b>
        <div class="designation">Your Designation</div>
        <div class="social-links">
        <img src="mail.png" alt="mail">
        <img src="linkdin.png" alt="LinkedIn">
        <img src="twitter.png" alt="Twitter">
        <img src="insta.png" alt="Instagram">
        </div>
        <button class="read-more-button">Know More</button>
        </div>
        </div>`;
    }
    card.innerHTML=clutter;
    
});

// `<div class="card">
//      <img class="pic" src="Screenshot_2024-01-02_232911-ai-brush-removebg-10i9hgr7.png" alt="Your Image">
//         <div class="card-content">
//             <b><div class="name">${name}</div></b>
//             <div class="designation">Your Designation</div>
//                 <div class="social-links">
//                     <img src="mail.png" alt="mail">
//                     <img src="linkdin.png" alt="LinkedIn">
//                     <img src="twitter.png" alt="Twitter">
//                     <img src="insta.png" alt="Instagram">
//                 </div>
//             <button class="read-more-button">Know More</button>
//         </div>
// </div>`