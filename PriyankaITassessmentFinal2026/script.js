// Slider
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (!slides.length) return;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// Lightbox
function openLightbox(img) {
    let modal = document.getElementById('lightbox-modal');
    let modalImg = document.getElementById('lightbox-img');
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
    }
}
function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = "none";
}

// Form Validation
function validateContactForm(e) {
    if (e) e.preventDefault();
    let name = document.getElementById('name')?.value;
    let email = document.getElementById('email')?.value;
    let message = document.getElementById('message')?.value;
    let errors = [];
    
    if (!name || name.trim() === '') errors.push('Name is required');
    if (!email || !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email)) errors.push('Valid email required');
    if (!message || message.length < 10) errors.push('Message must be at least 10 characters');
    
    let errorDiv = document.getElementById('form-errors');
    let successDiv = document.getElementById('form-success');
    
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(e => `<p style="color:red">❌ ${e}</p>`).join('');
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
    } else {
        errorDiv.style.display = 'none';
        successDiv.innerHTML = '<p style="color:green">✅ Message sent!</p>';
        successDiv.style.display = 'block';
        document.getElementById('contactForm')?.reset();
    }
    return false;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.slider-container')) showSlides();
    let form = document.getElementById('contactForm');
    if (form) form.onsubmit = validateContactForm;
});