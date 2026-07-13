# Portfolio — Iván Litt

Portfolio personal de **Full Stack Software Engineer**. Sitio de una sola página que presenta experiencia, proyectos, skills y educación, con soporte bilingüe (ES/EN) y tema claro/oscuro.

## Secciones

- **Inicio** — presentación, perfil técnico y descarga de CV (Google Docs según idioma)
- **Servicios** — cards con áreas de trabajo (diseño, frontend, UX/UI, deploy, DB, mantenimiento)
- **Experiencia** — roles y bullets alineados al CV (Boty Cloud, Ministerio de Educación, Terra Scan)
- **Proyectos** — listado filtrable (`web` / `ux/ui`) con imagen, descripción, fecha y enlace externo
- **Skills** — iconos de tecnologías
- **Educación** — estudios, cursos e idiomas
- **Contacto** — mailto y copia de email

## Stack

| Área | Tecnología |
|------|------------|
| Framework | Next.js 14 (App Router), React 18 |
| Estilos | Tailwind CSS |
| i18n | i18next / react-i18next / next-i18next |
| Tema | Context API (`ThemeContext`) |
| Animación | `@react-spring/web` |

Contenido textual y de proyectos: `public/locales/es/transEs.json` y `public/locales/en/transEn.json`.  
Imágenes: `public/images/`.

## Desarrollo

```bash
npm install
npm run dev
```

App en [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Estructura relevante

```
app/                 # layout y página principal
components/          # UI (Navbar, Project, Experience, Education, etc.)
context/             # ThemeProvider
public/locales/      # traducciones ES / EN
public/images/       # assets de proyectos
```
