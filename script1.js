
function showLoginForm() {
    document.getElementById("login-form").style.display = "flex";
    setTimeout(function() {
        document.getElementById("login-form").classList.add("show");

        const form = document.querySelector("#login-form form");
        if (form) {
            form.reset();
        }
    }, 10); 
}

function closeLoginForm() {

    document.getElementById("login-form").classList.remove("show");
    
    setTimeout(function() {
        document.getElementById("login-form").style.display = "none";
    }, 300); 
} 




function showUserProfile() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
        document.getElementById("profile-name").textContent = name;
        document.getElementById("profile-email").textContent = email;
        document.getElementById("profile-box").style.display = "flex";
    } else {
        alert("No user data found. Please register first.");
    }
}

function closeUserProfile() {
    document.getElementById("profile-box").style.display = "none";
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Save to localStorage for the profile popup
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Allow form submission to backend
    event.target.submit();
}
//Sum counting
let sum=0;

function show(){
    alert('payment done');
let getm=parseFloat(document.getElementById('amount').value);
sum=sum+getm;
const money=document.getElementById('result').innerHTML=sum +"Ru";
 getm=parseFloat(document.getElementById('amount').value="");
// let donation=document.getElementById('total').innerText=sum + "Ru";
}
//   Donatio box open
const donateBtn = document.getElementById('donateBtn');
const donateModal = document.getElementById('donateModal');
const closeModal = document.getElementById('closeModal');

// Show Modal
donateBtn.addEventListener('click', () => {
    donateModal.style.display = 'flex';
});

// Hide Modal
closeModal.addEventListener('click', () => {
    donateModal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (event) => {
    if (event.target === donateModal) {
        donateModal.style.display = 'none';
    }
});

const images = [
        "../images/img1.jpg",
        "../images/img2_s.jpeg",
        "../images/img6.avif",
        "https://assets.change.org/photos/3/td/cz/pytdCZcRKwxmInH-1600x900-noPad.jpg?1589957690",
        "../images/image15.png",
        "../images/image8.png",
        "../images/image14.png",
    ];

    let currentIndex = 0;
    const bannerElement = document.querySelector(".banner");
    
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        bannerElement.style.backgroundImage = `url("${images[currentIndex]}")`;
    }
    setInterval(changeBackgroundImage, 5000);



    // Function to toggle dark mode
   function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
  
    // Update styles based on the mode
    const isDarkMode = document.body.classList.contains('dark-mode');
    // document.body.style.backgroundColor = isDarkMode ? '#2c3e50' : '#f8f9fa';
    document.body.style.backgroundColor = isDarkMode ? 'rgb(6, 2, 53)' : 'azure';
    document.body.style.color = isDarkMode ? '#ecf0f1' : '#333';
  }

  function toggleMenu() {
        const menu = document.getElementById("navMenu");
        // Toggle the menu display
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      }


      function toggleMenu() {
            document.querySelector("nav ul").classList.toggle("active");
        }











































