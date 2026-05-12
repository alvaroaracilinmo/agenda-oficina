# Agenda Empresarial

Aplicación web de agenda personal para gestionar tareas, reuniones, deadlines y eventos personales. Funciona directamente en el navegador, sin instalación ni servidor.

---

## Archivos

- `agenda.html` — estructura y lógica de la aplicación
- `agenda.css` — estilos visuales

Ambos archivos deben estar en la misma carpeta para que funcione correctamente.

---

## Cómo usar la aplicación

### Crear un evento
Pulsa el botón **+ Nuevo** en la esquina superior derecha. Rellena el formulario con:
- **Título** — nombre del evento o tarea
- **Fecha y hora** — cuándo ocurre
- **Tipo** — Reunión, Tarea, Deadline o Personal
- **Prioridad** — Alta, Media o Baja
- **Notas** — información adicional opcional

### Navegar por fechas
Usa el calendario del panel izquierdo para moverte entre días. Los días con eventos aparecen marcados con un punto verde.

### Filtrar por categoría
En el panel izquierdo puedes filtrar para ver solo reuniones, tareas, deadlines o eventos personales. Los contadores muestran cuántos hay de cada tipo.

### Buscar eventos
Usa la barra de búsqueda para filtrar por título o contenido de las notas en tiempo real.

### Completar una tarea
Haz clic en el círculo de la izquierda de cada evento para marcarlo como completado. El contador de la cabecera se actualiza automáticamente.

### Editar un evento
Haz clic en cualquier parte de la tarjeta del evento para abrirlo y modificarlo.

### Eliminar un evento
Pasa el ratón sobre una tarjeta y pulsa el icono de papelera que aparece a la derecha. También puedes eliminar desde el formulario de edición.

---

## Almacenamiento de datos

Los datos se guardan automáticamente en el navegador mediante **localStorage**. Esto significa que:

- Los eventos persisten aunque cierres la pestaña o el navegador.
- Cada persona tiene su propia agenda en su propio navegador.
- Si se borra la caché del navegador incluyendo "datos de sitios web", se borrarán también los eventos.

---

## Acceso desde GitHub Pages

Si la aplicación está publicada en GitHub Pages, accede a ella mediante la URL:

```
https://<tu-usuario>.github.io/<nombre-repositorio>/agenda.html
```

Comparte esa URL con el resto del equipo para que cada persona pueda usarla desde su navegador.
