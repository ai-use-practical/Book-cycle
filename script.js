document.addEventListener('DOMContentLoaded', function() {
    // Sample book data
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 8.99,
            originalPrice: 12.99,
            condition: "excellent",
            category: "fiction",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 7.50,
            originalPrice: 10.99,
            condition: "good",
            category: "fiction",
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.8,
            reviews: 256
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            price: 6.25,
            originalPrice: 9.99,
            condition: "fair",
            category: "fiction",
            image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            reviews: 189
        },
        {
            id: 4,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            price: 9.99,
            originalPrice: 14.99,
            condition: "new",
            category: "fiction",
            image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            reviews: 312
        },
        {
            id: 5,
            title: "Clean Code",
            author: "Robert C. Martin",
            price: 22.50,
            originalPrice: 35.99,
            condition: "good",
            category: "technology",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.6,
            reviews: 87
        },
        {
            id: 6,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            price: 12.75,
            originalPrice: 18.99,
            condition: "excellent",
            category: "history",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            reviews: 143
        },
        {
            id: 7,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            price: 10.99,
            originalPrice: 15.99,
            condition: "new",
            category: "fiction",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.4,
            reviews: 97
        },
        {
            id: 8,
            title: "Atomic Habits",
            author: "James Clear",
            price: 14.25,
            originalPrice: 22.99,
            condition: "good",
            category: "non-fiction",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            rating: 4.8,
            reviews: 231
        }
    ];

    // Load books into the page
    const booksContainer = document.getElementById('books-container');
    
    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-3 col-sm-6 col-12 fade-in';
        bookCard.style.animationDelay = `${index * 0.1}s`;
        
        const conditionClass = `condition-${book.condition}`;
        const savings = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);
        
        bookCard.innerHTML = `
            <div class="card book-card h-100">
                <div class="position-relative">
                    <img src="${book.image}" class="card-img-top book-img" alt="${book.title}">
                    <span class="badge ${conditionClass} book-badge">${book.condition.charAt(0).toUpperCase() + book.condition.slice(1)}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text text-muted">by ${book.author}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <span class="fw-bold text-primary">$${book.price.toFixed(2)}</span>
                            <span class="text-decoration-line-through text-muted small ms-2">$${book.originalPrice.toFixed(2)}</span>
                        </div>
                        <span class="badge bg-success">Save ${savings}%</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-warning">
                            ${renderRating(book.rating)}
                            <span class="text-muted small ms-1">(${book.reviews})</span>
                        </div>
                        <button class="btn btn-sm btn-outline-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });

    // Function to render star ratings
    function renderRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for sell book form
    const sellBookForm = document.querySelector('#sellBookModal form');
    if (sellBookForm) {
        sellBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const title = document.getElementById('bookTitle').value;
            const author = document.getElementById('bookAuthor').value;
            const price = document.getElementById('bookPrice').value;
            
            if (!title || !author || !price) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would typically send the data to a server
            alert('Your book has been listed successfully!');
            
            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('sellBookModal'));
            modal.hide();
            
            // Reset the form
            this.reset();
        });
    }

    // Login form handling
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here');
        });
    }

    // Register form handling
    const registerForm = document.querySelector('#registerModal form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            alert('Registration successful! You can now login.');
            
            // Close the register modal and open login modal
            const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            registerModal.hide();
            
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});