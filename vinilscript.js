// Enhanced accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Navigation functionality
  // IGRAP logo - navigate back to home
  const logo = document.querySelector('.group-6');
  if (logo) {
    logo.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // Navigation buttons
  const productosButton = document.querySelector('.group');
  const nosotrosButton = document.querySelector('.group-2');
  const contactoButton = document.querySelector('.group-3');
  const cotizaButton = document.querySelector('.group-4');
  const buscarButton = document.querySelector('.overlap-group-2');

  if (productosButton) {
    productosButton.addEventListener('click', function() {
      window.location.href = 'productos.html';
    });
  }

  if (nosotrosButton) {
    nosotrosButton.addEventListener('click', function() {
      window.location.href = 'nosotros.html';
    });
  }

  if (contactoButton) {
    contactoButton.addEventListener('click', function() {
      window.location.href = 'contacto.html';
    });
  }

  if (cotizaButton) {
    cotizaButton.addEventListener('click', function() {
      // Open WhatsApp with pre-filled message for vinyl quote request
      const whatsappURL = 'https://api.whatsapp.com/send?phone=51912207645&text=%C2%A1Hola!%20Deseo%20cotizar%20productos.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n?';
      window.open(whatsappURL, '_blank');
      console.log('Cotiza clicked - opening WhatsApp for vinyl quote');
    });
  }

  if (buscarButton) {
    buscarButton.addEventListener('click', function() {
      toggleSearchDropdown();
    });
  }

  // Search functionality
  function toggleSearchDropdown() {
    // Remove existing dropdown if it exists
    const existingDropdown = document.querySelector('.search-dropdown');
    if (existingDropdown) {
      existingDropdown.remove();
      return;
    }

    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    
    // Search options with their respective URLs (excluding vinil since we're on vinil page)
    const searchOptions = [
      { name: 'Inicio', url: 'index.html' },
      { name: 'Productos', url: 'productos.html' },
      { name: 'Nosotros', url: 'nosotros.html' },
      { name: 'Contacto', url: 'contacto.html' },
      { name: 'Laminados', url: 'laminados.html' },
      { name: 'Display (Roll Up)', url: 'display.html' },
      { name: 'Impresoras', url: 'impresoras.html' }
    ];

    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar...';
    searchInput.className = 'search-input';
    
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'search-options';

    // Function to filter and display options
    function displayOptions(filter = '') {
      optionsContainer.innerHTML = '';
      
      const filteredOptions = searchOptions.filter(option => 
        option.name.toLowerCase().includes(filter.toLowerCase())
      );

      filteredOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'search-option';
        optionElement.textContent = option.name;
        optionElement.addEventListener('click', function() {
          window.location.href = option.url;
          dropdown.remove();
        });
        optionsContainer.appendChild(optionElement);
      });

      // Show "No results" if no matches
      if (filteredOptions.length === 0 && filter) {
        const noResults = document.createElement('div');
        noResults.className = 'search-no-results';
        noResults.textContent = 'No se encontraron resultados';
        optionsContainer.appendChild(noResults);
      }
    }

    // Initial display of all options
    displayOptions();

    // Add event listener for search input
    searchInput.addEventListener('input', function() {
      displayOptions(this.value);
    });

    // Assemble dropdown
    dropdown.appendChild(searchInput);
    dropdown.appendChild(optionsContainer);

    // Position dropdown relative to search button
    const searchButtonRect = buscarButton.getBoundingClientRect();
    dropdown.style.position = 'fixed';
    dropdown.style.top = (searchButtonRect.bottom + 5) + 'px';
    dropdown.style.left = searchButtonRect.left + 'px';
    dropdown.style.zIndex = '1000';

    // Add to document
    document.body.appendChild(dropdown);

    // Focus on input
    searchInput.focus();

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
      if (!dropdown.contains(e.target) && !buscarButton.contains(e.target)) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    });
  }

  // Add ripple effect to navigation buttons
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  // Add ripple effect to all clickable navigation elements
  const clickableElements = document.querySelectorAll(`
    .group, .group-2, .group-3, .group-4, .group-6, .overlap-group-2
  `);

  clickableElements.forEach(element => {
    element.addEventListener('click', createRipple);
  });

  // Accordion functionality
  const antesSection = document.querySelector('.antes-impresion-section');
  const despuesSection = document.querySelector('.despues-impresion-section');
  const almacenamientoSection = document.querySelector('.almacenamiento-section');
  const component5 = document.querySelector('.component-5');
  const polygon2 = document.querySelector('.polygon-2');
  const polygon3 = document.querySelector('.polygon-3');
  const rectangle13 = document.querySelector('.rectangle-13');
  const rectangle14 = document.querySelector('.rectangle-14');

  function resetAllPositions() {
    // Reset all elements to their original positions
    if (despuesSection) despuesSection.style.transform = '';
    if (almacenamientoSection) almacenamientoSection.style.transform = '';
    if (component5) component5.style.transform = '';
    if (polygon2) polygon2.style.transform = '';
    if (polygon3) polygon3.style.transform = '';
    if (rectangle13) rectangle13.style.transform = '';
    if (rectangle14) rectangle14.style.transform = '';
  }

  function updatePositions() {
    const antesExpanded = antesSection && antesSection.classList.contains('expanded');
    const despuesExpanded = despuesSection && despuesSection.classList.contains('expanded');
    const almacenamientoExpanded = almacenamientoSection && almacenamientoSection.classList.contains('expanded');

    // Reset all positions first
    resetAllPositions();

    // Apply transforms based on what's expanded
    if (antesExpanded && !despuesExpanded && !almacenamientoExpanded) {
      // Only ANTES DE LA IMPRESIÓN is expanded
      if (despuesSection) despuesSection.style.transform = 'translateY(160px)';
      if (almacenamientoSection) almacenamientoSection.style.transform = 'translateY(160px)';
      if (component5) component5.style.transform = 'translateY(160px)';
      if (polygon2) polygon2.style.transform = 'translateY(160px)';
      if (polygon3) polygon3.style.transform = 'translateY(160px)';
      if (rectangle13) rectangle13.style.transform = 'translateY(160px)';
      if (rectangle14) rectangle14.style.transform = 'translateY(160px)';
    } else if (despuesExpanded && !antesExpanded && !almacenamientoExpanded) {
      // Only DESPUES DE LA IMPRESIÓN is expanded
      if (almacenamientoSection) almacenamientoSection.style.transform = 'translateY(200px)';
      if (component5) component5.style.transform = 'translateY(200px)';
      if (polygon2) polygon2.style.transform = 'translateY(200px)';
      if (polygon3) polygon3.style.transform = 'translateY(200px)';
      if (rectangle13) rectangle13.style.transform = 'translateY(200px)';
      if (rectangle14) rectangle14.style.transform = 'translateY(200px)';
    } else if (almacenamientoExpanded && !antesExpanded && !despuesExpanded) {
      // Only ALMACENAMIENTO ADECUADO is expanded
      if (component5) component5.style.transform = 'translateY(180px)';
      if (polygon2) polygon2.style.transform = 'translateY(180px)';
      if (polygon3) polygon3.style.transform = 'translateY(180px)';
      if (rectangle13) rectangle13.style.transform = 'translateY(180px)';
      if (rectangle14) rectangle14.style.transform = 'translateY(180px)';
    }
    // If none is expanded, all positions remain reset (original positions)
  }

  function toggleSection(section, otherSections) {
    const isExpanded = section.classList.contains('expanded');
    
    // Close other sections if they're open
    otherSections.forEach(otherSection => {
      if (otherSection && otherSection.classList.contains('expanded')) {
        otherSection.classList.remove('expanded');
      }
    });
    
    // Toggle current section
    if (isExpanded) {
      section.classList.remove('expanded');
    } else {
      section.classList.add('expanded');
    }

    // Update all positions based on current state
    updatePositions();
  }

  if (antesSection) {
    antesSection.addEventListener('click', function() {
      toggleSection(antesSection, [despuesSection, almacenamientoSection]);
    });
  }

  if (despuesSection) {
    despuesSection.addEventListener('click', function() {
      toggleSection(despuesSection, [antesSection, almacenamientoSection]);
    });
  }

  if (almacenamientoSection) {
    almacenamientoSection.addEventListener('click', function() {
      toggleSection(almacenamientoSection, [antesSection, despuesSection]);
    });
  }

  // Download button functionality
  const downloadButton = document.querySelector('.component-5');
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      window.open('https://drive.google.com/file/d/1R74_9DKvnO5U0vvQh9_5K1XfNIASjnnC/view?usp=sharing', '_blank');
    });
  }
});
