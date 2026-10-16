# Análisis de Diseño y Assets — SPEC-001 v0.2

| Campo | Valor |
|---|---|
| Fecha de análisis | 2026-10-16 |
| Fuentes | `design/DESIGN-001.md` v1, `data/profile.json`, `data/projects.json`, `assets/` |
| Estado | Completado |

---

## 1. Especificaciones de Diseño Extraídas (DESIGN-001 v1)

> Diseño **vinculante** (pixel-perfect), cerrado — no se modifica durante el curso.

### 1.1 Paleta de Colores

#### Neutros
| Token | Valor | Uso |
|---|---|---|
| `bg` | `#FFFFFF` | Fondo de página |
| `ink` | `#0A0A0A` | Texto principal, titulares |
| `ink-2` | `#404040` | Texto de párrafo largo |
| `muted` | `#595959` | Metadatos, etiquetas, texto secundario |
| `surface` | `#F5F5F5` | Chips, píldoras, botones secundarios |
| `surface-2` | `#EDEDED` | Hover de lo anterior |
| `border` | `#E5E5E5` | Separadores y bordes |
| `border-strong` | `#D4D4D4` | Borde en hover, subrayados discretos |
| `btn` / `btn-ink` | `#171717` / `#FAFAFA` | Botón primario y su texto |

#### Acento (configurable — por defecto: Violeta)
| Nombre | Acento | Suave |
|---|---|---|
| Violeta *(por defecto)* | `#6D28D9` | `#EDE9FE` |
| Azul | `#1D4ED8` | `#DBEAFE` |
| Verde | `#047857` | `#D1FAE5` |
| Naranja | `#C2410C` | `#FFEDD5` |
| Rosa | `#BE185D` | `#FCE7F3` |
| Amarillo | `#A16207` | `#FEF3C7` |

**Uso del acento (exclusivo):** foco de teclado, subrayado de enlaces en hover, punto del indicador de disponibilidad, fondo del marco de imágenes de proyecto. **Nunca** en texto corrido ni en botones primarios.

#### Semánticos (independientes del acento)
| Token | Valor | Significado |
|---|---|---|
| `ok` | `#047857` | Vigente |
| `warn` | `#A16207` | Caduca pronto |
| `bad` | `#B91C1C` | Caducada |

### 1.2 Tipografía

| Rol | Familia | Fallback |
|---|---|---|
| Texto | Geist | `-apple-system`, Segoe UI, Helvetica, Arial, sans-serif |
| Datos y etiquetas | Geist Mono | `ui-monospace`, SF Mono, Menlo, Consolas, monospace |

**Pesos:** 400, 500, 600 (no se usa 700).

| Elemento | Tamaño | Interlineado |
|---|---|---|
| Titular de portada | `clamp(40px, 6vw, 64px)` | 1.05 |
| Entradilla de portada | 20px | 30px |
| Texto corrido | 17px | 28px |
| Título de sección (h2) | 28px | 1.2 |
| Nombre de proyecto destacado | 24px | 1.2 |
| Nombre de proyecto en rejilla | 18px | 1.3 |
| Resumen en rejilla | 15px | 24px |
| Metadatos | 13px monoespaciada | 20px |
| Antetítulo de sección | 12px monoespaciada, mayúsculas, `+0.12em` | — |

**Regla:** la monoespaciada se reserva para datos (fechas, tecnologías, contadores, etiquetas de estado, correo). Nunca para texto corrido.

### 1.3 Espaciados y Layout

| Token | Móvil | ≥900px |
|---|---|---|
| Ancho máximo de contenido | 1120px | 1120px |
| Ancho máximo de lectura | 720px | 720px |
| Margen lateral | 24px | 48px |
| Separación entre secciones | 64px | 96px |
| Alto de barra superior | 56px | 56px |

**Radios:** 8px (botones, chips), 12px (bloques), 16px (marcos de imagen), completo (píldoras).

### 1.4 Componentes Definidos

| Componente | Especificación |
|---|---|
| **Botón** | Alto 44px (36px variante pequeña). Primario sobre `btn`; secundario sobre `surface`. |
| **Chip** | Monoespaciada 13px sobre `surface`, radio 8px. Solo para tecnologías. |
| **Píldora** | Radio completo, punto de color de acento a la izquierda. Solo para indicador de disponibilidad. |
| **Marco de proyecto** | Relleno 12px en `accent-soft`, imagen interior 16:10 con radio 8px. Hover: imagen escala 2%, borde se oscurece. |
| **Etiqueta de estado** | Píldora 28px con icono y texto, en color semántico. Icono y texto obligatorios (el color nunca va solo). |

### 1.5 Movimiento

1. Cambios de color en interactivos — 150ms
2. Aparición/desaparición de identidad en barra superior — 200ms
3. Entrada escalonada de elementos de portada — 400ms, 60ms entre elementos

**Curva única:** `cubic-bezier(.2, .8, .2, 1)`
**Accesibilidad:** con `prefers-reduced-motion`, ninguna animación se ejecuta.

### 1.6 Accesibilidad

- Contraste mínimo AA (4.5:1) en todo el texto
- Foco de teclado visible: contorno 2px en color de acento, separado 3px
- Ningún estado se comunica solo con color
- Imágenes decorativas ocultas a lectores de pantalla; informativas con descripción
- Enlace de salto al contenido como primer elemento enfocable

---

## 2. Assets Verificados y Mapeados

### 2.1 Imagen de Perfil
| Fichero | Tamaño | Formato | Referencia en datos | Estado |
|---|---|---|---|---|
| `assets/profile.jpg` | 9.0 KB | JPEG | `profile.json` → `perfil.foto` = `assets/profile.jpg` | ✅ Confirmado |

### 2.2 Capturas de Proyecto
| Fichero | Tamaño | Proyecto (id en JSON) | Referencia en JSON | Estado |
|---|---|---|---|---|
| `assets/project-01.jpg` | 50.1 KB | Gestor de tareas Android (`gestor-tareas`) | `imagen: assets/project-01.jpg` | ✅ Confirmado |
| `assets/project-02.jpg` | 52.0 KB | Tienda de discos (`tienda-discos`) | `imagen: assets/project-02.jpg` | ✅ Confirmado |
| `assets/project-03.jpg` | 51.4 KB | API de reservas (`api-reservas`) | `imagen: assets/project-03.jpg` | ✅ Confirmado |
| `assets/project-04.jpg` | 48.0 KB | App de recetas (`recetas`) | `imagen: assets/project-04.jpg` | ✅ Confirmado |

**Total:** 5 imágenes (1 perfil + 4 proyectos). Todas las referencias de los JSON tienen fichero existente; no hay assets huérfanos ni referencias rotas.

---

## 3. Análisis de Datos

### 3.1 Campos de `profile.json` (raíz: `perfil`)

| Campo | Tipo | Presente | Contenido |
|---|---|---|---|
| `nombre` | string | ✅ | "Alex" |
| `titular` | string | ✅ | "Desarrollador multiplataforma en formación · 2.º de DAM" |
| `claim` | string | ✅ | Frase de impacto |
| `presentacion` | string | ✅ | Párrafo introductorio |
| `sobreMi` | string[] | ✅ | 2 párrafos |
| `disponibilidad` | string | ✅ | "Disponible para prácticas · marzo 2027" |
| `ubicacion` | string | ✅ | "Valencia" |
| `foto` | string | ✅ | `assets/profile.jpg` |
| `ahora` | string[] | ✅ | 3 items de estado actual |
| `stack` | object | ✅ | 3 categorías: Lenguajes (5), Frameworks (3), Herramientas (5) |
| `correo` | string | ✅ | `alex@ejemplo.dev` |
| `github` | string | ✅ | `https://github.com/alex-ejemplo` |
| `linkedin` | string | ✅ | `https://www.linkedin.com/in/alex-ejemplo` |
| `telefono` | — | ❌ **Ausente** | Ver discrepancia D1 |

### 3.2 Proyectos — Validación de Completitud (regla SPEC §9: sin repo, descripción o tecnologías → no mostrar)

| Proyecto | Fecha | Repo (`enlace`) | Descripción | Tecnología | Imagen | Estado |
|---|---|---|---|---|---|---|
| Gestor de tareas Android | 2026-05 | ✅ | ✅ | ✅ Kotlin | ✅ | **Válido** |
| API de reservas | 2026-03 | ✅ | ✅ | ✅ Java | ✅ | **Válido** |
| Tienda de discos | 2026-01 | ✅ | ✅ | ✅ JavaScript | ✅ | **Válido** |
| App de recetas | 2025-06 | ✅ | ✅ | ✅ Flutter | ✅ | **Válido** |

**Proyectos válidos (completos):** 4 de 4
**Proyectos inválidos (incompletos):** ninguno

**Ordenación por fecha descendente (R3):**
1. `gestor-tareas` — 2026-05
2. `api-reservas` — 2026-03
3. `tienda-discos` — 2026-01
4. `recetas` — 2025-06

⚠️ Nota: en el fichero JSON el orden actual es `gestor-tareas`, `tienda-discos`, `api-reservas`, `recetas` — **no coincide con el orden por fecha descendente** (tienda-discos y api-reservas están intercambiados). La implementación debe ordenar por `fecha`, no confiar en el orden del array.

---

## 4. Discrepancias y Observaciones

| ID | Aspecto | Severidad | Detalle |
|---|---|---|---|
| D1 | **SPEC R2 vs. `profile.json`** | ⚠️ Media | R2 exige mostrar teléfono como enlace `tel:`, pero `profile.json` **no incluye campo teléfono**. La regla R1 ("mostrar todos los campos presentes") prevalece: no se puede mostrar un dato inexistente. Se recomienda confirmar con PM si el perfil de ejemplo debe incluir teléfono o si R2 aplica solo a campos presentes. |
| D2 | **Orden de proyectos en JSON** | ℹ️ Baja | El array de `projects.json` no está ordenado por fecha descendente; la implementación debe ordenar explícitamente (R3). |
| D3 | **"Proyecto destacado" en diseño** | ℹ️ Baja | DESIGN-001 define tamaño para "proyecto destacado" (24px) y "proyecto en rejilla" (18px), pero SPEC-001 no menciona destacar ningún proyecto. Pendiente de decisión en la tarea de implementación de la sección de proyectos (por defecto: todos en rejilla, sin destacado). |
| D4 | Assets vs. JSON | ✅ OK | Todas las imágenes referenciadas existen; correspondencia 1:1 verificada. |
| D5 | Campos de perfil | ✅ OK | Todos los campos presentes tienen datos no vacíos. |

---

## 5. Recomendaciones para Implementación

1. **Tokens CSS:** definir custom properties para todos los colores, espaciados y radios (`--bg`, `--ink`, `--accent`, `--accent-soft`, etc.).
2. **Tipografía:** cargar Geist y Geist Mono con fallbacks del sistema.
3. **Acento configurable:** implementar `--accent` y `--accent-soft` como variables con el valor violeta por defecto.
4. **Componentes reutilizables:** clases para Chip, Píldora, Marco de proyecto, Etiqueta de estado, Botón.
5. **Responsive:** breakpoint principal en 900px (móvil 24px margen / desktop 48px); rango obligatorio 320px–1920px sin scroll horizontal (R7).
6. **Ordenación:** ordenar proyectos por `fecha` descendente en la lógica de renderizado, no confiar en el orden del JSON (ver D2).
7. **Filtrado:** aplicar la regla de completitud (SPEC §9): descartar proyectos sin repo, descripción o tecnologías antes de renderizar.
8. **Enlaces de repo:** `target="_blank"` con `rel="noopener noreferrer"` (R4).
9. **Accesibilidad:** skip-link como primer elemento enfocable, foco visible 2px/3px, `prefers-reduced-motion`, estados nunca solo por color.
10. **Pendiente:** resolver D1 (teléfono) con PM antes de implementar la sección de contacto.

---

*Análisis realizado por Vita Oakridge (DEV) — Tarea: Análisis de diseño y assets (spec-001)*
