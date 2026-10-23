# CAA English B1

Sitio web de práctica autónoma de inglés, nivel B1, del CAA Virtual (BUAP).
50 unidades organizadas en 10 módulos según los descriptores B1 del Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR): el **usuario independiente**.
Todo el contenido para alumnos está en inglés. Usa el mismo motor que *CAA English A1* y *CAA English A2*.

## Temario

| Módulo | Descriptor MCER B1 | Unidades |
| --- | --- | --- |
| 1 · People and Relationships | Describir personas, sentimientos y relaciones; mantener una conversación | 1 First Impressions · 2 Small Talk · 3 How Do You Feel? · 4 Getting Along · 5 Then and Now |
| 2 · Stories and Experiences | Narrar historias, contar el argumento de un libro o película | 6 It Had Already Started · 7 A Night to Remember · 8 I've Been Waiting for Ages! · 9 Urban Legends · 10 Book Club |
| 3 · Work and Study | Trabajo, estudios, correo formal y entrevista de trabajo | 11 Dream Jobs · 12 The Cover Letter · 13 Tell Me About Yourself · 14 Working From Home · 15 Study Smarter |
| 4 · Travel and Culture | Viajes, costumbres y tradiciones; describir lugares | 16 Travel Nightmares · 17 Culture Shock · 18 Where to Stay · 19 Festivals Around the World · 20 A Place I Love |
| 5 · Health and Well-being | Salud, estrés, consejos; causas y consecuencias | 21 Healthy Habits · 22 If I Were You · 23 It Must Be Stress · 24 A Good Night's Sleep · 25 Mind Over Matter |
| 6 · Hopes, Dreams and Regrets | Sueños, deseos, situaciones imaginarias y arrepentimientos | 26 If I Won the Lottery · 27 I Wish… · 28 Second Chances · 29 I Should Have Known · 30 This Time Next Year |
| 7 · Media and Communication | Noticias, estilo indirecto, voz pasiva, redes sociales | 31 She Said That… · 32 He Asked Me… · 33 Fake News · 34 Breaking News · 35 Online Life |
| 8 · Society and the World | Temas sociales y ambientales; opinar y debatir | 36 A Greener City · 37 Agree or Disagree? · 38 Making a Difference · 39 Would You Rather…? · 40 Crime Doesn't Pay |
| 9 · Science and Technology | Tecnología, servicios, quejas y predicciones | 41 Tech Help · 42 Getting Things Done · 43 Smart Homes · 44 Complaints Department · 45 Artificial Intelligence |
| 10 · Looking Ahead | Decisiones, presentaciones, persuasión y proyecto final | 46 Big Decisions · 47 Giving a Presentation · 48 Persuade Me! · 49 Global Citizens · 50 My B1 Journey |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal: 10 módulos, buscador, filtro por módulo y barra de progreso. |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Ajustes del sitio: dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad (50) | Cada unidad completa: `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## 1. Publicar en GitHub Pages (en dos partes)

GitHub solo deja subir 100 archivos a la vez desde el navegador, por eso el sitio viene en dos partes.

1. Crea un repositorio público en github.com, por ejemplo `caa-english-b1`.
2. Descomprime **parte 1** y sube todo su contenido (no la carpeta en sí): **Add file → Upload files → Commit changes**.
3. Descomprime **parte 2** y sube su contenido al mismo repositorio, de la misma forma.
4. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
5. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/caa-english-b1/`.
6. En Google Sites: **Insertar → Insertar → Por URL**, y pega esa dirección.

## 2. Recibir los textos de writing

Sin configurar nada, el alumno descarga su texto y lo entrega al asesor.
Para recibirlos automáticamente en una hoja de Google, sigue los pasos al inicio de `tools/writing-collector.gs` y pega la URL en `assets/config.js`.

## 3. Speaking

Cada unidad tiene dos actividades de speaking:

1. **Listen and repeat (pronunciación):** 6 frases de la unidad. El alumno escucha la frase (normal o lenta), la dice y la página le da un porcentaje. Necesita 70 % para aprobar cada frase. Funciona en **Chrome, Edge y Safari** (también en celular); en Firefox el alumno escucha, repite y se graba.
2. **Grabación individual (evidencia):** el alumno graba en la página (1–3 minutos en B1) y descarga su audio para subirlo a la plataforma del curso.

En `assets/config.js` escribe el nombre y el enlace de la plataforma (`speakingPlatformName`, `speakingPlatformUrl`).

## 4. Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon su `number`, `level: "B1"` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` con su módulo (`mod`).

## Notas

- El progreso se guarda en el navegador con la clave `b1:` (distinta de `a1:` y `a2:`), así que no se mezcla aunque los sitios estén en la misma cuenta de GitHub.
- En los ejercicios de artículos (unidad 38), el alumno escribe **x** cuando no va artículo.
- Los audios usan las voces del navegador. Cada personaje tiene voz de mujer u hombre en `speakers` dentro de su `data.js`.
- La grabación de voz necesita `https://` (GitHub Pages lo tiene) y que el alumno permita el micrófono.
