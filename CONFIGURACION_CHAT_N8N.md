# Configuración del Chat Widget con Agente IA (n8n)

## 🤖 Descripción del Chat

Chat widget integrado en la página web que permite a los clientes interactuar con un agente IA de Agencia Alpha. El agente está diseñado para:

- ✅ Resolver dudas sobre servicios
- ✅ Interactuar con clientes potenciales
- ✅ Persuadir y guiar hacia la adquisición de servicios
- ✅ Mantener conversaciones naturales tipo asistente web
- ✅ Chat integrado en la misma página (NO redirige)

## 📋 Pasos para configurar:

### 1. Icono SVG (✅ Ya está listo)

El archivo `icono-chat.svg` con la letra Alpha griega ya está en:

```
/Users/carloscesargilperalta/Desktop/agencia-alpha/public/icono-chat.svg
```

### 2. Crear archivo `.env.local`

Crea un archivo llamado `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_N8N_CHAT_WEBHOOK=https://tu-webhook-n8n-production.com/webhook/chat
```

### 3. Reemplaza la URL con tu webhook de producción

Cuando tengas tu webhook de n8n configurado, reemplaza la URL en `.env.local`.

### 4. Reinicia el servidor

Después de crear el archivo `.env.local`, reinicia el servidor de desarrollo:

```bash
# Detener el servidor actual (Ctrl+C)
# Luego ejecutar:
PORT=3005 npm run dev
```

## 💬 Funcionamiento del Chat Widget

### Cuando el cliente hace clic en el botón Alpha:

1. **Se abre el widget de chat** flotante en la misma página (400x600px)
2. **Mensaje de bienvenida automático**: "¡Hola! 👋 Soy tu asistente virtual de Agencia Alpha. ¿En qué puedo ayudarte hoy?"
3. **Cliente escribe mensaje** en el input
4. **Mensaje se envía a n8n** vía webhook
5. **Respuesta del agente IA** aparece en el chat
6. **Conversación continúa** en tiempo real

### Características del Widget:

- ✅ **Chat integrado**: NO redirige, se abre en la misma página
- ✅ **Diseño profesional**: Estilo moderno tipo asistente web
- ✅ **Icono personalizado**: Letra Alpha griega con fondo naranja
- ✅ **Indicador en línea**: Muestra que el agente está disponible
- ✅ **Animación de escritura**: Puntos animados mientras el bot responde
- ✅ **Historial**: Mantiene toda la conversación
- ✅ **Session ID**: Identifica cada sesión de usuario
- ✅ **Timestamps**: Muestra hora de cada mensaje
- ✅ **Responsive**: Funciona en desktop y mobile

## 🔧 Estructura del Webhook de n8n

### REQUEST (lo que envía el chat a n8n):

```json
{
  "message": "Hola, quiero información sobre sus servicios",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sessionId": "session_1234567890_abc123"
}
```

### RESPONSE (lo que debe responder n8n):

**Opción 1:**

```json
{
  "response": "¡Hola! Claro, con gusto te cuento sobre nuestros servicios..."
}
```

**Opción 2:**

```json
{
  "message": "¡Hola! Claro, con gusto te cuento sobre nuestros servicios..."
}
```

El chat acepta ambos formatos: `response` o `message`.

## 🎯 Ejemplo de flujo en n8n

```
1. [Webhook] Recibe mensaje del usuario
   ↓
2. [Set Node] Extrae mensaje y sessionId
   ↓
3. [AI Agent / OpenAI] Procesa con tu modelo de IA
   - Contexto: "Eres un agente de ventas de Agencia Alpha..."
   - Prompt: Mensaje del usuario
   ↓
4. [Respond to Webhook] Devuelve respuesta
   - Body: { "response": "{{$json.output}}" }
```

## 💡 Entrenamiento sugerido para el agente:

```
Eres un agente de ventas amigable y profesional de Agencia Alpha,
una agencia especializada en soluciones de Inteligencia Artificial
para negocios pequeños y medianos.

Tu objetivo es:
1. Saludar cordialmente
2. Identificar las necesidades del cliente
3. Explicar cómo nuestros servicios pueden ayudarles
4. Resolver dudas técnicas
5. Guiar hacia agendar una consultoría gratuita
6. Obtener información de contacto (nombre, email, teléfono)

Servicios principales:
- Automatización con IA
- Agentes virtuales 24/7
- Integración con WhatsApp
- Lead generation automatizado
- Análisis de datos con IA

Mantén un tono cercano, profesional y enfocado en los beneficios.
```

## 🎨 Personalización del Widget

Edita el archivo: `src/components/ui/ChatWidget.tsx`

**Puedes cambiar:**

- **Colores**: `bg-primary`, `text-white`, etc.
- **Tamaño**: `w-96 h-[600px]`
- **Posición**: `bottom-44 right-6`
- **Mensaje de bienvenida**: En el estado inicial de `messages`
- **Animaciones**: Clases de Tailwind

## 📱 Vista del Chat

**Botón cerrado:**

- Icono Alpha circular naranja
- Badge rojo parpadeante
- Arriba del botón de WhatsApp

**Chat abierto:**

- Header naranja con degradado
- Foto del agente Alpha
- Status "En línea" con punto verde
- Área de mensajes con scroll
- Input de texto con botón de envío
- Footer "Powered by Agencia Alpha IA"

## 🚀 Listo para usar

El chat widget ya está completamente funcional. Solo necesitas:

1. Configurar tu webhook de n8n
2. Agregar la URL en `.env.local`
3. Entrenar tu agente IA con el contexto de Agencia Alpha
4. ¡Probar y ajustar según necesites!
