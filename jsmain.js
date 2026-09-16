// Booking Function
function bookTour(tourName) {
    const name = prompt("Please enter your name:");
    if (name) {
        const email = prompt("Please enter your email:");
        if (email) {
            const date = prompt("Preferred date (YYYY-MM-DD):");
            if (date) {
                const people = prompt("Number of people:");
                if (people) {
                    alert(`Thank you ${name}!\n\nBooking Details:\nTour: ${tourName}\nDate: ${date}\nPeople: ${people}\n\nWe will contact you at ${email} to confirm your booking.`);
                    
                    // Here you can add code to send to backend/email
                    console.log({
                        tour: tourName,
                        name: name,
                        email: email,
                        date: date,
                        people: people
                    });
                }
            }
        }
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Exchange Rate Calculator (for exchange.html)
function calculateExchange() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    // Exchange rates (update these daily)
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        LKR: 295,
        INR: 83
    };
    
    const result = (amount / rates[fromCurrency]) * rates[toCurrency];
    document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Current Date Display
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
});