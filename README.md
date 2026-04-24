# Ana-Victoria-Garza-Sanchez-Weather-API-PRO
Ana Victoria Garza Sanchez Weather API PRO
# Weather App Pro - Dynamic Forecast System

## Descripcion del Proyecto
Esta aplicacion es una herramienta de consulta meteorologica diseñada con un enfoque en la resiliencia y la experiencia de usuario. El sistema opera mediante un flujo de datos dinamico que permite consultar cualquier ubicacion global integrando dos servicios de Open-Meteo de forma asincrona: la API de Geocodificacion para obtener coordenadas y la API de Pronostico para extraer metricas climaticas.

## Caracteristicas Principales
* Interaccion Hibrida: Soporte para busqueda mediante clic en boton o activacion por teclado con la tecla Enter.
* Flujo Asincrono: Consumo secuencial de APIs mediante promesas para asegurar la integridad de los datos.
* Interfaz Adaptativa: Diseño optimizado para dispositivos moviles con visualizacion de temperatura, velocidad del viento y condiciones atmosfericas.
* Gestion de Errores: Filtros activos para detectar ciudades inexistentes y prevenir el procesamiento de campos vacios.

## Estructura del Repositorio
```text
/
├── src/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── assets/
└── README.md
