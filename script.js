/* ==========================================================================
   DEVSTUDIO PORTFOLIO - INTERACTIVE SCRIPT WITH REAL GALLERY SLIDERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Case Studies Data Dictionary (Authentic Screenshots) ---
  const caseStudiesData = {
    flota: {
      badge: "SaaS B2B / Logística Privada",
      title: "Control de Flota, Depósito & Obras",
      tags: ["Firebase Firestore", "Node.js", "JavaScript Realtime", "Panel B2B"],
      desafio: "Una empresa constructora con más de 40 vehículos y equipos pesados en obra sufría ineficiencia y falta de trazabilidad en vales de combustible y partes diarios en papel.",
      solucion: "Desarrollamos una plataforma web integral en tiempo real donde los operadores registran partes diarios y cargas con validación de kilometraje. El panel de administración alerta consumos anómalos y vencimientos de service.",
      screenshots: [
        "img/flota_1.png",
        "img/flota_2.png",
        "img/flota_3.png",
        "img/flota_4.png",
        "img/flota_5.png"
      ],
      isPrivate: true,
      accessNotes: "Sistema enterprise privado de uso interno corporativo. Debido a la confidencialidad de los datos operativos de la empresa, se exhiben las capturas directas de la aplicación actual.",
      credentials: "Modo Privado / Datos de demostración bajo solicitud.",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    },

    herramientas: {
      badge: "E-Commerce & Ventas Online",
      title: "Plataforma de E-Commerce & Venta de Herramientas",
      tags: ["Vite / React", "MercadoPago API", "Cálculo de Envíos", "Checkout B2C/B2B", "Firebase"],
      desafio: "Un comercio de herramientas e insumos industriales necesitaba digitalizar sus ventas de forma integral, pasando de un catálogo tradicional a una tienda online completa con carrito, cobros automatizados y despacho de envíos.",
      solucion: "Desarrollamos una plataforma de e-commerce con arquitectura moderna (Vite/React). Permite navegación fluida en catálogo, integración de pasarelas de pago (Mercado Pago, tarjetas de crédito/débito), cálculo de costo de envío según código postal o retiro en local, y panel de administración de pedidos.",
      screenshots: [
        "img/herramientas_1.png",
        "img/herramientas_2.png"
      ],
      isPrivate: false,
      accessNotes: "Plataforma de e-commerce de acceso libre y público, disponible en herramientaslibres.web.app.",
      credentials: "Acceso libre en herramientaslibres.web.app",
      liveUrl: "https://herramientaslibres.web.app",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    },

    constructora: {
      badge: "Institucional / Modo Escritorio",
      title: "Landing Page Corporativa — JL Constructora SRL",
      tags: ["HTML5 Semántico", "CSS3 Vanilla", "SEO B2B", "Mobile First"],
      desafio: "La constructora necesitaba presentar credenciales ante licitaciones y empresas de alto ticket. Su sitio web anterior era lento y no transmitía solvencia corporativa.",
      solucion: "Implementamos una web institucional ultra limpia sin librerías pesadas, destacando proyectos ejecutados, capacidad técnica y botón directo a presupuestos.",
      screenshots: [
        "img/constructora_1.png",
        "img/constructora_2.png",
        "img/constructora_3.png"
      ],
      isPrivate: false,
      accessNotes: "Sitio web de acceso público y optimizado para buscadores, disponible en www.jlsrl.com.ar.",
      credentials: "Acceso libre en www.jlsrl.com.ar",
      liveUrl: "https://www.jlsrl.com.ar",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    },

    neocalcu: {
      badge: "App Móvil / Dosificación Neonatal",
      title: "NeoCalcu — Calculadora Neonatal & UCIN",
      tags: ["TypeScript", "PWA Offline", "Salud / Precisión", "UCIN"],
      desafio: "En unidades de terapia intensiva neonatal (UCIN), el cálculo de dosis por peso extremadamente bajo en recién nacidos requiere precisión matemática absoluta.",
      solucion: "Desarrollamos NeoCalcu, una PWA offline de uso bedside que calcula dosis de fármacos neonatales e infusiones con sliders interactivos y validación clínica.",
      screenshots: [
        "img/neocalcu_1.png",
        "img/neocalcu_2.png",
        "img/neocalcu_3.png"
      ],
      isPrivate: false,
      accessNotes: "Aplicación clínica progresiva instalable en dispositivos móviles.",
      credentials: "Acceso libre / PWA.",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    },

    egpediatria: {
      badge: "App Móvil / Emergencias Pediátricas",
      title: "EGPediatria — Estoy de Guardia Pediatría",
      tags: ["JavaScript", "PWA Offline", "SAP / PALS", "Emergencias"],
      desafio: "En la guardia de pediatría, el cálculo rápido de inotrópicos, antiepilépticos y diluciones bajo estrés requiere una guía gráfica de acceso en segundos.",
      solucion: "Desarrollamos EGPediatria, una aplicación interactiva que genera instrucciones exactas de dilución, volúmenes a extraer por ampolla y tablas de dosificación según estándares SAP y PALS.",
      screenshots: [
        "img/egpediatria_1.png",
        "img/egpediatria_2.png",
        "img/egpediatria_3.png"
      ],
      isPrivate: false,
      accessNotes: "Herramienta médica clínica interactiva de acceso público.",
      credentials: "Acceso libre.",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    },

    neomonitor: {
      badge: "Simulación / Multi-Dispositivo",
      title: "NeoMonitor — Simulador Virtual de Monitor Multiparamétrico",
      tags: ["Node.js", "WebSockets", "Realtime API", "Simulación Clínica"],
      desafio: "Los talleres de simulación médica y RCP neonatal (NRP) requieren monitores multiparamétricos costosos y difíciles de trasladar para entrenar a los profesionales.",
      solucion: "Creamos NeoMonitor, un software de simulación que convierte cualquier pantalla, Smart TV o tablet en monitor multiparamétrico interactivo, controlado en tiempo real desde el celular del instructor mediante WebSockets.",
      screenshots: [
        "img/neomonitor_1.png",
        "img/neomonitor_2.png"
      ],
      isPrivate: false,
      accessNotes: "Plataforma de simulación interactiva sin instalación previa.",
      credentials: "Acceso libre a la demo.",
      demoUrl: "https://www.instagram.com/DAStudio2026/"
    }
  };

  // --- 2. Interactive Card Gallery Sliders ---
  const cardSliders = document.querySelectorAll('.card-gallery-slider');

  cardSliders.forEach(slider => {
    const images = slider.querySelectorAll('.gallery-img');
    const prevBtn = slider.querySelector('.prev-arrow');
    const nextBtn = slider.querySelector('.next-arrow');
    const counter = slider.querySelector('.gallery-counter');
    let currentIndex = 0;

    function updateSlider() {
      images.forEach((img, idx) => {
        img.classList.toggle('active', idx === currentIndex);
      });
      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
      });
    }
  });

  // --- 3. Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Case Study Modal ---
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseBottomBtn = document.getElementById('modalCloseBottomBtn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  // Modal Elements
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalTags = document.getElementById('modalTags');
  const modalDesafioText = document.getElementById('modalDesafioText');
  const modalSolucionText = document.getElementById('modalSolucionText');
  const modalGalleryGrid = document.getElementById('modalGalleryGrid');
  const modalAccessNotes = document.getElementById('modalAccessNotes');
  const demoCredentialsBox = document.getElementById('demoCredentialsBox');
  const modalDemoLink = document.getElementById('modalDemoLink');

  // Tabs
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  modalTabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      modalTabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tabBtn.classList.add('active');
      const targetTab = tabBtn.getAttribute('data-tab');
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = caseStudiesData[projectId];

      if (data) {
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalDesafioText.textContent = data.desafio;
        modalSolucionText.textContent = data.solucion;
        modalAccessNotes.textContent = data.accessNotes;
        modalDemoLink.href = data.demoUrl;

        // Credentials Box
        if (data.isPrivate || data.liveUrl) {
          demoCredentialsBox.style.display = 'block';
          const liveLinkHtml = data.liveUrl
            ? `<a href="${data.liveUrl}" target="_blank" rel="noopener" style="color:var(--accent-sky);">${data.liveUrl.replace('https://', '')}</a>`
            : `<code>${data.credentials}</code>`;
          demoCredentialsBox.innerHTML = `
            <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.2rem;">🔑 Nivel de Acceso:</span>
            ${liveLinkHtml}
          `;
        } else {
          demoCredentialsBox.style.display = 'none';
        }

        // Tags
        modalTags.innerHTML = data.tags.map(t => `<span class="category-badge">${t}</span>`).join('');

        // Real Screenshots Gallery Grid
        if (data.screenshots && data.screenshots.length > 0) {
          modalGalleryGrid.innerHTML = data.screenshots.map((src, idx) => `
            <button type="button" class="gallery-thumb" data-idx="${idx}" title="Hacé clic para ampliar">
              <img src="${src}" alt="Captura Real de la Web Actual" class="modal-gallery-img">
            </button>
          `).join('');

          modalGalleryGrid.querySelectorAll('.gallery-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
              openLightbox(data.screenshots, Number(thumb.getAttribute('data-idx')));
            });
          });
        } else {
          modalGalleryGrid.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">Sin capturas adicionales necesarias para este desarrollo.</p>`;
        }

        // Reset to first tab
        modalTabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        modalTabBtns[0].classList.add('active');
        tabContents[0].classList.add('active');

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalCloseBottomBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // --- 4b. Image Lightbox (in-page, no new tabs) ---
  const lightboxOverlay = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  let lightboxImages = [];
  let lightboxIndex = 0;

  function renderLightbox() {
    lightboxImg.src = lightboxImages[lightboxIndex];
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    const multipleImages = lightboxImages.length > 1;
    lightboxPrevBtn.style.display = multipleImages ? 'flex' : 'none';
    lightboxNextBtn.style.display = multipleImages ? 'flex' : 'none';
  }

  function openLightbox(images, startIndex) {
    lightboxImages = images;
    lightboxIndex = startIndex;
    renderLightbox();
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = 'hidden'; // case study modal stays open behind it
  }

  lightboxPrevBtn.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    renderLightbox();
  });

  lightboxNextBtn.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    renderLightbox();
  });

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrevBtn.click();
    if (e.key === 'ArrowRight') lightboxNextBtn.click();
  });

  // --- 5. Mobile Menu Navigation ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

});
