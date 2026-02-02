// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Mobile Countries Dropdown
    const countriesToggle = document.querySelector('.mobile-countries-toggle');
    const countriesMenu = document.querySelector('.mobile-countries-menu');

    if (countriesToggle && countriesMenu) {
        countriesToggle.addEventListener('click', function() {
            countriesMenu.classList.toggle('hidden');
            const arrow = this.querySelector('svg');
            arrow.classList.toggle('rotate-180');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Add scroll-based header background
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Global Search Functionality
    const searchInput = document.getElementById('global-search');
    const searchBtn = document.getElementById('search-btn');
    const quickSearchBtns = document.querySelectorAll('.quick-search');
    const countryTabs = document.querySelectorAll('.country-tab');
    let selectedCountry = 'all';

    // Country tab functionality
    if (countryTabs.length > 0) {
        countryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                if (this.disabled) return;

                // Update selected country
                selectedCountry = this.dataset.country;

                // Update active state
                countryTabs.forEach(t => {
                    t.classList.remove('active', 'bg-sage-100', 'text-sage-800');
                    t.classList.add('bg-gray-100', 'text-gray-700');
                });
                this.classList.remove('bg-gray-100', 'text-gray-700');
                this.classList.add('active', 'bg-sage-100', 'text-sage-800');
            });
        });
    }

    if (searchInput && searchBtn) {
        function performSearch() {
            const query = searchInput.value.trim();

            if (!query) {
                alert('Please enter a search term');
                return;
            }

            // Redirect based on country selection
            if (selectedCountry === 'all') {
                alert(`Searching for "${query}" across all countries.\n\nFeature coming soon! For now, please select a specific country.`);
            } else if (selectedCountry === 'de') {
                window.location.href = `https://de.worldheritage.guide/search/?q=${encodeURIComponent(query)}`;
            } else if (selectedCountry === 'fr') {
                window.location.href = `https://fr.worldheritage.guide/search/?q=${encodeURIComponent(query)}`;
            }
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });

        // Quick search buttons
        quickSearchBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                searchInput.value = this.dataset.term;
                performSearch();
            });
        });
    }
});
