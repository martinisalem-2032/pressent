# PRESSENT V2.0

Editor y presentador de diapositivas. Funciona directamente en el navegador: no hay que instalar nada, ni crear cuenta.

## 👉 Abrir PRESSENT

**https://martinisalem-2032.github.io/pressent-web/**

## Qué permite hacer

### Espacios de trabajo y diapositivas
- Crear espacios de trabajo y diapositivas, y reordenar las diapositivas arrastrando.
- Cada diapositiva nueva arranca con título, subtítulo y rótulo de ejemplo, con letras de colores.
- Navegar con los botones, el índice, el selector o las flechas ← → del teclado.

### Edición de texto
- **Título, Subtítulo y Texto:** se insertan con los botones de la barra superior.
- Todos los textos (incluidos los que vienen por defecto) se **mueven libremente** con el botón ✥ y se **eliminan** con el botón ×. También se eliminan con Supr o Retroceso si se selecciona todo el texto o si el bloque ya está vacío.
- **Paleta flotante:** aparece al seleccionar texto, con tipografía (14 opciones), tamaño del texto seleccionado (en la escala de diseño de 1090 px de ancho), color y los últimos 5 colores usados (círculos a la derecha del selector).
- El tamaño, la tipografía y el color mostrados se actualizan según el texto seleccionado.
- El formato (colores por letra, tamaños, tipografías) se conserva al cambiar de diapositiva y al presentar.

### Tablas
- Insertar tablas y agregar o quitar filas y columnas desde el panel flotante, que aparece a la izquierda de la tabla.
- Al seleccionar texto dentro de la tabla, el panel se oculta; vuelve a aparecer al hacer clic en la tabla.
- Mover la tabla con los cuadraditos de las esquinas, sin cambiar su tamaño ni su estilo.
- Cambiar el ancho de las columnas arrastrando los bordes.

### Imágenes y fondo
- **＋ Insertar imagen:** agrega una imagen que se puede mover y cambiar de tamaño.
- **Fondo:** cambiar el color o poner una imagen de fondo.

### Diseño
- Botón único **Bloquear diseño** (borde rojo) / **Editar** (borde verde): alterna entre editar y bloquear el diseño.
- Notas por diapositiva con el botón «Notas».
- Color de la interfaz con el botón «Color».

### Presentar
- Pantalla completa con la tecla **F5** (**Esc** para salir), con una ventana de notas aparte.
- En modo presentación no aparecen las herramientas de edición.
- La diapositiva se ve **idéntica en cualquier resolución**: textos, tablas, imágenes, márgenes y tamaños de letra escalan juntos, así que al presentar (o exportar) todo queda en la misma posición relativa que en el editor.

### Exportar (botón celeste)
- **Respaldo (JSON):** guarda todo el espacio de trabajo.
- **PDF (imprimir):** abre el diálogo de impresión, una diapositiva por página en 16:9 (elegir «Guardar como PDF» y activar «Gráficos de fondo»). El texto queda seleccionable.
- **Imágenes (PNG):** una imagen de 1920 px por diapositiva (ZIP si hay varias).
- **PDF (descarga directa):** descarga el PDF sin diálogo (cada página es una imagen). Incluye un respaldo escondido que permite volver a abrirlo y editarlo en PRESSENT.
- **PowerPoint (.pptx):** textos con color por letra, tablas, imagen y notas, editables en PowerPoint. Las tipografías se ven bien solo si están instaladas en esa computadora.

### Abrir (botón amarillo)
Cada archivo se abre como un **espacio de trabajo nuevo**, sin pisar los existentes.
- **Respaldo (JSON)** y **PDF exportado por PRESSENT:** recuperan todo, 100% editable.
- **PowerPoint (.pptx)**, **LibreOffice (.odp)** y **Google Slides** (descargado como .pptx o .odp): importan textos con color y tamaño, una tabla, una imagen y las notas. Los elementos se acomodan en el orden de siempre, no en su posición original.
- **Cualquier PDF:** cada página se convierte en una diapositiva (como imagen), con el texto de la página en las notas. Se abren hasta 40 páginas. Requiere abrir PRESSENT desde la web publicada, no desde el archivo en el disco.
- **Texto (.txt):** las diapositivas se separan con una línea `---` o con 2 líneas en blanco; la primera línea es el título, la segunda el subtítulo y el resto texto.
- **Markdown (.md):** cada título `#` o `##` empieza una diapositiva; soporta listas, tablas, negrita, cursiva y notas con `>`.

## Estructura del proyecto

- `index.html`: la aplicación.
- `web-shim.js` y `notes.html`: ventana de notas al presentar.
- `libs/`: librerías incluidas (PptxGenJS, html-to-image y PDF.js; licencias MIT y Apache 2.0). Se cargan solo al exportar o abrir archivos. **Hay que subir esta carpeta a GitHub junto con el resto.**

## Es un sitio diseñado para un proyecto final de testing

- Los datos se guardan **solo en tu navegador**. Cada navegador o equipo tiene sus propios espacios de trabajo, y borrar los datos del sitio o usar modo incógnito los elimina. Para llevarse el trabajo a otro lado, usar Exportar → Respaldo (JSON).
- El almacenamiento es de unos 5 MB. Con imágenes grandes (o PDFs largos abiertos como imágenes) puede aparecer el aviso de que no se pudieron guardar los cambios.
- Las tipografías de Google, y la exportación a PNG y PDF directo, necesitan conexión a internet.
- Si el navegador bloquea la ventana de notas al presentar, las notas se muestran dentro de la diapositiva. Permite las ventanas emergentes para este sitio si quieres verlas aparte.
- Navegadores recomendados: Chrome, Brave, Edge o Firefox en versiones recientes.

---

# PRESSENT V2.0

A slide editor and presenter. It runs directly in your browser: nothing to install and no account needed.

## 👉 Open PRESSENT

**https://martinisalem-2032.github.io/pressent-web/**

## What you can do

### Workspaces and slides
- Create workspaces and slides, and reorder slides by dragging.
- Every new slide starts with a sample title, subtitle and label, with colored letters.
- Navigate with the buttons, the index, the selector or the ← → arrow keys.

### Text editing
- **Title, Subtitle and Text:** inserted with the buttons in the top bar.
- All texts (including the default ones) can be **moved freely** with the ✥ button and **deleted** with the × button. They can also be deleted with Delete or Backspace when all the text is selected or the block is already empty.
- **Floating palette:** appears when text is selected, with font (14 options), the size of the selected text (on the 1090 px-wide design scale), color and the last 5 colors used (circles to the right of the color picker).
- The size, font and color shown update according to the selected text.
- Formatting (per-letter colors, sizes, fonts) is kept when changing slides and when presenting.

### Tables
- Insert tables and add or remove rows and columns from the floating panel, which appears to the left of the table.
- When text inside the table is selected, the panel hides; it comes back when you click the table.
- Move the table with the corner handles, without changing its size or style.
- Resize columns by dragging the borders.

### Images and background
- **＋ Insert image:** adds an image you can move and resize.
- **Background:** change the color or set a background image.

### Design
- Single **Lock design** (red border) / **Edit** (green border) button: switches between editing and locking the design.
- Notes for each slide with the "Notes" button.
- Change the interface color with the "Color" button.

### Present
- Full screen with the **F5** key (**Esc** to exit), with a separate notes window.
- Editing tools are not shown in presentation mode.
- The slide looks **identical at any resolution**: texts, tables, images, margins and font sizes scale together, so when presenting (or exporting) everything stays in the same relative position as in the editor.

### Export (blue button)
- **Backup (JSON):** saves the whole workspace.
- **PDF (print):** opens the print dialog, one slide per page in 16:9 (choose "Save as PDF" and enable "Background graphics"). Text stays selectable.
- **Images (PNG):** one 1920 px image per slide (ZIP if there are several).
- **PDF (direct download):** downloads the PDF without a dialog (each page is an image). It includes a hidden backup that lets you reopen and edit it in PRESSENT.
- **PowerPoint (.pptx):** per-letter colored text, tables, image and notes, editable in PowerPoint. Fonts only look right if they are installed on that computer.

### Open (yellow button)
Each file opens as a **new workspace**, without overwriting existing ones.
- **Backup (JSON)** and **PDF exported by PRESSENT:** restore everything, 100% editable.
- **PowerPoint (.pptx)**, **LibreOffice (.odp)** and **Google Slides** (downloaded as .pptx or .odp): import text with color and size, one table, one image and the notes. Elements are laid out in the usual order, not in their original position.
- **Any PDF:** each page becomes a slide (as an image), with the page text in the notes. Up to 40 pages are opened. Requires opening PRESSENT from the published website, not from a file on disk.
- **Text (.txt):** slides are separated by a `---` line or 2 blank lines; the first line is the title, the second the subtitle and the rest is text.
- **Markdown (.md):** each `#` or `##` heading starts a slide; supports lists, tables, bold, italic and notes with `>`.

## Project structure

- `index.html`: the application.
- `web-shim.js` and `notes.html`: notes window used when presenting.
- `libs/`: bundled libraries (PptxGenJS, html-to-image and PDF.js; MIT and Apache 2.0 licenses). They load only when exporting or opening files. **This folder must be uploaded to GitHub together with the rest.**

## This site was designed for a final testing project

- Data is saved only in your browser. Each browser or device has its own workspaces, and clearing site data or using incognito mode deletes them. To take your work elsewhere, use Export → Backup (JSON).
- Storage is about 5 MB. With large images (or long PDFs opened as images) a message saying the changes could not be saved may appear.
- Google fonts, and exporting to PNG and direct PDF, need an internet connection.
- If the browser blocks the notes window when presenting, the notes are shown inside the slide instead. Allow pop-ups for this site if you want to see them in a separate window.
- Recommended browsers: recent versions of Chrome, Brave, Edge or Firefox.

  > The app interface and the requirements document are in Spanish.
