<meta name='viewport' content='width=device-width, initial-scale=1'/><script>// Fungsi untuk memperbaiki tampilan mode gelap
function fixDarkModeDisplay() {
    if (document.body.classList.contains('dark-mode')) {
        // Perbaiki semua ikon Bootstrap
        const icons = document.querySelectorAll('i.bi');
        icons.forEach(icon => {
            // Tambahkan kelas untuk memastikan ikon terlihat di mode gelap
            if (!icon.classList.contains('text-primary') && 
                !icon.classList.contains('text-success') && 
                !icon.classList.contains('text-danger') && 
                !icon.classList.contains('text-warning') && 
                !icon.classList.contains('text-info')) {
                icon.style.color = 'var(--neon-primary)';
                icon.style.textShadow = '0 0 5px rgba(255, 183, 77, 0.5)';
            }
        });
        
        // Perbaiki teks placeholder di input
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                input.style.color = '#94a3b8';
            }
        });
        
        // Perbaiki dropdown menu
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            dropdown.style.backgroundColor = '#1e2936';
            dropdown.style.color = '#e2e8f0';
        });
        
        // Perbaiki dropdown items
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.style.color = '#e2e8f0';
        });
        
        // Perbaiki tabel
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            table.style.color = '#f1f5f9';
            
            const headers = table.querySelectorAll('thead th');
            headers.forEach(header => {
                header.style.color = '#f1f5f9';
                header.style.borderBottom = '2px solid #475569';
            });
            
            const cells = table.querySelectorAll('td, th');
            cells.forEach(cell => {
                cell.style.borderColor = '#475569';
            });
            
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach((row, index) => {
                if (index % 2 === 0) {
                    row.style.backgroundColor = '#334155';
                }
                
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#475569';
                });
                
                row.addEventListener('mouseleave', function() {
                    if (index % 2 === 0) {
                        this.style.backgroundColor = '#334155';
                    } else {
                        this.style.backgroundColor = 'transparent';
                    }
                });
            });
        });
        
        // Perbaiki modal
        const modals = document.querySelectorAll('.modal-content');
        modals.forEach(modal => {
            modal.style.backgroundColor = '#1e2936';
            modal.style.color = '#f1f5f9';
        });
        
        const modalHeaders = document.querySelectorAll('.modal-header');
        modalHeaders.forEach(header => {
            header.style.borderBottom = '1px solid #475569';
        });
        
        const modalFooters = document.querySelectorAll('.modal-footer');
        modalFooters.forEach(footer => {
            footer.style.borderTop = '1px solid #475569';
        });
        
        // Perbaiki form select
        const selects = document.querySelectorAll('.form-select');
        selects.forEach(select => {
            select.style.backgroundColor = '#334155';
            select.style.borderColor = '#475569';
            select.style.color = '#f1f5f9';
        });
        
        // Perbaiki input group text
        const inputGroups = document.querySelectorAll('.input-group-text');
        inputGroups.forEach(group => {
            group.style.backgroundColor = '#334155';
            group.style.borderColor = '#475569';
            group.style.color = '#94a3b8';
        });
        
        // Perbaiki badges
        const badges = document.querySelectorAll('.badge');
        badges.forEach(badge => {
            badge.style.color = '#f1f5f9';
        });
        
        // Perbaiki alerts
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            alert.style.backgroundColor = '#334155';
            alert.style.borderColor = '#475569';
            alert.style.color = '#f1f5f9';
        });
        
        // Perbaiki nav tabs
        const navLinks = document.querySelectorAll('.nav-tabs .nav-link');
        navLinks.forEach(link => {
            link.style.color = '#94a3b8';
            
            if (link.classList.contains('active')) {
                link.style.color = 'var(--neon-primary)';
                link.style.borderBottom = '2px solid var(--neon-primary)';
            }
        });
        
        // Perbaiki empty state
        const emptyStates = document.querySelectorAll('.empty-state');
        emptyStates.forEach(state => {
            const paragraphs = state.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.style.color = '#94a3b8';
            });
            
            const icons = state.querySelectorAll('i');
            icons.forEach(icon => {
                icon.style.color = '#475569';
            });
        });
    }
}

// Deteksi perangkat Android
function isAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf("android") > -1;
}

// Terapkan perbaikan tampilan untuk Android
function applyAndroidFixes() {
    if (isAndroid()) {
        document.body.classList.add('android-device');
        
        // Tambahkan meta viewport untuk Android
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
        
        // Tingkatkan ukuran font untuk layar sentuh
        const html = document.documentElement;
        html.style.fontSize = '16px';
        
        // Tingkatkan jarak antar elemen untuk layar sentuh
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.marginBottom = '1.5rem';
        });
        
        // Tingkatkan ukuran tombol untuk layar sentuh
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.style.minHeight = '48px';
            button.style.padding = '12px 16px';
        });
        
        // Tingkatkan ukuran input untuk layar sentuh
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.minHeight = '48px';
            input.style.padding = '12px';
        });
        
        // Tingkatkan ukuran tab untuk layar sentuh
        const tabs = document.querySelectorAll('.nav-tabs .nav-link');
        tabs.forEach(tab => {
            tab.style.padding = '12px 16px';
        });
        
        // Tingkatkan ukuran dropdown untuk layar sentuh
        const dropdowns = document.querySelectorAll('.dropdown-item');
        dropdowns.forEach(item => {
            item.style.padding = '12px 16px';
        });
        
        // Tingkatkan ukuran ikon untuk layar sentuh
        const icons = document.querySelectorAll('i.bi');
        icons.forEach(icon => {
            icon.style.fontSize = '1.2rem';
        });
    }
}

// Inisialisasi perbaikan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Terapkan perbaikan untuk Android
    applyAndroidFixes();
    
    // Terapkan perbaikan mode gelap
    fixDarkModeDisplay();
    
    // Tambahkan event listener untuk perubahan mode gelap
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            // Tunggu sedikit sebelum menerapkan perbaikan
            setTimeout(fixDarkModeDisplay, 100);
        });
    }
    
    // Tambahkan event listener untuk tab switch
    const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function() {
            // Terapkan perbaikan mode gelap setelah tab berubah
            setTimeout(fixDarkModeDisplay, 100);
        });
    });
    
    // Tambahkan event listener untuk modal show
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function() {
            // Terapkan perbaikan mode gelap setelah modal ditampilkan
            setTimeout(fixDarkModeDisplay, 100);
        });
    });
    
    // Tambahkan event listener untuk dropdown show
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('shown.bs.dropdown', function() {
            // Terapkan perbaikan mode gelap setelah dropdown ditampilkan
            setTimeout(fixDarkModeDisplay, 100);
        });
    });
    
    // Perbaiki input focus
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (document.body.classList.contains('dark-mode')) {
                this.style.color = '#f1f5f9';
            }
        });
        
        input.addEventListener('blur', function() {
            if (document.body.classList.contains('dark-mode') && !this.value) {
                this.style.color = '#94a3b8';
            }
        });
    });
});

// Perbaiki tampilan saat window diresize
window.addEventListener('resize', function() {
    if (document.body.classList.contains('dark-mode')) {
        setTimeout(fixDarkModeDisplay, 100);
    }
});</script>