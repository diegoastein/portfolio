/* ==========================================================================
   DEVSTUDIO PORTFOLIO - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Case Studies Data Dictionary ---
  const caseStudiesData = {
    flota: {
      badge: "SaaS B2B / Logística",
      title: "Control de Flota, Depósito & Obras",
      tags: ["Firebase Firestore", "Node.js", "JavaScript Realtime", "Panel B2B"],
      desafio: "Una empresa constructora con más de 40 vehículos y equipos pesados en obra sufría ineficiencia y falta de trazabilidad en vales de combustible y partes diarios en papel.",
      solucion: "Desarrollé una plataforma web integral en tiempo real donde choferes y maquinistas registran partes diarios y cargas con validación de kilometraje. El panel de administración alerta consumos anómalos y vencimientos de service.",
      impacto: [
        { label: "Reducción en Desvíos", value: "-35%" },
        { label: "Trazabilidad de Cargas", value: "100%" },
        { label: "Partes Diarios", value: "Digitales" }
      ],
      isPrivate: true,
      accessNotes: "Sistema enterprise privado de uso interno corporativo. Requiere autenticación previa para navegar las funciones del dashboard.",
      credentials: "Usuario prueba: demo@empresa.com | Clave: demo123",
      demoUrl: "https://flota-60b3c.web.app"
    },

    herramientas: {
      badge: "E-Commerce & Ventas Online",
      title: "Plataforma de E-Commerce & Venta de Herramientas",
      tags: ["Vite / React", "MercadoPago API", "Cálculo de Envíos", "Checkout B2C/B2B", "Firebase"],
      desafio: "Un comercio de herramientas e insumos industriales necesitaba digitalizar sus ventas de forma integral, pasando de un catálogo tradicional a una tienda online completa con carrito, cobros automatizados y despacho de envíos.",
      solucion: "Desarrollé una plataforma de e-commerce con arquitectura moderna (Vite/React). Permite navegación fluida en catálogo, integración de pasarelas de pago (Mercado Pago, tarjetas de crédito/débito), cálculo de costo de envío según código postal o retiro en local, y panel de administración de pedidos.",
      impacto: [
        { label: "Pasarela de Pagos", value: "MercadoPago / Cards" },
        { label: "Cálculo de Logística", value: "Envíos por CP" },
        { label: "Flujo de Checkout", value: "Integrado & Fluido" }
      ],
      isPrivate: false,
      accessNotes: "Plataforma de e-commerce abierta con carrito, procesamiento de pagos y gestión de envíos.",
      credentials: "Acceso libre a la tienda.",
      demoUrl: "https://herramientaslibres.web.app"
    },

    constructora: {
      badge: "Institucional & Licitaciones",
      title: "Landing Page Corporativa — JL Constructora SRL",
      tags: ["HTML5 Semántico", "CSS3 Vanilla", "SEO B2B", "Mobile First"],
      desafio: "La constructora necesitaba presentar credenciales ante licitaciones y empresas de alto ticket. Su sitio web anterior era lento y no transmitía solvencia corporativa.",
      solucion: "Implementé una web institucional ultra limpia sin librerías pesadas, destacando proyectos ejecutados, capacidad técnica y botón directo a presupuestos.",
      impacto: [
        { label: "Tiempo de Carga", value: "< 1.2s" },
        { label: "Adaptabilidad Móvil", value: "100%" },
        { label: "Consultas B2B", value: "+40%" }
      ],
      isPrivate: false,
      accessNotes: "Sitio web de acceso público y optimizado para buscadores.",
      credentials: "Acceso libre sin credenciales.",
      demoUrl: "https://www.jlsrl.com.ar"
    },

    neocalcu: {
      badge: "Salud & Dosificación Neonatal",
      title: "NeoCalcu — Calculadora Neonatal & UCIN",
      tags: ["TypeScript", "PWA Offline", "Salud / Precisión", "UCIN"],
      desafio: "En unidades de terapia intensiva neonatal (UCIN), el cálculo de dosis por peso extremadamente bajo en recién nacidos requiere precisión matemática absoluta.",
      solucion: "Desarrollé NeoCalcu, una PWA offline de uso bedside que calcula dosis de fármacos neonatales e infusiones con sliders interactivos y validación clínica.",
      impacto: [
        { label: "Margen de Error", value: "0%" },
        { label: "Modo de Uso", value: "100% Offline" },
        { label: "Velocidad de Cálculo", value: "< 2 seg" }
      ],
      isPrivate: false,
      accessNotes: "Aplicación clínica progresiva instalable en dispositivos móviles.",
      credentials: "Acceso libre / PWA.",
      demoUrl: "https://diegoastein.github.io/neocalcu/"
    },

    egpediatria: {
      badge: "Emergencias Pediátricas",
      title: "EGPediatria — Estoy de Guardia Pediatría",
      tags: ["JavaScript", "PWA Offline", "SAP / PALS", "Emergencias"],
      desafio: "En la guardia de pediatría, el cálculo rápido de inotrópicos, antiepilépticos y diluciones bajo estrés requiere una guía gráfica de acceso en segundos.",
      solucion: "Desarrollé EGPediatria, una aplicación interactiva que genera instrucciones exactas de dilución, volúmenes a extraer por ampolla y tablas de dosificación según estándares SAP y PALS.",
      impacto: [
        { label: "Protocolos SAP/PALS", value: "Integrados" },
        { label: "Instrucciones Dilución", value: "Paso a paso" },
        { label: "Formato Imprimible", value: "Hojas de pared" }
      ],
      isPrivate: false,
      accessNotes: "Herramienta médica clínica interactiva de acceso público.",
      credentials: "Acceso libre.",
      demoUrl: "https://estoydeguardia.com.ar"
    },

    neomonitor: {
      badge: "Simulación Médica & Realtime",
      title: "NeoMonitor — Simulador Virtual de Monitor Multiparamétrico",
      tags: ["Node.js", "WebSockets", "Realtime API", "Simulación Clínca"],
      desafio: "Los talleres de simulación médica y RCP neonatal (NRP) requieren monitores multiparamétricos costosos y difíciles de trasladar para entrenar a los profesionales.",
      solucion: "Creé NeoMonitor (neomonitor.pro), un software de simulación que convierte cualquier pantalla, Smart TV o tablet en monitor multiparamétrico interactivo, controlado en tiempo real desde el celular del instructor mediante WebSockets.",
      impacto: [
        { label: "Sincronización WebSockets", value: "< 20ms" },
        { label: "Control Remoto", value: "100% Móvil" },
        { label: "Compatibilidad", value: "Cualquier Pantalla" }
      ],
      isPrivate: false,
      accessNotes: "Plataforma de simulación interactiva sin instalación previa.",
      credentials: "Acceso libre a la demo en neomonitor.pro.",
      demoUrl: "https://neomonitor.pro/"
    }
  };

  // --- 2. Category Filtering ---
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

  // --- 3. Case Study Modal ---
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
  const modalImpactGrid = document.getElementById('modalImpactGrid');
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
        if (data.isPrivate) {
          demoCredentialsBox.style.display = 'block';
          demoCredentialsBox.innerHTML = `
            <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.2rem;">🔑 Usuario de prueba:</span>
            <code>${data.credentials}</code>
          `;
        } else {
          demoCredentialsBox.style.display = 'none';
        }

        // Tags
        modalTags.innerHTML = data.tags.map(t => `<span class="category-badge">${t}</span>`).join('');

        // Metrics Grid
        modalImpactGrid.innerHTML = data.impacto.map(imp => `
          <div class="info-card text-center">
            <strong style="font-size:1.2rem; font-family:var(--font-mono); color:var(--accent-emerald); display:block;">${imp.value}</strong>
            <span style="font-size:0.82rem; color:var(--text-muted);">${imp.label}</span>
          </div>
        `).join('');

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

  // --- 4. Mobile Menu Navigation ---
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
