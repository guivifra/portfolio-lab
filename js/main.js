/**
 * Portfolio — SPEC-001 v0.2
 * Punto de entrada principal
 * 
 * Estructura preparada para:
 * - Tarea 3: Carga de datos desde JSON
 * - Tarea 4: Renderizado de sección Perfil
 * - Tarea 5: Renderizado de sección Proyectos
 * - Tarea 6: Renderizado de sección Contacto
 */

// Estado global de la aplicación
const AppState = {
  profile: null,
  projects: [],
  isLoading: true,
  error: null
};

// Elementos del DOM
const DOM = {
  topbarIdentity: document.getElementById('topbar-identity'),
  perfilContent: document.getElementById('perfil-content'),
  proyectosContent: document.getElementById('proyectos-content'),
  contactoContent: document.getElementById('contacto-content')
};

/**
 * Inicialización de la aplicación
 */
async function init() {
  console.log('[Portfolio] Iniciando aplicación…');
  
  // TODO: Tarea 3 — Implementar carga de datos
  // await loadProfile();
  // await loadProjects();
  
  // TODO: Tarea 4 — Renderizar perfil
  // renderProfile();
  
  // TODO: Tarea 5 — Renderizar proyectos
  // renderProjects();
  
  // TODO: Tarea 6 — Renderizar contacto
  // renderContact();
  
  console.log('[Portfolio] Estructura base lista. Pendiente carga de datos.');
}

/**
 * Manejo de errores global
 */
function handleError(error, context) {
  console.error(`[Portfolio] Error en ${context}:`, error);
  AppState.error = error.message;
  AppState.isLoading = false;
  
  // Mostrar mensaje de error al usuario
  const container = DOM[`${context}Content`];
  if (container) {
    container.innerHTML = `
      <p class="error" role="alert">
        No se pudo cargar el contenido. Por favor, recarga la página.
      </p>
    `;
  }
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Exportar para testing (si se necesita)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppState, DOM, init, handleError };
}
