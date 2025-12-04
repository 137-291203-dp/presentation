// Interactive elements for the RevealJS presentation

// Revenue Chart Initialization
function initRevenueChart() {
    const ctx = document.getElementById('revenue-chart');
    if (!ctx) return;

    // Clear existing chart if any
    if (window.revenueChart) {
        window.revenueChart.destroy();
    }

    const data = {
        labels: ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022', 
                 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
                 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
        datasets: [{
            label: 'Total Revenue ($B)',
            data: [7.2, 7.5, 7.8, 8.1, 8.3, 8.6, 8.9, 9.2, 9.5, 9.8, 10.1, 10.4],
            borderColor: '#1e3c72',
            backgroundColor: 'rgba(30, 60, 114, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'Digital Services ($B)',
            data: [1.8, 2.0, 2.2, 2.5, 2.7, 3.0, 3.2, 3.5, 3.7, 4.0, 4.2, 4.5],
            borderColor: '#2a5298',
            backgroundColor: 'rgba(42, 82, 152, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'Projected 2025 ($B)',
            data: [null, null, null, null, null, null, null, null, null, null, null, 10.4, 10.8, 11.1, 11.3, 11.5],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Quarterly Revenue Trends & 2025 Projections',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    color: '#1e3c72'
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y + 'B';
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Quarter',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Revenue (Billions USD)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: false,
                    min: 6,
                    max: 12,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    };

    window.revenueChart = new Chart(ctx, config);
}

// Animated counter for metrics
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.innerHTML = current.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters when fragments become visible
function initCounters() {
    const counters = document.querySelectorAll('.metric-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (target) {
            animateCounter(counter, 0, target, 2000);
        }
    });
}

// Presentation event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any immediate elements
    console.log('Presentation JavaScript loaded');
});

// Custom reveal events
Reveal.addEventListener('ready', function(event) {
    console.log('Presentation ready');
});

Reveal.addEventListener('slidechanged', function(event) {
    // Handle slide-specific initializations
    const currentSlide = event.currentSlide;
    
    // Initialize revenue chart if present
    if (currentSlide.querySelector('#revenue-chart')) {
        setTimeout(initRevenueChart, 500); // Small delay for smooth transition
    }
    
    // Initialize counters if present
    if (currentSlide.querySelector('.metric-number')) {
        setTimeout(initCounters, 1000);
    }
});

Reveal.addEventListener('fragmentshown', function(event) {
    // Handle fragment-specific animations
    const fragment = event.fragment;
    
    if (fragment.classList.contains('metric-number')) {
        const target = parseInt(fragment.getAttribute('data-target'));
        if (target) {
            animateCounter(fragment, 0, target, 1500);
        }
    }
});

// Keyboard shortcuts for presentation
document.addEventListener('keydown', function(event) {
    // Custom keyboard shortcuts
    switch(event.key) {
        case 'r':
            // Refresh current slide
            if (event.ctrlKey) {
                location.reload();
            }
            break;
        case 'p':
            // Toggle presenter mode
            if (event.ctrlKey) {
                window.open(window.location.href + '?print-pdf', '_blank');
            }
            break;
    }
});

// Utility functions for data formatting
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(amount);
}

function formatPercentage(value, decimals = 1) {
    return (value * 100).toFixed(decimals) + '%';
}

// Export functions for global use
window.presentationUtils = {
    initRevenueChart,
    animateCounter,
    initCounters,
    formatCurrency,
    formatPercentage
};

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Presentation fully loaded');
    
    // Track loading performance
    const loadTime = performance.now();
    console.log(`Presentation loaded in ${loadTime.toFixed(2)}ms`);
});

// Error handling
window.addEventListener('error', function(event) {
    console.error('Presentation error:', event.error);
});

// Responsive handling
window.addEventListener('resize', function() {
    // Redraw charts on resize
    if (window.revenueChart) {
        window.revenueChart.resize();
    }
});

// Print/PDF handling
window.addEventListener('beforeprint', function() {
    // Ensure all fragments are visible for printing
    const fragments = document.querySelectorAll('.fragment');
    fragments.forEach(fragment => {
        fragment.classList.add('visible');
    });
});

window.addEventListener('afterprint', function() {
    // Restore fragment states after printing
    location.reload();
});
