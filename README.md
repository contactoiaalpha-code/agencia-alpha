# Agencia Alpha - Landing Page 🚀

**¡Bienvenido al proyecto de Agencia Alpha!** Esta es una landing page moderna y profesional diseñada para una agencia de inteligencia artificial ubicada en Villahermosa, Tabasco, México.

## 🌟 Características

- **Tecnología de vanguardia**: Construida con Next.js 14 y TypeScript
- **Diseño futurista**: Interface moderna con efectos visuales impactantes
- **Totalmente responsiva**: Optimizada para todos los dispositivos
- **SEO optimizado**: Meta etiquetas y estructura optimizada para buscadores
- **Formulario de contacto**: Integración con webhook para procesamiento de leads
- **Páginas legales**: Política de privacidad y términos incluidos
- **Botón flotante de WhatsApp**: Comunicación directa con clientes
- **Animaciones suaves**: Efectos de scroll y hover con Framer Motion

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Formularios**: React Hook Form + Zod
- **Carrusel**: Embla Carousel React

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm o yarn
- Git

## 🚀 Instalación y Configuración

### 1. Clonar o descargar el proyecto

```bash
# Si tienes el proyecto en un ZIP, descomprímelo
# O clónalo desde GitHub (si está disponible)
git clone [url-del-repositorio]
cd agencia-alpha
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# URL del webhook de n8n para procesar formularios
NEXT_PUBLIC_WEBHOOK_URL=https://tu-webhook-n8n.com/webhook/contact

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Otras variables según necesites
```

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio a Vercel**:

   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub/GitLab
   - Vercel detectará automáticamente que es un proyecto Next.js

2. **Configuración automática**:

   - Vercel configurará automáticamente las variables de entorno
   - El build y despliegue serán automáticos

3. **Variables de entorno en Vercel**:
   - Ve al panel de control de tu proyecto en Vercel
   - Agrega las variables de entorno en Settings > Environment Variables

### Opción 2: Despliegue Manual

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/       # API route para formularios
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── privacy/           # Página de política de privacidad
│   └── terms/             # Página de términos y condiciones
├── components/
│   ├── sections/          # Secciones principales de la página
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AgentsSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── AboutUsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── ui/                # Componentes reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── WhatsAppButton.tsx
│       ├── AnimateOnScroll.tsx
│       └── CookieBanner.tsx
├── data/
│   └── content.ts         # Todo el contenido de la página
└── lib/
    └── utils.ts           # Utilidades (si es necesario)
```

## 🎨 Personalización

### Colores y Branding

Los colores principales están definidos en `tailwind.config.js`:

- **Primario**: `#FFD700` (Dorado)
- **Secundario**: `#00D4FF` (Azul brillante)
- **Oscuro**: `#000000` (Negro)
- **Claro**: `#FFFFFF` (Blanco)

### Contenido

Todo el contenido (textos, servicios, información de contacto) está centralizado en `src/data/content.ts`. Puedes modificar fácilmente:

- Información de la empresa
- Servicios ofrecidos
- Casos de estudio
- Contenido de secciones
- Enlaces de navegación

### Webhook para Formularios

El formulario de contacto envía datos a través de una API route (`/api/contact`). Para procesar los leads:

1. Configura un webhook en n8n, Make (Integromat), o Zapier
2. Agrega la URL del webhook en las variables de entorno
3. El webhook recibirá los datos del formulario en formato JSON

## 🔧 Funcionalidades Implementadas

### ✅ Formulario de Contacto

- Validación con Zod
- Integración con webhook
- Estados de carga y éxito
- Manejo de errores

### ✅ Botón Flotante de WhatsApp

- Enlace directo con mensaje pre-poblado
- Información de contacto actualizada
- Diseño responsivo

### ✅ Páginas Legales

- Política de Privacidad completa
- Términos y Condiciones detallados
- Cumple con estándares legales

### ✅ SEO Optimizado

- Meta etiquetas Open Graph
- Twitter Cards
- Sitemap automático (si configuras)
- Robots.txt

### ✅ Cookies y Privacidad

- Banner de consentimiento de cookies
- Almacenamiento local de preferencias
- Cumple con GDPR

## 📞 Información de Contacto

**Agencia Alpha**

- **Teléfono**: +52 9932500548
- **Email**: contacto.ia.alpha@gmail.com
- **Ubicación**: Villahermosa, Tabasco, México
- **Sitio web**: www.alphamexico.com.mx

## 🆘 Soporte y Ayuda

Si necesitas ayuda con la configuración o personalización:

1. Revisa la documentación oficial de [Next.js](https://nextjs.org/docs)
2. Consulta la documentación de [Tailwind CSS](https://tailwindcss.com/docs)
3. Revisa los ejemplos en la carpeta de componentes

## 📄 Licencia

Este proyecto es propiedad de Agencia Alpha. Todos los derechos reservados.

---

**¡Gracias por usar Agencia Alpha!** 🚀

_Desarrollado con ❤️ en Villahermosa, Tabasco, México_
