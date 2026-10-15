# SPEC-001 — Portfolio para prácticas

| Campo | Valor |
|---|---|
| Estado | Borrador |
| Versión | v0.1 |
| Fecha | 15/10/2026 |

## 1. Context

Arema Software colabora con el instituto en el programa de prácticas. Actualmente, el alumnado envía un currículum y un enlace a GitHub, pero esta información no permite valorar adecuadamente los proyectos: no queda claro qué hace cada proyecto, con qué tecnologías se ha desarrollado ni si ha sido utilizado.

Por ello, Arema Software solicita una página web tipo portfolio por alumno que presente su perfil, sus proyectos, las tecnologías utilizadas y sus vías de contacto. La web se revisará principalmente desde dispositivos móviles.

Durante el curso, todo el alumnado trabajará con el mismo perfil de ejemplo. Posteriormente, cada alumno sustituirá los datos por los suyos.

## 2. Goal

Crear una web de portfolio que presente de forma clara el perfil de ejemplo, sus proyectos, las tecnologías utilizadas y sus vías de contacto, priorizando la visualización desde el móvil.

La web utilizará los datos comunes disponibles en:

- `data/profile.json`: datos personales y de contacto.
- `data/projects.json`: proyectos del portfolio.
- `assets/`: imagen de perfil y cuatro capturas que muestran cómo quedan los proyectos.
- `design/`: fichero con el diseño de referencia.
- `spec/`: fichero con esta especificación.

## 3. Users

- **Usuario principal:** personal de Arema Software que revisa las candidaturas de prácticas.
- **Persona representada:** el perfil de ejemplo durante el curso; posteriormente, cada alumno.
- **Responsable de desarrollo:** alumnado que implementa y personaliza el portfolio.

## 4. Scope

### In scope

- Mostrar el perfil a partir de `data/profile.json`.
- Mostrar cómo contactar con la persona del perfil.
- Mostrar los proyectos incluidos en `data/projects.json`.
- Mostrar, para cada proyecto, su imagen, nombre, descripción, tecnologías utilizadas y enlace al repositorio.
- Utilizar la imagen de perfil y las cuatro capturas de proyecto disponibles en `assets/`.
- Adaptar la visualización a dispositivos móviles.
- Seguir el diseño definido en `design/`.
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

La web debe mostrar quién es la persona del perfil utilizando la información disponible en `data/profile.json`.

### R2 — Contacto

La web debe permitir localizar cómo contactar con la persona del perfil, utilizando las vías de contacto disponibles en `data/profile.json`.

### R3 — Proyectos

La web debe mostrar todos los proyectos incluidos en `data/projects.json`.

### R4 — Información de cada proyecto

Cada proyecto debe mostrar:

- Imagen.
- Nombre.
- Descripción.
- Tecnologías utilizadas.
- Enlace al repositorio.

### R5 — Recursos visuales

La web debe utilizar la imagen de perfil y las cuatro capturas de proyecto disponibles en `assets/`.

### R6 — Diseño

La web debe seguir el diseño definido en el fichero de `design/`.

### R7 — Adaptación móvil

La web debe adaptarse a dispositivos móviles, ya que constituyen el contexto prioritario de consulta.

## 6. Business Rules

- Durante el curso se utiliza el mismo perfil de ejemplo.
- Cada proyecto debe presentar el mismo conjunto de información obligatoria.
- La personalización con los datos de cada alumno se realizará después del curso.

## 7. User Flow

1. La persona evaluadora abre el portfolio desde el móvil.
2. Consulta quién es la persona presentada.
3. Revisa sus proyectos y las tecnologías utilizadas.
4. Abre el repositorio de un proyecto si necesita examinar el código.
5. Localiza una vía de contacto.

## 8. Acceptance Criteria

- [ ] La web muestra los datos de perfil disponibles en `data/profile.json`.
- [ ] La web muestra las vías de contacto disponibles en `data/profile.json`.
- [ ] La web muestra todos los proyectos de `data/projects.json`.
- [ ] Cada proyecto muestra imagen, nombre, descripción, tecnologías utilizadas y enlace al repositorio.
- [ ] La web utiliza la imagen de perfil y las cuatro capturas de proyecto de `assets/`.
- [ ] La web respeta el diseño definido en `design/`.
- [ ] A 360 px de ancho no aparece desplazamiento horizontal.
- [ ] A 360 px de ancho no hay textos, imágenes ni controles recortados o superpuestos.
- [ ] Los enlaces son utilizables en móvil sin depender de interacciones de escritorio, como el hover.

## 9. Edge Cases

- Definir qué se muestra si falta la imagen de perfil.
- Definir qué se muestra si falta la captura de un proyecto.
- Definir cómo se representa un proyecto sin repositorio, sin descripción o sin tecnologías.
- Definir cómo se muestran descripciones largas en pantallas pequeñas.
- Definir qué se muestra si `projects.json` está vacío o contiene un proyecto incompleto.

## 10. Open Questions

- ¿Qué se muestra si falta la foto de perfil: nombre, iniciales, imagen por defecto u otra solución?
- ¿Todos los enlaces deben abrirse en una nueva pestaña?
- ¿El diseño de `design/` es vinculante o solo una referencia visual?
- ¿Es necesario añadir información adicional sobre el uso real de los proyectos?
- ¿Dónde se publicará la web?
- ¿Se requiere compatibilidad con navegadores o versiones concretas?

## 11. Assumptions

- Los ficheros `data/profile.json` y `data/projects.json` contienen toda la información necesaria.
- Las cuatro imágenes de `assets/` corresponden a los cuatro proyectos de `data/projects.json`.
- La imagen de perfil está identificada de forma inequívoca en `assets/`.
- El diseño de `design/` representa el resultado visual esperado.
- La web se revisará principalmente desde dispositivos móviles.

## 12. Dependencies

- `data/profile.json`.
- `data/projects.json`.
- Imagen de perfil y cuatro capturas de proyecto en `assets/`.
- Fichero de diseño en `design/`.
