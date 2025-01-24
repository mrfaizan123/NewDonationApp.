const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const nextButton = document.getElementById("nextButton");

let currentMemory = 0;

const memoryData = [
    { image: "img1.jpg", title: "Give Hope, Shape Their Future: Save Poor Children", text: "Donations can pave the way for a bright future for poor children by providing access to education, books, and school supplies. Your support can fund scholarships, tuitions, and vocational training, enabling them to break the cycle of poverty. With your help, these children can dream big, achieve their goals, and build a better life for themselves and their families." },
    { image: "img2_s.jpeg", title: "A Small Donation, A Life-Changing Education", text: "Thousands of poor students dream of studying but are held back by poverty. Without books, uniforms, or school fees, their hopes fade. Your donation can be their light, giving them the chance to learn, grow, and succeed. Together, we can break the cycle of poverty and build futures full of promise. Every rupee changes a life!"},
    { image: "img3f.jpg", title: "Feed Hope, Fight Hunger: Your Donation Matters", text: "For millions of poor people, a single meal is a luxury. Your donation can provide life-saving food through community kitchens, food banks, and school meal programs. It fights hunger, nourishes children, and restores dignity. Every rupee ensures no one sleeps hungry and gives hope for a brighter tomorrow. Together, we can change lives—one meal at a time!"},
    { image: "img4w.avif", title: "Quench Their Thirst, Change Their Lives", text: "Millions lack access to clean water, leading to disease and despair. Your donation can fund wells, water filters, and community water systems, providing safe drinking water to those in need. Every drop counts—it restores health, supports education, and builds stronger communities. Together, we can bring life’s most essential resource to those who need it most!" },
    { image: "img5beggar.webp", title: "From Streets to Shelter: Save a Beggar’s Life", text: "Donations can transform the lives of beggars by providing food, shelter, and medical care. They help fund rehabilitation programs, skill training, and safe housing, offering them a chance to rebuild their lives with dignity. Your generosity can turn despair into hope, ensuring no one is left to suffer on the streets. Together, we can give them a future!" },
    { image: "img6.avif", title: "10 Minutes to Change a Life: Donate Now", text: "In just 10 minutes, your donation can save lives. Providing immediate help to those in dire need—whether it’s food, water, or shelter—can drastically improve their situation. With your contribution, we can offer quick, life-saving assistance to people in crisis. Don’t wait—act now and be the difference in someone’s life today. Every minute counts!" },
    { image: "img7c.jpg", title: "Donate to Protect Lives: Fight Disease Together", text: "Donations can save lives by funding healthcare initiatives, providing vaccines, medicines, and essential treatments. They support sanitation programs, ensuring clean water and proper hygiene to prevent disease outbreaks. Donations also enable medical camps and awareness campaigns that educate communities on disease prevention. With your help, we can protect vulnerable lives from deadly diseases and build healthier futures." },

];

function updateMemory(index) {
    const memory = memoryData[index];
    memoryImage.src = memory.image;
    memoryTitle.textContent = memory.title;
    memoryText.textContent = memory.text;
}

function nextMemory() {
    currentMemory = (currentMemory + 1) % memoryData.length;
    updateMemory(currentMemory);
}

memoryImage.addEventListener("click", nextMemory);
nextButton.addEventListener("click", nextMemory);

setInterval(nextMemory, 5000); 

document.getElementById('setReminderButton').addEventListener('click', () => {
const reminderTime = prompt('Set a reminder time in HH:MM format (24-hour):');
if (reminderTime) {
const [hours, minutes] = reminderTime.split(':').map(Number);
const now = new Date();
const reminderDate = new Date();
reminderDate.setHours(hours, minutes, 0);

if (reminderDate < now) {
    reminderDate.setDate(reminderDate.getDate() + 1);
}

const timeout = reminderDate - now;

if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            setTimeout(() => {
                new Notification("Donation Reminder", {
                    body: "It's time to donate!",
                    // icon: "https://via.placeholder.com/100"
                });
            }, timeout);

            alert(`Desktop reminder set for ${reminderDate.toLocaleTimeString()}`);
        } else {
            alert("Please enable notifications to use this feature.");
        }
    });
} else {
    alert("Your browser does not support desktop notifications.");
}
}
});
// login code
function showLoginForm() {
    document.getElementById("login-form").style.display = "flex";
    setTimeout(function() {
        document.getElementById("login-form").classList.add("show");
    }, 10); // Delay the class to ensure animation trigger
}

// Function to close the login form
function closeLoginForm() {
    document.getElementById("login-form").classList.remove("show");
    setTimeout(function() {
        document.getElementById("login-form").style.display = "none";
    }, 300); 
}

let sum=0;

function show(){

let getm=parseFloat(document.getElementById('amount').value);
sum=sum+getm;
const money=document.getElementById('result').innerText=sum;
let donation=document.getElementById('total').innerText="Total Donation:"+sum;
}



// update profile

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent default form submission

// Get input values
const name = document.getElementById("name1").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// Update "My Profile" section dynamically
document.getElementById("gname").innerHTML = `<strong>Name:</strong> ${name}`;
document.getElementById("gemail").innerHTML = `<strong>Email:</strong> ${email}`;
document.getElementById("gpass").innerHTML = `<strong>Password:</strong> ${password}`;

// Send data to the backend
fetch("submit.php", {
method: "POST",
headers: {
    "Content-Type": "application/x-www-form-urlencoded",
},
body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
})
.then((response) => response.text())
.then((data) => {
    console.log("Backend response:", data);
    alert("Profile updated successfully and data saved to the backend!");
})
.catch((error) => {
    console.error("Error:", error);
    alert("An error occurred while saving data to the backend.");
});

// Reset form after submission
document.getElementById("loginForm").reset();
closeLoginForm(); // Close the login form after submission
});
function showProfile() {
// Hide all other sections
document.querySelectorAll(".container > section").forEach((section) => {
section.style.display = "none";
});

// Show "My Profile" section
const profileSection = document.getElementById("profile");
if (profileSection) {
profileSection.style.display = "block";
}
}


// Function to show the selected section and hide others

// Initial load: Show the Home section
navigateTo('dashboard'); // Change 'dashboard' to the section you want as default


document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = event.target.getAttribute('href').replace('#', ''); // Get section ID
        if (targetId && targetId !== 'javascript:void(0)') {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault(); // Prevent default anchor behavior
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        }
    });
});


// function navigateTo(sectionId) {
//     const sections = document.querySelectorAll('.container > section, .why_donate'); // Select all sections
//     sections.forEach(section => {
//         if (section.id === sectionId || section.classList.contains('why_donate') && sectionId === 'why_donate') {
//             section.style.display = 'block'; // Show the matching section
//         } else {
//             section.style.display = 'none'; // Hide all other sections
//         }
//     });
// }

// // Event listeners for navigation links
// document.querySelectorAll('nav ul li a').forEach(link => {
//     link.addEventListener('click', (event) => {
//         const targetId = event.target.getAttribute('href').replace('#', ''); // Get the target section ID
//         if (targetId && targetId !== 'javascript:void(0)') { // Skip if not a valid target
//             navigateTo(targetId);
//         }
//     });
// });

