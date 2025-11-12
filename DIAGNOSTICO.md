# 🔧 GUÍA DE VERIFICACIÓN DE CARGA DEL MODELO AR

## Pasos para diagnosticar el problema:

### 1️⃣ **Abre el archivo de diagnóstico**
- Abre `diagnostico.html` en tu navegador
- Este archivo verificará todos los componentes del sistema AR

### 2️⃣ **Abre la Consola de Desarrollador**
En tu navegador, presiona:
- **Windows/Linux**: `F12` o `Ctrl + Shift + I`
- **Mac**: `Cmd + Option + I`

### 3️⃣ **En la consola, busca estos mensajes clave:**

#### ✅ ÉXITO - Deberías ver:
```
✅ A-Frame Scene cargada
✅ MindAR LISTO - Sistema AR inicializado
🔍 Escanea una bandera para detectarla...
```

#### ❌ PROBLEMAS - Si ves:
```
❌ A-Frame scene NO encontrada
→ Las librerías de A-Frame no cargaron
→ Solución: Verifica conexión a internet

❌ MindAR no encontrado
→ La librería MindAR no cargó
→ Solución: Verifica conexión a internet

❌ Permiso de cámara denegado
→ El navegador necesita permiso de cámara
→ Solución: Recarga y permite el acceso a cámara

❌ Error accediendo archivo
→ El archivo targets.mind no está accesible
→ Solución: Verifica que el archivo esté en GitHub
```

### 4️⃣ **Verificar archivo .mind**

El archivo debe estar en:
```
https://juansdl10.github.io/mundial-2026-ar/targets.mind
```

Acciones:
- ✅ Verifica que el archivo exista en tu repositorio de GitHub
- ✅ Verifica que el archivo tenga contenido (no esté vacío)
- ✅ Verifica que sea un archivo binario válido (.mind)

### 5️⃣ **Si el .mind file no existe**

Necesitas generar el archivo con MindAR:

1. Descarga las herramientas desde: https://www.mindar.org/
2. O usa el editor web: https://hiukim.github.io/mind-ar-js-doc/

### 6️⃣ **Estructura esperada del archivo .mind**

El archivo debe contener múltiples targets (banderas):
- Target 0: Argentina
- Target 1: Brasil

Si solo tienes 1 target, deberás:
- Agregar más targets al archivo
- O modificar el HTML para usar solo 1 target

---

## 🎯 Flujo de escaneo esperado:

1. Página carga → MindAR inicializa
2. Solicita permiso de cámara
3. Cámara se abre y escanea
4. Cuando apuntas a una bandera → "✅ Bandera detectada"
5. Al alejar la cámara → "🔍 Enfoca la cámara a una bandera"

---

## 📋 Checklist de verificación:

- [ ] ¿La consola muestra "MindAR LISTO"?
- [ ] ¿Permitiste el acceso a la cámara?
- [ ] ¿El archivo targets.mind existe en GitHub?
- [ ] ¿Tienes banderas reales frente a la cámara?
- [ ] ¿El navegador es compatible (Chrome, Firefox)?
- [ ] ¿Estás usando HTTPS o localhost?

---

## 🚀 Cómo usar los archivos:

### index.html
- Interfaz principal del AR
- Abre con cámara lista
- Tiene debugging avanzado en consola

### diagnostico.html
- Herramienta de diagnóstico visual
- Verifica todos los componentes
- Ejecuta pruebas automatizadas

---

## 💡 Tips:

- Siempre abre **diagnostico.html** primero para verificar sistema
- Luego abre **index.html** para probar el escaneo
- Asegúrate de tener buena iluminación al escanear
- Las banderas deben estar claras y bien visibles

---

## 🔗 Enlaces útiles:

- MindAR Docs: https://www.mindar.org/
- A-Frame Docs: https://aframe.io/
- GitHub Pages: https://pages.github.com/

¡Usa estos archivos para debuggear! 🎯
