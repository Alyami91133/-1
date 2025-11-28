        const nav = document.querySelector("nav");

        // Navigation scroll effect with GSAP
        if (nav) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    gsap.to(nav, {
                        width: "80%",
                        backgroundColor: "#fafafaff",
                        border: "solid 1px #333333",
                        duration: 0.5,
                        ease: "power3.out"
                    });
                } else {
                    gsap.to(nav, {
                        width: "100%",
                        backgroundColor: "#cfcfcf",
                        border: "solid 1px #cfcfcf",
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                
                document.querySelectorAll('.menu-category').forEach(category => {
                    const categoryName = category.dataset.category.toLowerCase();
                    const items = category.querySelectorAll('.menu-item');
                    let hasMatch = false;

                    items.forEach(item => {
                        const itemName = item.querySelector('.item-name').textContent.toLowerCase();
                        
                        if (itemName.includes(searchTerm) || categoryName.includes(searchTerm) || searchTerm === '') {
                            item.style.display = 'flex';
                            hasMatch = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Show/hide categories based on matches
                    if (searchTerm === '' || hasMatch) {
                        category.style.display = 'block';
                        if (searchTerm !== '' && hasMatch) {
                            category.querySelector('.menu-items').classList.add('show');
                            category.querySelector('.category-header').classList.add('active');
                        }
                    } else {
                        category.style.display = 'none';
                    }
                });
            });
        }

        // Expand all categories
        const expandAllBtn = document.getElementById('expandAll');
        if (expandAllBtn) {
            expandAllBtn.addEventListener('click', () => {
                document.querySelectorAll('.menu-items').forEach(items => {
                    items.classList.add('show');
                });
                document.querySelectorAll('.category-header').forEach(header => {
                    header.classList.add('active');
                });
            });
        }

        // Collapse all categories
        const collapseAllBtn = document.getElementById('collapseAll');
        if (collapseAllBtn) {
            collapseAllBtn.addEventListener('click', () => {
                document.querySelectorAll('.menu-items').forEach(items => {
                    items.classList.remove('show');
                });
                document.querySelectorAll('.category-header').forEach(header => {
                    header.classList.remove('active');
                });
            });
        }

        // Toggle individual categories
        document.querySelectorAll('.category-header').forEach(header => {
            header.addEventListener('click', function() {
                const category = this.closest('.menu-category');
                const items = category.querySelector('.menu-items');
                
                items.classList.toggle('show');
                this.classList.toggle('active');
            });
        });

        // Hero content scroll to menu
        const heroContent = document.querySelector('.hero-content');
        const menuSection = document.querySelector('#menu');
        
        if (heroContent && menuSection) {
            heroContent.addEventListener('click', () => {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            });
        }