// Product array - example products with ids and names
const products = [
  { id: 'product-a', name: 'Boss' },
  { id: 'product-b', name: 'Club De Nuit' },
  { id: 'product-c', name: 'Diesel' },
  { id: 'product-d', name: 'Old Spice' }
];

// Function to populate the product select dropdown
function populateProductDropdown() {
  const productSelect = document.getElementById('productName');
  if (!productSelect) return;

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Function to update localStorage review count on form submission
function initializeReviewCountTracking() {
  const form = document.getElementById('reviewForm');

  if (!form) return;

  form.addEventListener('submit', function () {
    let count = localStorage.getItem('reviewCount');
    if (count === null) count = 0;
    else count = parseInt(count, 10);

    localStorage.setItem('reviewCount', count + 1);
  });
}

// Initialize page behaviors after DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
  populateProductDropdown();
  initializeReviewCountTracking();
});
