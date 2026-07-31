# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

**DevStudio Portfolio** es un sitio web de portafolio para un desarrollador web enfocado en software a medida, sistemas B2B, plataformas de e-commerce, aplicaciones de utilidad médica y sitios corporativos.

- **Repositorio GitHub**: [https://github.com/diegoastein/portfolio](https://github.com/diegoastein/portfolio)
- **Producción (GitHub Pages)**: [https://diegoastein.github.io/portfolio/](https://diegoastein.github.io/portfolio/)

---

## Commands

### Servidor Local de Previsualización
```bash
python3 -m http.server 8080 --directory /home/diegosteinberg/portfolio
```

### Git & Deploy
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

---

## Reglas de Diseño & Guías del Proyecto

### 1. Estética Sobria & Humana (Sin Neón)
- **Cero Efectos Neón / IA**: No utilizar fondos fluorescentes, luces radiales borrosas ni patrones sobrecargados estilo plantilla genérica de IA.
- **Paleta de Colores**: Fondo neutro Slate-950 (`#0d1117`), tarjetas (`#161b22`), bordes definidos (`#30363d`) y acentos sólidos en azul cielo (`#38bdf8`) y azul primario (`#2563eb`).
- **Tipografía**: *Plus Jakarta Sans* para títulos y cuerpo; *JetBrains Mono* para badges y código.

### 2. Capturas Reales (Cero Mockups Ficticios)
- **Imágenes Reales**: Se deben utilizar únicamente capturas de pantalla reales de las webs en producción guardadas en la carpeta `img/`.
- **Prohibición de Mockups**: No utilizar maquetados gráficos dibujaos o ilustrados.

### 3. Ocultamiento de Dominios
- **Cero URLs Expuestas**: No mostrar nombres de dominio (`.web.app`, `.com.ar`, `.pro`) en las barras superiores de los marcos de escritorio o celulares.
- **Titulares Descriptivos**: Utilizar etiquetas funcionales limpias (ej. `🔒 Panel de Gestión de Flota`, `🛒 Tienda Online & Catálogo`, `📱 App Clínica Offline`, `📈 Monitor de Simulación`).

### 4. Marca Neutra
- Mantener la marca neutra `DevStudio / Desarrollo Web & Software a Medida`. No personalizar con nombres propios individuales.

### 5. Galerías Interactivas
- Todas las tarjetas de proyectos incorporan un carrusel interactivo (`.card-gallery-slider`) con flechas de navegación (`‹` y `›`) y contador (`1 / N`).
- Las ventanas modales despliegan la grilla completa de capturas reales para agrandar con un solo clic.

---

## TAREA PENDIENTE (investigación en curso — retomar aquí)

**Pedido del usuario**: "las capturas de pantalla que tiene cada uno de los ejemplos no siempre se corresponden con las webs originales. arreglalo"

### Diagnóstico confirmado (revisé las 16 imágenes de `img/` una por una)

Varias imágenes están mal asignadas: muestran la app **NeoCalcu** (header verde, `neocalcu.pro`, "Kit del Paciente Crítico", peso/EG/días) pero están usadas en las tarjetas de otros proyectos.

Mapeo actual en `index.html` vs. contenido real de la imagen:

| Archivo | Asignado a (en index.html) | Contenido REAL de la imagen |
|---|---|---|
| `flota_1.png`, `flota_2.png`, `flota_3.png` | flota | ✅ Correcto (flota-60b3c.web.app) |
| `constructora_1.png`, `_2.png`, `_3.png` | constructora | ✅ Probablemente correcto (fotos reales de obra con logo JL, no son capturas de navegador — a confirmar si es aceptable o si deberían ser screenshots del sitio web) |
| `herramientas_1.png` | herramientas (e-commerce) | ❌ Es una pantalla de pago con "@neomonitor.pro" → pertenece a **neomonitor** |
| `herramientas_2.png` | herramientas (e-commerce) | ❌ Es NeoCalcu (`neocalcu.pro`, lista de medicamentos) — idéntica a `neocalcu_1.png` (duplicado) |
| `neocalcu_1.png` | neocalcu | ✅ Correcto pero duplicada de `herramientas_2.png` |
| `neocalcu_2.png`, `neocalcu_3.png` | neocalcu | ✅ Correcto |
| `egpediatria_1.png`, `_2.png`, `_3.png` | egpediatria | ❌ Las 3 son NeoCalcu (mismo header verde, "Kit del Paciente Crítico") — NO son de la app EGPediatria |
| `neomonitor_1.png`, `_2.png` | neomonitor | ❌ Ambas son NeoCalcu (tabs "Fórmulas"/"Laboratorio") — NO son el simulador de monitor |

**Conclusión**: No es solo un intercambio simple entre proyectos. Actualmente:
- **herramientas** (tienda de herramientas) → 0 capturas reales propias.
- **egpediatria** → 0 capturas reales propias (las 3 que tiene son de NeoCalcu).
- **neomonitor** → sólo 1 imagen aprovechable (`herramientas_1.png`, pantalla de pago/suscripción con @neomonitor.pro), pero no muestra el simulador de monitor en sí.

### Pista encontrada en el historial de git (sin terminar de explorar)

`git log --oneline --name-status -- 'img/*'` muestra que en el commit `258488c` ("Replace all mockup wireframes with real website screenshots") se agregaron archivos con sufijo `_real_` (ej. `egpediatria_real_1.png`, `herramientas_real_1.png`, `neomonitor_real_1.jpg`, `flota_real_1.png`, `flota_real_3.png`, `constructora_real_mobile.png`) que en el commit siguiente `c9a9298` fueron renombrados o **borrados** (no todos los `_real_` sobrevivieron; algunos se perdieron en el rename y se reemplazaron por archivos nuevos con nombres genéricos `_1`/`_2`/`_3` que resultaron ser copias de NeoCalcu).

**Próximo paso que quedó a mitad de camino**: extraer con `git show 258488c:img/<archivo>` el contenido de cada `_real_*` que ya no existe en el working tree (`egpediatria_real_1.png`, `herramientas_real_1.png`, `neomonitor_real_1.jpg`, `flota_real_1.png`, `flota_real_3.png`, `constructora_real_mobile.png`) para ver si esas versiones SÍ correspondían correctamente a cada proyecto (antes de que se mezclaran en `c9a9298`). El usuario interrumpió la herramienta Bash que iba a hacer esto (probablemente por precaución con escribir archivos fuera del repo/scratchpad sin confirmar). Retomar extrayendo esos blobs (con `git show <commit>:<path> > archivo`, idealmente dentro del scratchpad de la sesión) y comparar visualmente con la Read tool antes de decidir qué restaurar.

### Plan sugerido al retomar
1. Extraer y revisar visualmente los blobs `_real_*` del commit `258488c` que ya no están en el working tree.
2. Si esos blobs SÍ corresponden a cada proyecto correctamente, restaurarlos con los nombres actuales (`egpediatria_1/2/3.png`, `herramientas_1/2.png`, `neomonitor_1/2.png`) en lugar de las copias erróneas de NeoCalcu.
3. Si no alcanzan o no corresponden, pedirle al usuario capturas reales nuevas para: tienda de herramientas (e-commerce), EGPediatria, y NeoMonitor (vista del simulador, no solo la pantalla de pago).
4. Actualizar `index.html` y `script.js` (rutas de imágenes en el objeto de datos del modal) si cambian nombres de archivo.
5. Verificar que no queden duplicados (`neocalcu_1.png` == `herramientas_2.png` actualmente, mismo bytes).
6. Una vez arreglado, borrar esta sección de CLAUDE.md.
