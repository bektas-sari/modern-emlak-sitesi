// Sample property data
const properties = [
    {
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        price: '4.250.000 TL',
        title: 'Modern Villa',
        location: 'Beşiktaş, İstanbul',
        bedrooms: 4,
        bathrooms: 3,
        area: 280
    },
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80',
        price: '2.850.000 TL',
        title: 'Lüks Apartman Dairesi',
        location: 'Kadıköy, İstanbul',
        bedrooms: 3,
        bathrooms: 2,
        area: 165
    },
    {
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80',
        price: '5.750.000 TL',
        title: 'Bahçeli Müstakil Ev',
        location: 'Çekmeköy, İstanbul',
        bedrooms: 5,
        bathrooms: 4,
        area: 320
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        price: '3.150.000 TL',
        title: 'Deniz Manzaralı Daire',
        location: 'Kartal, İstanbul',
        bedrooms: 3,
        bathrooms: 2,
        area: 185
    },
    {
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80',
        price: '6.900.000 TL',
        title: 'Lüks Villa',
        location: 'Sarıyer, İstanbul',
        bedrooms: 6,
        bathrooms: 4,
        area: 450
    },
    {
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        price: '2.450.000 TL',
        title: 'Bahçeli Apartman Dairesi',
        location: 'Ataşehir, İstanbul',
        bedrooms: 3,
        bathrooms: 2,
        area: 145
    }
];

// Function to create property cards
function createPropertyCard(property) {
    return `
        <div class="property-card">
            <div class="property-image" style="background-image: url('${property.image}')"></div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3>${property.title}</h3>
                <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Yatak</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Banyo</span>
                    <span><i class="fas fa-vector-square"></i> ${property.area}m²</span>
                </div>
            </div>
        </div>
    `;
}

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', () => {
    // Populate property grid
    const propertyGrid = document.getElementById('propertyGrid');
    if (propertyGrid) {
        propertyGrid.innerHTML = properties.map(property => createPropertyCard(property)).join('');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');

    if (searchButton && searchInput && propertyGrid) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProperties = properties.filter(property => 
                property.title.toLowerCase().includes(searchTerm) ||
                property.location.toLowerCase().includes(searchTerm) ||
                property.price.toLowerCase().includes(searchTerm)
            );
            
            propertyGrid.innerHTML = filteredProperties.map(property => createPropertyCard(property)).join('');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Burada form gönderme işlemleri yapılabilir
            alert('Mesajınız başarıyla gönderildi!');
            contactForm.reset();
        });
    }
});