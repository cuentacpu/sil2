# Guía de Despliegue en Producción (Gratis)

Tu aplicación web es "estática" (solo HTML, CSS y JS), lo que hace que desplegarla sea muy fácil y completamente gratuito en varias plataformas.

La mejor opción para empezar rápidamente es **Netlify**, tal como mencionaste.

## Opción 1: Netlify (Recomendada - Método "Arrastrar y Soltar")

Este es el método más rápido si no quieres usar comandos de Git.

1.  **Prepara tu carpeta:**
    Asegúrate de saber dónde está tu carpeta del proyecto.
    *   Ruta completa: `/home/datasource/Descargas/antigravity/sil2/sil2-tutorial`
    *   Esta carpeta debe contener el `index.html`.

2.  **Crea una cuenta:**
    Ve a [app.netlify.com](https://app.netlify.com/) y regístrate (puedes usar tu cuenta de GitHub, GitLab o correo).

3.  **Sube tu sitio:**
    *   Una vez dentro de tu panel de control, ve a la pestaña **"Sites"**.
    *   Busca la sección que dice **"Add new site"** y selecciona **"Deploy manually"**.
    *   Verás un área punteada que dice "Drop folder here".
    *   **Arrastra tu carpeta `sil2-tutorial` completa** desde tu explorador de archivos y suéltala ahí.

4.  **¡Listo!**
    Netlify subirá los archivos y en unos segundos te dará una URL (algo como `random-name-1234.netlify.app`). Ya puedes compartir ese enlace.

## Opción 2: Vercel (Alternativa Popular)
Funciona muy similar a Netlify y es excelente para aplicaciones web modernas.

1.  Instala la herramienta de línea de comandos (si tienes Node.js): `npm i -g vercel`
2.  Estando en la carpeta de tu proyecto, ejecuta: `vercel`
3.  Sigue las instrucciones en pantalla.

## Opción 3: GitHub Pages (Ideal si usas Git)
Si quieres tener tu código guardado y versionado:

1.  Crea un repositorio en GitHub.com llamado `sil2-tutorial` (o el nombre que quieras).
2.  Sube tus archivos a ese repositorio.
3.  Ve a "Settings" -> "Pages".
4.  En "Source", selecciona la rama `main` y guarda.
5.  Tu sitio estará en `https://tu-usuario.github.io/sil2-tutorial`.
