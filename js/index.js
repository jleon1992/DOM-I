const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav Items
const navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];



// Header
const heading = document.querySelector('.cta-text h1');
heading.innerHTML = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.innerHTML = siteContent["cta"]["button"];

const code = document.querySelector('#cta-img');
code.src = siteContent["cta"]["img-src"];

// Mid-Content
const midPageImg = document.querySelector('#middle-img');
midPageImg.src = siteContent["main-content"]["middle-img-src"];

const textBox = document.querySelectorAll('.text-content h4');

textBox[0].innerHTML = siteContent["main-content"]["features-h4"];

textBox[1].innerHTML = siteContent["main-content"]["about-h4"];

textBox[2].innerHTML = siteContent["main-content"]["services-h4"];

textBox[3].innerHTML = siteContent["main-content"]["product-h4"];

textBox[4].innerHTML = siteContent["main-content"]["vision-h4"];


const description = document.querySelectorAll('.text-content p');
description[0].innerHTML = siteContent["main-content"]["features-content"];
description[1].innerHTML = siteContent["main-content"]["about-content"];
description[2].innerHTML = siteContent["main-content"]["services-content"];
description[3].innerHTML = siteContent["main-content"]["product-content"];
description[4].innerHTML = siteContent["main-content"]["vision-content"];


// Contact

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent["contact"]["contact-h4"];





const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent["contact"]["address"]; 
contactInfo[1].innerHTML = siteContent["contact"]["phone"]; 
contactInfo[2].innerHTML = siteContent["contact"]["email"]; 

// Footer
const copy = document.querySelector('footer p');
copy.innerHTML = siteContent["footer"]["copyright"];