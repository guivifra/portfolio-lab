# SPEC-001 — Portfolio para prácticas

| Campo | Valor |
|---|---|
| Estado | Aprobada |
| Versión | v0.2 |
| Fecha | 16/10/2026 |

## 1. Context

Arema Software colabora con el instituto en el programa de prácticas. Actualmente, el alumnado envía un currículum y un enlace a GitHub, pero esta información no permite valorar adecuadamente los proyectos: no queda claro qué hace cada proyecto, con qué tecnologías se ha desarrollado ni si ha sido utilizado.

Por ello, Arema Software solicita una página web tipo portfolio por alumno que presente su perfil, sus proyectos, las tecnologías utilizadas y sus vías de contacto. La web se revisará principalmente desde dispositivos móviles, aunque debe funcionar en todo tipo de dispositivo.

Durante el curso, todo el alumnado trabajará con el mismo perfil de ejemplo. Posteriormente, cada alumno sustituirá los datos por los suyos.

## 2. Goal

Crear una web de portfolio que presente de forma clara el perfil de ejemplo, sus proyectos, las tecnologías utilizadas y sus vías de contacto, siguiendo un diseño vinculante y siendo responsive para todo dispositivo con prioridad móvil.

La web utilizará los datos comunes disponibles en:

- `data/profile.json`: datos personales y de contacto.
- `data/projects.json`: proyectos del portfolio.
- `assets/`: imagen de perfil y cuatro capturas que muestran cómo quedan los proyectos.
- `design/`: fichero con el diseño de referencia vinculante.
- `spec/`: fichero con esta especificación.

## 3. Users

- **Usuario principal:** personal de Arema Software que revisa las candidaturas de prácticas.
- **Persona representada:** el perfil de ejemplo durante el curso; posteriormente, cada alumno.
- **Responsable de desarrollo:** alumnado que implementa y personaliza el portfolio.

## 4. Scope

### In scope

- Mostrar el perfil a partir de `data/profile.json` (todos los campos presentes).
- Mostrar cómo contactar con la persona del perfil mediante enlaces funcionales.
- Mostrar los proyectos incluidos en `data/projects.json`, ordenados por fecha descendente.
- Mostrar, para cada proyecto, su imagen, nombre, descripción, tecnologías utilizadas y enlace al repositorio (nueva pestaña).
- Utilizar la imagen de perfil y las cuatro capturas de proyecto disponibles en `assets/`.
- Adaptar la visualización a todo dispositivo (responsive), con prioridad móvil.
- Seguir fielmente el diseño definido en `design/` (vinculante).
- Mantener esta especificación en `spec/`.

### Out of scope

- Crear páginas de detalle independientes para cada proyecto.
- Editar el contenido del portfolio desde la propia web.
- Implementar registro, inicio de sesión o panel de administración.
- Gestionar candidaturas o solicitudes de prácticas.
- Implementar un formulario de contacto con envío de mensajes.
- Sustituir los datos del perfil de ejemplo durante el curso.

## 5. Requirements

### R1 — Perfil

La web debe mostrar todos los campos presentes en `data/profile.json`: nombre, título, bio, ubicación y cualquier otro campo definido en el fichero.

### R2 — Contacto

La web debe mostrar las vías de contacto como enlaces funcionales:
- Email: `mailto:`
- Teléfono: `tel:`
- Perfiles externos (LinkedIn, GitHub, etc.): URL completa

### R3 — Proyectos

La web debe mostrar todos los proyectos incluidos en `data/projects.json`, ordenados por fecha descendente (más reciente primero).

### R4 — Información de cada proyecto

Cada proyecto debe mostrar:
- Imagen.
- Nombre.
- Descripción.
- Tecnologías utilizadas.
- Enlace al repositorio, que abre en nueva pestaña (`target="_blank"` con `rel="noopener noreferrer"`).

### R5 — Recursos visuales

La web debe utilizar la imagen de perfil y las cuatro capturas de proyecto disponibles en `assets/`.

### R6 — Diseño

La web debe reproducir fielmente el diseño definido en el fichero de `design/`. Este diseño es vinculante, no una referencia visual flexible.

### R7 — Adaptación responsive

La web debe ser responsive en todo rango de anchos (móvil, tablet, escritorio), con prioridad de optimización en móvil. No debe haber scroll horizontal ni elementos recortados o superpuestos en anchos desde 320 px hasta 1920 px.

## 6. Business Rules

- Durante el curso se utiliza el mismo perfil de ejemplo.
- Cada proyecto debe presentar el mismo conjunto de información obligatoria.
- Los proyectos se ordenan por fecha descendente (más reciente primero).
- La personalización con los datos de cada alumno se realizará después del curso.

## 7. User Flow

1. La persona evaluadora abre el portfolio desde cualquier dispositivo (prioritariamente móvil).
2. Consulta quién es la persona presentada.
3. Revisa sus proyectos y las tecnologías utilizadas.
4. Abre el repositorio de un proyecto en nueva pestaña si necesita examinar el código.
5. Localiza una vía de contacto y la utiliza directamente (llamada, email, perfil).

## 8. Acceptance Criteria

- [ ] La web muestra todos los campos de perfil presentes en `data/profile.json`.
- [ ] La web muestra las vías de contacto como enlaces funcionales (mailto:, tel:, URLs externas).
- [ ] La web muestra todos los proyectos de `data/projects.json` ordenados por fecha descendente.
- [ ] Cada proyecto muestra imagen, nombre, descripción, tecnologías utilizadas y enlace al repositorio.
- [ ] Los enlaces a repositorios abren en nueva pestaña.
- [ ] La web utiliza la imagen de perfil y las cuatro capturas de proyecto de `assets/`.
- [ ] La web reproduce fielmente el diseño definido en `design/`.
- [ ] No hay scroll horizontal en anchos desde 320 px hasta 1920 px.
- [ ] No hay textos, imágenes ni controles recortados o superpuestos en el rango de anchos especificado.
- [ ] Los enlaces son utilizables en móvil sin depender de interacciones de escritorio, como el hover.

## 9. Edge Cases

| Caso | Comportamiento |
|------|----------------|
| Falta imagen de perfil | Mostrar placeholder con iniciales del nombre |
| Falta captura de proyecto | Mostrar placeholder genérico de proyecto |
| Proyecto sin repositorio, sin descripción o sin tecnologías | No mostrar el proyecto en el listado |
| Descripciones largas | Texto truncado con indicador de "leer más" o altura máxima con scroll interno |
| `projects.json` vacío | Mostrar mensaje "No hay proyectos disponibles" |
| Proyecto incompleto en `projects.json` | No mostrar el proyecto |

## 10. Open Questions

*(Ninguna — todas resueltas en v0.2)*

## 11. Assumptions

- Los ficheros `data/profile.json` y `data/projects.json` contienen toda la información necesaria.
- La imagen de perfil está identificada de forma inequívoca en `assets/`.
- El diseño de `design/` representa el resultado visual esperado y es vinculante.
- La web se revisará principalmente desde dispositivos móviles, aunque debe funcionar en todo dispositivo.

## 12. Dependencies

- `data/profile.json`.
- `data/projects.json`.
- Imagen de perfil y cuatro capturas de proyecto en `assets/`.
- Fichero de diseño en `design/`.
