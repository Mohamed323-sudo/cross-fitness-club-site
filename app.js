const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            if(entry.target == cardOne || entry.target == cardTwo || 
                entry.target == cardThree || entry.target == cardFour ||
                entry.target == activitiesHeading || entry.target == testHeading

            ){
                entry.target.classList.add("flip")
            }
            else if(entry.target == benefits_heading || entry.target == scaledImg || entry.target == scaledDiv1 
                || entry.target == scaledDiv2 || entry.target == scaledDiv3 || entry.target == scaledDiv4 ||
                entry.target == scaledDiv5 || entry.target == scaledDiv6
            ){
                entry.target.classList.add("increaseSize")
            }
            else if(entry.target == slidedPar || entry.target == forHeading || entry.target == slidedFormatsPar1 ||
                entry.target == slidedFormatsPar2 || entry.target == slidedFormatsPar3
            ){
                entry.target.classList.add("slideInLeft")
            }
            else if(entry.target == slidedH2One || entry.target == slidedH2Two || entry.target == slidedH2Three
                || entry.target == paymentsHeading
            ){
                entry.target.classList.add("slideInRight") 
            }

            else if(entry.target == rotatedImg){
                entry.target.classList.add("rotate")
            }
            else if(entry.target == slidedImg1 || entry.target == slidedImg2 || entry.target == slidedImg3 ||
                entry.target == slidedUpDiv || entry.target == slidedUpPaymentsDiv || entry.target == testBox1 ||
                entry.target == testBox2|| entry.target == testBox3 || entry.target == testBox4 || entry.target == testBox5 ||
                entry.target == testBox6
            ){
                entry.target.classList.add("slideUp")
            }
            else if( entry.target == backDiv){
                entry.target.classList.add("enlarge");
            }

        }
        else{
            entry.target.classList.remove("flip")
            entry.target.classList.remove("increaseSize")
            entry.target.classList.remove("slideInLeft")
            entry.target.classList.remove("slideInRight")
            entry.target.classList.remove("rotate")
            entry.target.classList.remove("slideUp")
            entry.target.classList.remove("enlarge")
        }
    });
});
// animated parts in benefits section
let benefits_heading = document.getElementById('ben-heading');
let cardOne = document.getElementById("card-one")
let cardTwo = document.getElementById("card-two")
let cardThree = document.getElementById("card-three")
let cardFour = document.getElementById("card-four")
// animated parts in activities section
let activitiesHeading = document.getElementById("activities-heading")
let slidedPar = document.getElementById("slided-par");
let rotatedImg = document.getElementById("rotated-img");
let scaledImg = document.getElementById("scaled-img");
let slidedImg1 = document.getElementById("slidedUp-img1")
let slidedImg2 = document.getElementById("slidedUp-img2")
let slidedImg3 = document.getElementById("slidedUp-img3")

// animated parts in services section
let scaledDiv1 = document.getElementById("scaled-div1"); 
let scaledDiv2 = document.getElementById("scaled-div2"); 
let scaledDiv3 = document.getElementById("scaled-div3"); 
let scaledDiv4 = document.getElementById("scaled-div4"); 
let scaledDiv5 = document.getElementById("scaled-div5"); 
let scaledDiv6 = document.getElementById("scaled-div6"); 

// animated parts in formats section
let forHeading = document.getElementById("formats-heading");
let slidedUpDiv = document.getElementById("slidedUp-div");
let slidedH2One = document.getElementById("slided-h2-1");
let slidedH2Two = document.getElementById("slided-h2-2");
let slidedH2Three = document.getElementById("slided-h2-3");
let slidedFormatsPar1 = document.getElementById("slided-formats-par1");
let slidedFormatsPar2 = document.getElementById("slided-formats-par2");
let slidedFormatsPar3 = document.getElementById("slided-formats-par3");

// animated parts in payments section
let paymentsHeading = document.getElementById("payments-heading");
let slidedUpPaymentsDiv = document.getElementById("slidedUp-payments-div");

//animated parts in testimonials section
let testHeading = document.getElementById("test-heading");
let testBox1 = document.getElementById("test-box-1");
let testBox2 = document.getElementById("test-box-2");
let testBox3 = document.getElementById("test-box-3");
let testBox4 = document.getElementById("test-box-4");
let testBox5 = document.getElementById("test-box-5");
let testBox6 = document.getElementById("test-box-6");

//animated parts of contacts section
let backDiv = document.getElementById("back-div");
// Array containing all the animated parts in the web page
let sections = [benefits_heading, cardOne, cardTwo, cardThree, cardFour,activitiesHeading,slidedPar, rotatedImg, slidedImg1,
    scaledImg, slidedImg2 , slidedImg3, scaledDiv1, scaledDiv2, scaledDiv3, scaledDiv4, scaledDiv5, scaledDiv6, forHeading
    , slidedUpDiv, slidedH2One, slidedH2Three, slidedH2Two, slidedFormatsPar1, slidedFormatsPar2, slidedFormatsPar3,
    paymentsHeading, slidedUpPaymentsDiv, testHeading, testBox1, testBox2, testBox3, testBox4, testBox5, testBox6, backDiv
];
sections.forEach((el) => observer.observe(el))