document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Reset any inline display style that might have been added
        navLinks.style.display = ''; 
    });

    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Optional: add a slight delay for animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // match CSS transition
                }
            });
        });
    });

    // Generate and Download vCard
    const downloadVcardBtn = document.getElementById('download-vcard');
    downloadVcardBtn.addEventListener('click', () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
N:Hachem;Moufid;;;
FN:Moufid Hachem
TITLE:Executive Chef
EMAIL:mofidchef@hotmail.com
TEL;TYPE=CELL:+96103657849
ADR;TYPE=WORK:;;Beirut;Lebanon;;;
URL:https://moufid-chef-portfolio.com
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Moufid_Hachem.vcf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
});
