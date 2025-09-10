// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
  
  // Hero Slider Functionality
  let currentSlide = 1;
  let slideInterval;
  const totalSlides = 2;
  
  function showSlide(slideNumber) {
    // Hide all slides and content
    document.querySelectorAll('.hero-slide').forEach(slide => {
      slide.classList.remove('active');
    });
    document.querySelectorAll('.slide-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelectorAll('.hero-dot').forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show current slide and content
    const currentSlideElement = document.getElementById(`slide-${slideNumber}`);
    const currentContentElement = document.getElementById(`content-${slideNumber}`);
    const currentDot = document.querySelector(`[data-slide="${slideNumber}"]`);
    
    if (currentSlideElement) currentSlideElement.classList.add('active');
    if (currentContentElement) currentContentElement.classList.add('active');
    if (currentDot) currentDot.classList.add('active');
    
    currentSlide = slideNumber;
  }
  
  function nextSlide() {
    const next = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    showSlide(next);
  }
  
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 10000); // 10 seconds
  }
  
  function stopSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }
  
  function restartSlideshow() {
    stopSlideshow();
    startSlideshow();
  }
  
  // Initialize slideshow
  showSlide(1);
  startSlideshow();
  
  // Manual navigation dots
  document.querySelectorAll('.hero-dot').forEach(dot => {
    dot.addEventListener('click', function() {
      const slideNumber = parseInt(this.getAttribute('data-slide'));
      showSlide(slideNumber);
      restartSlideshow(); // Restart the timer when manually navigating
    });
  });
  
  // Navigation arrows
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      const prev = currentSlide <= 1 ? totalSlides : currentSlide - 1;
      showSlide(prev);
      restartSlideshow();
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      nextSlide();
      restartSlideshow();
    });
  }

  
  // Pause slideshow on hover over hero area
  const heroArea = document.querySelector('.overlap');
  if (heroArea) {
    heroArea.addEventListener('mouseenter', stopSlideshow);
    heroArea.addEventListener('mouseleave', startSlideshow);
  }

  
  // IGRAP logo - reload page
  const iGrapLogo = document.querySelector('.group');
  if (iGrapLogo) {
    iGrapLogo.addEventListener('click', function() {
      window.location.reload();
    });
  }

  // Navigation buttons
  const productosButton = document.querySelector('.group-2');
  const nosotrosButton = document.querySelector('.group-3');
  const contactoButton = document.querySelector('.group-4');
  const buscarButton = document.querySelector('.overlap-group-2');
  const cotizaButton = document.querySelector('.group-5');

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

  // "AGENDA UNA DEMOSTRACION AQUÍ" button - same as Contacto button
  const agendaDemoButton = document.querySelector('.AGENDA-UNA');
  const agendaDemoCircle = document.querySelector('.ellipse-2');
  const agendaDemoArrow = document.querySelector('.img');
  const agendaDemoAqui = document.querySelector('.text-wrapper-9');
  
  // Function to handle demo button click
  function handleDemoClick() {
    window.location.href = 'contacto.html';
    console.log('AGENDA UNA DEMOSTRACION clicked - redirecting to contacto.html');
  }
  
  // Add click handlers to all demo button elements
  if (agendaDemoButton) {
    agendaDemoButton.addEventListener('click', handleDemoClick);
  }
  if (agendaDemoCircle) {
    agendaDemoCircle.addEventListener('click', handleDemoClick);
  }
  if (agendaDemoArrow) {
    agendaDemoArrow.addEventListener('click', handleDemoClick);
  }
  if (agendaDemoAqui) {
    agendaDemoAqui.addEventListener('click', handleDemoClick);
  }

  // "TODO EN UN SOLO LUGAR" button - same as Nosotros button
  const todoEnUnSoloLugarButton1 = document.querySelector('.text-wrapper');
  const todoEnUnSoloLugarButton2 = document.querySelector('.text-wrapper-2');
  
  // Function to handle "Todo en un Solo Lugar" button click
  function handleTodoEnUnSoloLugarClick() {
    window.location.href = 'nosotros.html';
    console.log('TODO EN UN SOLO LUGAR clicked - redirecting to nosotros.html');
  }
  
  // Add click handlers to both text elements for both slides
  const todoButtons = document.querySelectorAll('.text-wrapper, .text-wrapper-2, .text-wrapper-subtitle');
  todoButtons.forEach(button => {
    button.addEventListener('click', handleTodoEnUnSoloLugarClick);
  });


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
    
    // Search options with their respective URLs
    const searchOptions = [
      { name: 'Productos', url: 'productos.html' },
      { name: 'Nosotros', url: 'nosotros.html' },
      { name: 'Contacto', url: 'contacto.html' },
      { name: 'Vinilos', url: 'vinil.html' },
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


  if (cotizaButton) {
    cotizaButton.addEventListener('click', function() {
      // Open WhatsApp with pre-filled message for quote request
      const whatsappURL = 'https://api.whatsapp.com/send?phone=51912207645&text=¡Hola!%20Deseo%20cotizar%20productos.%20¿Podrías%20darme%20más%20información?';
      window.open(whatsappURL, '_blank');
      console.log('Cotiza clicked - opening WhatsApp');
    });
  }

  // "Ver Más" button - redirect to productos.html
  const verMasButton = document.querySelector('.overlap-9');
  if (verMasButton) {
    verMasButton.addEventListener('click', function() {
      window.location.href = 'productos.html';
      console.log('Ver Más clicked - redirecting to productos.html');
    });
  }

  // "Más Detalles" buttons - specific navigation for each product
  
  // Display (Roll Up) - Más Detalles button
  const displayMasDetallesButton = document.querySelector('.overlap-5 .overlap-6');
  if (displayMasDetallesButton) {
    displayMasDetallesButton.addEventListener('click', function() {
      window.location.href = 'display.html';
      console.log('Display Más Detalles clicked - redirecting to display.html');
    });
  }

  // Impresora ECO INKALL - Más Detalles button
  const impresoraMasDetallesButton = document.querySelector('.overlap-7 .overlap-8');
  if (impresoraMasDetallesButton) {
    impresoraMasDetallesButton.addEventListener('click', function() {
      window.location.href = 'impresoras.html';
      console.log('Impresora Más Detalles clicked - redirecting to impresoras.html');
    });
  }

  // Vinilos y Laminados - Más Detalles button
  const vinilosMasDetallesButton = document.querySelector('.overlap-10 .overlap-6');
  if (vinilosMasDetallesButton) {
    vinilosMasDetallesButton.addEventListener('click', function() {
      window.location.href = 'vinil.html';
      console.log('Vinilos Más Detalles clicked - redirecting to vinil.html');
    });
  }


  // "VER PRODUCTOS" button - same as Productos button
  const verProductosButton = document.querySelector('.overlap-group');
  if (verProductosButton) {
    verProductosButton.addEventListener('click', function() {
      window.location.href = 'productos.html';
      console.log('VER PRODUCTOS clicked - redirecting to productos.html');
    });
  }

  // "SUSCRIBETE" button
  const suscribeteButton = document.querySelector('.rectangle-27');
  if (suscribeteButton) {
    suscribeteButton.addEventListener('click', function() {
      console.log('SUSCRIBETE clicked');
      // Add subscription logic here later
    });
  }

  // "¿DUDAS? CONTACTANOS" button - WhatsApp with doubt message
  const dudasContactButton = document.querySelector('.overlap-19');
  if (dudasContactButton) {
    dudasContactButton.addEventListener('click', function() {
      // Open WhatsApp with pre-filled message for doubts/questions
      const whatsappURL = 'https://api.whatsapp.com/send?phone=51912207645&text=¡Hola!%20Tengo%20una%20duda.%20¿Podrías%20ayudarme?';
      window.open(whatsappURL, '_blank');
      console.log('¿DUDAS? CONTACTANOS clicked - opening WhatsApp with doubt message');
    });
  }

  // Keep the catalog button separate
  const catalogContactButton = document.querySelector('.overlap-20');
  if (catalogContactButton) {
    catalogContactButton.addEventListener('click', function() {
      console.log('Catalog contact button clicked');
      // This already has its own functionality for catalog
    });
  }


  // "VER EL CATALOGO" button - open Google Drive catalog
  const catalogButton = document.querySelector('.overlap-20');
  if (catalogButton) {
    catalogButton.addEventListener('click', function() {
      // Open Google Drive catalog in new tab
      window.open('https://drive.google.com/file/d/1TY6xfa1EC4ubIwp3EL5H8WVStAs6Ft9C/view?usp=sharing', '_blank');
      
      console.log('Catalog opened in new tab');
    });
  }

  // Add ripple effect to buttons
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

  // Add ripple effect to all clickable elements
  const clickableElements = document.querySelectorAll(`
    .overlap-9, .overlap-6, .overlap-8, .group-2, .group-3, .group-4, 
    .overlap-group-2, .group-5, .overlap-group, .rectangle-27, .overlap-19, 
    .overlap-20, .group, .AGENDA-UNA, .ellipse-2, .img, .text-wrapper-9,
    .text-wrapper, .text-wrapper-2, .group-7, .group-9
  `);


  clickableElements.forEach(element => {
    element.addEventListener('click', createRipple);
  });
});
