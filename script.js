/* ==========================================================================
   DEVSTUDIO PORTFOLIO - INTERACTIVE SCRIPT WITH MODULE GALLERIES (NO DOMAINS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Case Studies Data Dictionary (No Domains Exposed) ---
  const caseStudiesData = {
    flota: {
      badge: "SaaS B2B / Logística Privada",
      title: "Control de Flota, Depósito & Obras",
      tags: ["Firebase Firestore", "Node.js", "JavaScript Realtime", "Panel B2B"],
      desafio: "Una empresa constructora con más de 40 vehículos y equipos pesados en obra sufría ineficiencia y falta de trazabilidad en vales de combustible y partes diarios en papel.",
      solucion: "Desarrollé una plataforma web integral en tiempo real donde choferes y maquinistas registran partes diarios y cargas con validación de kilometraje. El panel de administración alerta consumos anómalos y vencimientos de service.",
      modules: [
        { title: "🚚 Control de Vehículos & Maquinaria", desc: "Seguimiento individual por unidad, horas de motor, odómetro y ficha técnica de la flota." },
        { title: "⛽ Registro & Vales de Combustible", desc: "Carga de vales digitales con validación fotográfica y detección de consumos atípicos." },
        { title: "🏗️ Asignación de Recursos a Obras", desc: "Imputación directa de costos de equipos y materiales según cada obra activa." },
        { label: "📊 Partes Diarios Digitales", desc: "Formulario web rápido para choferes sin necesidad de papel ni planillas dispersas." }
      ],
      isPrivate: true,
      accessNotes: "Sistema enterprise privado de uso interno corporativo. Debido a la confidencialidad de los datos operativos de la empresa, el acceso al entorno de producción está restringido.",
      credentials: "Modo Privado / Datos de demostración bajo solicitud.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20el%20sistema%20de%20gestion%20de%20flotas"
    },

    herramientas: {
      badge: "E-Commerce & Ventas Online",
      title: "Plataforma de E-Commerce & Venta de Herramientas",
      tags: ["Vite / React", "MercadoPago API", "Cálculo de Envíos", "Checkout B2C/B2B", "Firebase"],
      desafio: "Un comercio de herramientas e insumos industriales necesitaba digitalizar sus ventas de forma integral, pasando de un catálogo tradicional a una tienda online completa con carrito, cobros automatizados y despacho de envíos.",
      solucion: "Desarrollé una plataforma de e-commerce con arquitectura moderna (Vite/React). Permite navegación fluida en catálogo, integración de pasarelas de pago (Mercado Pago, tarjetas de crédito/débito), cálculo de costo de envío según código postal o retiro en local, y panel de administración de pedidos.",
      modules: [
        { title: "🔍 Buscador & Filtros por Marcas", desc: "Búsqueda instantánea en <50ms filtrada por familias (DeWalt, Bosch, Stanley)." },
        { title: "💳 Checkout Integrado (Mercado Pago)", desc: "Procesamiento seguro de cobros con tarjetas de crédito, débito y dinero en cuenta." },
        { title: "📦 Cotización Dinámica de Envíos", desc: "Cálculo en tiempo real del costo de despacho según el código postal del cliente." }
      ],
      isPrivate: false,
      accessNotes: "Plataforma de e-commerce abierta con carrito, procesamiento de pagos y gestión de envíos por CP.",
      credentials: "Acceso libre a la tienda.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20la%20plataforma%20de%20ecommerce"
    },

    constructora: {
      badge: "Institucional / Modo Escritorio",
      title: "Landing Page Corporativa — JL Constructora SRL",
      tags: ["HTML5 Semántico", "CSS3 Vanilla", "SEO B2B", "Mobile First"],
      desafio: "La constructora necesitaba presentar credenciales ante licitaciones y empresas de alto ticket. Su sitio web anterior era lento y no transmitía solvencia corporativa.",
      solucion: "Implementé una web institucional ultra limpia sin librerías pesadas, destacando proyectos ejecutados, capacidad técnica y botón directo a presupuestos.",
      modules: [
        { title: "🏗️ Portfolio de Obras Ejecutadas", desc: "Galería categorizada de infraestructura vial, obras civiles y arquitectura." },
        { title: "⚡ Rendimiento & Carga Rápida", desc: "Optimización de assets para velocidad <1.2s desde celulares en obra." },
        { title: "📩 Formulario de Cotizaciones B2B", desc: "Canal directo de consultas corporativas e información institucional." }
      ],
      isPrivate: false,
      accessNotes: "Sitio web de acceso público y optimizado para buscadores.",
      credentials: "Acceso libre sin credenciales.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20un%20sitio%20web%20institucional"
    },

    neocalcu: {
      badge: "App Móvil / Dosificación Neonatal",
      title: "NeoCalcu — Calculadora Neonatal & UCIN",
      tags: ["TypeScript", "PWA Offline", "Salud / Precisión", "UCIN"],
      desafio: "En unidades de terapia intensiva neonatal (UCIN), el cálculo de dosis por peso extremadamente bajo en recién nacidos requiere precisión matemática absoluta.",
      solucion: "Desarrollé NeoCalcu, una PWA offline de uso bedside que calcula dosis de fármacos neonatales e infusiones con sliders interactivos y validación clínica.",
      modules: [
        { title: "⚖️ Control Numérico & Slider por Peso", desc: "Ajuste preciso de 3 kg a 50 kg con respuesta en milisegundos." },
        { title: "💉 Tabla de Infusiones Continuas", desc: "Cálculo automático de inotrópicos (Dopamina, Dobutamina, Adrenalina) en ml/h." },
        { title: "📲 Operatividad 100% Offline", desc: "Sin dependencia de conectividad a internet en salas de guardia." }
      ],
      isPrivate: false,
      accessNotes: "Aplicación clínica progresiva instalable en dispositivos móviles.",
      credentials: "Acceso libre / PWA.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20apps%20medicas%20o%20calculadoras"
    },

    egpediatria: {
      badge: "App Móvil / Emergencias Pediátricas",
      title: "EGPediatria — Estoy de Guardia Pediatría",
      tags: ["JavaScript", "PWA Offline", "SAP / PALS", "Emergencias"],
      desafio: "En la guardia de pediatría, el cálculo rápido de inotrópicos, antiepilépticos y diluciones bajo estrés requiere una guía gráfica de acceso en segundos.",
      solucion: "Desarrollé EGPediatria, una aplicación interactiva que genera instrucciones exactas de dilución, volúmenes a extraer por ampolla y tablas de dosificación según estándares SAP y PALS.",
      modules: [
        { title: "📊 Tablas de Dosificación e Inotrópicos", desc: "Guía gráfica clara por rangos de peso para urgencias pediátricas." },
        { title: "💊 Diluciones Paso a Paso", desc: "Instrucciones de volumen a extraer de ampolla pura y fluido de dilución." },
        { title: "🖨️ Formato de Hojas de Pared Imprimibles", desc: "Estilos específicos para impresión rápida de pósteres de guardia." }
      ],
      isPrivate: false,
      accessNotes: "Herramienta médica clínica interactiva de acceso público.",
      credentials: "Acceso libre.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20EGPediatria"
    },

    neomonitor: {
      badge: "Simulación / Multi-Dispositivo",
      title: "NeoMonitor — Simulador Virtual de Monitor Multiparamétrico",
      tags: ["Node.js", "WebSockets", "Realtime API", "Simulación Clínica"],
      desafio: "Los talleres de simulación médica y RCP neonatal (NRP) requieren monitores multiparamétricos costosos y difíciles de trasladar para entrenar a los profesionales.",
      solucion: "Creé NeoMonitor, un software de simulación que convierte cualquier pantalla, Smart TV o tablet en monitor multiparamétrico interactivo, controlado en tiempo real desde el celular del instructor mediante WebSockets.",
      modules: [
        { title: "⚡ Sincronización WebSockets <20ms", desc: "Respuesta inmediata de las curvas de ECG y SpO2 al modificar parámetros." },
        { title: "📱 Control Remoto Desde Smartphone", desc: "El instructor altera signos vitales y activa alarmas desde su celular." },
        { title: "🖥️ Compatibilidad Multi-Pantalla", desc: "Funciona en navegadores de PC, Smart TV o Tablets sin instalar programas." }
      ],
      isPrivate: false,
      accessNotes: "Plataforma de simulación interactiva sin instalación previa.",
      credentials: "Acceso libre a la demo.",
      demoUrl: "https://wa.me/5491100000000?text=Hola,%20quisiera%20consultar%20por%20el%20simulador%20NeoMonitor"
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
        if (data.isPrivate) {
          demoCredentialsBox.style.display = 'block';
          demoCredentialsBox.innerHTML = `
            <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.2rem;">🔑 Nivel de Acceso:</span>
            <code>${data.credentials}</code>
          `;
        } else {
          demoCredentialsBox.style.display = 'none';
        }

        // Tags
        modalTags.innerHTML = data.tags.map(t => `<span class="category-badge">${t}</span>`).join('');

        // Interactive Module Cards Gallery (No old screenshots or domains exposed)
        if (data.modules && data.modules.length > 0) {
          modalGalleryGrid.innerHTML = data.modules.map(m => `
            <div class="info-card" style="border-left: 3px solid var(--accent-sky);">
              <h5 style="font-size:0.92rem; color:var(--accent-sky); margin-bottom:0.3rem;">${m.title || m.label}</h5>
              <p style="font-size:0.82rem; color:var(--text-muted);">${m.desc}</p>
            </div>
          `).join('');
        } else {
          modalGalleryGrid.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">Información de módulos disponible a través de consulta directa.</p>`;
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
