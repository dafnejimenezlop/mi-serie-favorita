// src/data/recomendaciones.ts
// Fuente de datos para la sección "Recomendaciones" — series/pelis afines a
// DARK. Contenido migrado y reescrito desde la web anterior
// (SerieFavorita/recomendacion.html), con el mismo criterio editorial.

export type StreamingPlatform =
  | 'Netflix'
  | 'HBO Max'
  | 'Amazon Prime Video'
  | 'Movistar Plus+'
  | 'Físico / Import';

export type Recommendation = {
  id: string;
  title: string;
  years: string;
  /** Frase corta siempre visible en la tarjeta cerrada. */
  hook: string;
  /** Párrafos largos, revelados al expandir la tarjeta. */
  body: string[];
  /** 0-100 — "afinidad" editorial con DARK, mostrada como barra de match. */
  affinity: number;
  /** Si no hay póster local, la tarjeta cae a un fondo generado (ver Recomendaciones.astro). */
  cover?: string;
  platform: {
    name: StreamingPlatform;
    url: string;
  };
  tags: string[];
};

export const recommendations: Recommendation[] = [
  {
    id: 'perfume',
    title: 'El Perfume',
    years: '2018',
    hook: 'Otra miniserie alemana de Netflix con la misma flema oscura y una estructura de flashbacks que exige libreta y lápiz.',
    body: [
      'Inspirada en la novela y película homónimas de Patrick Süskind, "El Perfume" sigue el esquema de los nuevos thrillers criminales, con la aparición del cuerpo de una mujer brutalmente asesinada.',
      'La estructura y los flashbacks confusos recuerdan mucho a los de DARK — y, como con ella, conviene verla con atención total.',
    ],
    affinity: 88,
    cover: '/recomendacion/1.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/es/title/80200596' },
    tags: ['Misterio', 'Alemana', 'Thriller'],
  },
  {
    id: '12-monos',
    title: '12 Monos',
    years: '1995 / serie 2015-2018',
    hook: 'Una de las inspiraciones confesas de DARK en su realismo sucio, su drama nihilista y sus bucles temporales.',
    body: [
      'La adaptación en serie del canal Syfy delinea la forma en la que las tramas se entrelazan en la ficción alemana: romance prohibido a través del tiempo, narración en bucle y no lineal.',
      'Culmina en uno de los finales más satisfactorios de la ciencia ficción televisiva reciente.',
    ],
    affinity: 82,
    cover: '/recomendacion/2.jpg',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Viajes en el tiempo', 'Ciencia ficción'],
  },
  {
    id: 'continuum',
    title: 'Continuum',
    years: '2012-2015',
    hook: 'Ciencia ficción canadiense que, como DARK, se mueve en tonos de gris entre el bien y el mal.',
    body: [
      'Una agente de la ley de un futuro distópico corporativo viaja en el tiempo desde 2077 hasta 2012, y los problemas empiezan al intentar cambiar el futuro para volver a su época.',
      'A lo largo de cuatro temporadas explora cómo los cambios del pasado reescriben el futuro, con líneas temporales cruzadas y viajeros perdidos — el mismo ADN narrativo que Winden.',
    ],
    affinity: 79,
    cover: '/recomendacion/3.jpg',
    platform: { name: 'Movistar Plus+', url: 'https://ver.movistarplus.es' },
    tags: ['Viajes en el tiempo', 'Distopía'],
  },
  {
    id: 'twin-peaks',
    title: 'Twin Peaks',
    years: '1990-2017',
    hook: 'La obra magna de David Lynch. Sin ella, probablemente DARK no existiría tal y como la conocemos.',
    body: [
      'El hallazgo de un cuerpo en un pueblo pequeño cuyos habitantes ocultan secretos, mientras suceden eventos sobrenaturales — el molde original de todo el género.',
      'Pasión reconocida de Baran bo Odar y Jantje Friese, fue un fenómeno de los 90 con una tercera temporada reciente que volvió a redefinir la ficción televisiva.',
    ],
    affinity: 91,
    cover: '/recomendacion/4.jpg',
    platform: { name: 'Físico / Import', url: 'https://www.amazon.es' },
    tags: ['Misterio', 'Culto'],
  },
  {
    id: 'stranger-things',
    title: 'Stranger Things',
    years: '2016 - actualidad',
    hook: 'La "prima americana" de DARK: pueblo pequeño, niño desaparecido, escenario ochentero.',
    body: [
      'Cuando DARK se estrenó, se recibió como la respuesta alemana a Stranger Things — incluso siendo dos animales muy distintos en tono y estructura.',
      'Ambas comparten pueblos pequeños con sucesos sobrenaturales, ciencia ficción y terror. Si te gusta una, no deberías perderte la otra.',
    ],
    affinity: 75,
    cover: '/recomendacion/5.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/es/title/80057281' },
    tags: ['Misterio', 'Años 80'],
  },
  {
    id: 'glitch',
    title: 'Glitch',
    years: '2015-2019',
    hook: 'Serie australiana que invierte el punto de partida habitual: aquí, los muertos regresan.',
    body: [
      'En vez de desapariciones extrañas, siete personas fallecidas recientemente vuelven a la vida — sin ser zombies, gozando de perfecta salud.',
      'El misterio está en entender por qué, ya que las siete están conectadas de alguna manera. Mismo tono enigmático y oscuro que DARK.',
    ],
    affinity: 74,
    cover: '/recomendacion/6.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/es/title/80108495' },
    tags: ['Misterio', 'Ciencia ficción'],
  },
  {
    id: 'the-oa',
    title: 'The OA',
    years: '2016-2019',
    hook: 'Una joven desaparecida durante 7 años regresa y se niega a hablar de lo ocurrido.',
    body: [
      'Misterio de ciencia ficción adulto y pausado, que va estableciendo una situación extraña con giros que no se ven venir.',
      'La búsqueda de otras personas atrapadas en otra dimensión le da un toque DARK ineludible.',
    ],
    affinity: 83,
    cover: '/recomendacion/7.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/es/title/80044950' },
    tags: ['Ciencia ficción', 'Dimensiones'],
  },
  {
    id: 'chernobyl',
    title: 'Chernobyl',
    years: '2019',
    hook: 'La central nuclear de Winden tiene un pariente muy real: el desastre de Chernóbil.',
    body: [
      'Buena parte de las tramas de DARK en torno a la central nuclear —no solo el accidente, también sus oficinas e instalaciones— beben directamente de este desastre real.',
      'La miniserie de HBO tiene un planteamiento casi tan cercano a la ciencia ficción como la propia serie alemana.',
    ],
    affinity: 77,
    cover: '/recomendacion/8.jpg',
    platform: { name: 'HBO Max', url: 'https://www.hbomax.com/es' },
    tags: ['Drama histórico', 'Nuclear'],
  },
  {
    id: 'the-missing',
    title: 'The Missing',
    years: '2014-2016',
    hook: 'Una de las mejores series europeas de la década, con parte de culpa en el tono lóbrego de DARK.',
    body: [
      'Comparte el punto de partida: la desaparición de un niño mientras su familia viaja por el país, sin elementos fantásticos de por medio.',
      'Contada en dos líneas temporales, pasado y presente, ocho años después de los hechos. Su segunda temporada es aún mejor.',
    ],
    affinity: 80,
    cover: '/recomendacion/9.jpg',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Misterio', 'Drama'],
  },
  {
    id: '1899',
    title: '1899',
    years: '2022',
    hook: 'El siguiente proyecto de los creadores de DARK: un barco, un enigma y otro puzle temporal.',
    body: [
      'Unos misteriosos sucesos cambian el rumbo de un barco de inmigrantes rumbo a Nueva York en 1899, arrastrando a sus pasajeros a un enigma desconcertante.',
      'Mismo ADN narrativo que DARK —firmado por Baran bo Odar y Jantje Friese— con una estructura igual de laberíntica.',
    ],
    affinity: 97,
    cover: '/recomendacion/10.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/es/title/80214497' },
    tags: ['De los creadores de DARK', 'Misterio'],
  },
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    years: '2024',
    hook: 'Universos paralelos, decisiones no tomadas y un protagonista que se enfrenta a todas las versiones posibles de sí mismo.',
    body: [
      'Basada en la novela de Blake Crouch, sigue a un físico que es secuestrado y despierta en una realidad donde su vida tomó un rumbo completamente distinto.',
      'Como en el Mundo de Adam y el Mundo de Eva, cada elección abre una rama nueva — y el protagonista debe encontrar el camino de vuelta a "su" mundo entre miles de posibilidades.',
    ],
    affinity: 89,
    cover: '/recomendacion/dark-matter.png',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Universos paralelos', 'Ciencia ficción'],
  },
  {
    id: 'russian-doll',
    title: 'Russian Doll',
    years: '2019-2022',
    hook: 'Un bucle temporal, una fiesta de cumpleaños y una muerte que se repite una y otra vez.',
    body: [
      'Nadia revive la misma noche una y otra vez, muriendo de formas distintas cada vez, hasta entender qué está atada a repetir y por qué.',
      'Más ligera en tono que DARK, pero con la misma obsesión por la causalidad, el determinismo y lo que significa romper realmente un ciclo.',
    ],
    affinity: 78,
    cover: '/recomendacion/russian-doll.png',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/title/80211627' },
    tags: ['Bucle temporal', 'Tragicomedia'],
  },
  {
    id: 'undone',
    title: 'Undone',
    years: '2019-2022',
    hook: 'Animación rotoscopiada para contar un viaje no-lineal por el tiempo, la memoria y la salud mental.',
    body: [
      'Tras un accidente, Alma descubre que puede moverse a través del tiempo y usa esa habilidad para investigar la muerte de su padre.',
      'Comparte con DARK la estructura fragmentada y la duda constante sobre qué es literal y qué es percepción — hasta el final.',
    ],
    affinity: 81,
    cover: '/recomendacion/undone.jpg',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Tiempo no lineal', 'Drama'],
  },
  {
    id: 'counterpart',
    title: 'Counterpart',
    years: '2017-2019',
    hook: 'Una grieta en Berlín separó la realidad en dos mundos idénticos hace 30 años. Cada persona tiene un "otro yo" al otro lado.',
    body: [
      'Un burócrata anodino descubre que su contraparte del otro mundo es un espía frío y calculador — y que ambas versiones de sí mismo llevan décadas divergiendo.',
      'La misma pregunta que DARK plantea con Adam y Eva: ¿cuánto de lo que somos es destino y cuánto es la suma de decisiones distintas?',
    ],
    affinity: 85,
    cover: '/recomendacion/counterpart.jpg',
    platform: { name: 'HBO Max', url: 'https://www.hbomax.com/es' },
    tags: ['Universos paralelos', 'Espionaje'],
  },
  {
    id: 'travelers',
    title: 'Travelers',
    years: '2016-2018',
    hook: 'Viajeros del futuro toman el control de cuerpos del presente, justo antes de su muerte, para evitar el colapso de la civilización.',
    body: [
      'Una infravalorada de ciencia ficción canadiense: consciencias del futuro se transfieren al pasado para ejecutar una misión que, paso a paso, podría cambiar el destino de la humanidad.',
      'Comparte con DARK el peso de la causalidad: cada misión cumplida en el pasado tiene una consecuencia exacta, calculada, en el futuro.',
    ],
    affinity: 76,
    cover: '/recomendacion/travelers.jpg',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/title/80095436' },
    tags: ['Viajes en el tiempo', 'Misión'],
  },
  {
    id: 'devs',
    title: 'Devs',
    years: '2020',
    hook: 'Determinismo puro: una empresa tecnológica ha construido una máquina capaz de predecir el futuro con precisión absoluta.',
    body: [
      'De Alex Garland (Ex Machina). Una ingeniera investiga la división secreta de su empresa, que cree responsable de la desaparición de su pareja.',
      'Comparte con DARK la obsesión filosófica: si el futuro puede calcularse con exactitud, ¿queda algo de libre albedrío?',
    ],
    affinity: 84,
    cover: '/recomendacion/devs.png',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Determinismo', 'Ciencia ficción'],
  },
  {
    id: 'man-in-high-castle',
    title: 'The Man in the High Castle',
    years: '2015-2019',
    hook: 'Historia alternativa: el Eje ganó la Segunda Guerra Mundial. Y hay películas que muestran otros mundos posibles.',
    body: [
      'Basada en Philip K. Dick. En un Estados Unidos ocupado, unas misteriosas cintas de película muestran realidades alternativas — incluida la nuestra.',
      'El mismo vértigo que el Mundo de Adam y el Mundo de Eva: universos que podrían haber sido, chocando contra el que sí es.',
    ],
    affinity: 80,
    cover: '/recomendacion/high-castle.png',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Universos paralelos', 'Historia alternativa'],
  },
  {
    id: 'manifest',
    title: 'Manifest',
    years: '2018-2023',
    hook: 'Un vuelo desaparece en pleno aire. Aterriza cinco años después. Nadie a bordo ha envejecido un solo día.',
    body: [
      'Los pasajeros del vuelo 828 regresan para descubrir que el mundo siguió adelante sin ellos — y que el tiempo les ha dejado una deuda que pagar.',
      'Menos cerebral que DARK, pero con el mismo motor: el tiempo como fuerza que reclama lo que le corresponde.',
    ],
    affinity: 71,
    cover: '/recomendacion/manifest.png',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/title/80189221' },
    tags: ['Misterio', 'Tiempo perdido'],
  },
  {
    id: 'the-rain',
    title: 'The Rain',
    years: '2018-2020',
    hook: 'Un virus viaja en la lluvia. Dos hermanos salen de un búnker seis años después a una Escandinavia irreconocible.',
    body: [
      'Danesa, sombría y con el mismo pulso "pueblo pequeño / secreto que lo cambia todo" que DARK, aunque aquí el secreto es un apocalipsis ya consumado.',
      'Menos rompecabezas temporal, más superviviencia — pero la misma fotografía gris y la misma sensación de estar viendo algo que no debería haber pasado.',
    ],
    affinity: 70,
    cover: '/recomendacion/the-rain.png',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/title/80098136' },
    tags: ['Postapocalíptico', 'Escandinava'],
  },
  {
    id: 'black-mirror',
    title: 'Black Mirror',
    years: '2011 - actualidad',
    hook: 'Antología: cada episodio, un mundo distinto, la misma pregunta incómoda sobre lo que la tecnología nos está haciendo.',
    body: [
      'No hay continuidad entre episodios, pero sí un tono: distopías cotidianas, casi plausibles, contadas con la misma frialdad quirúrgica que DARK aplica al tiempo.',
      'Si lo tuyo es la sensación de inquietud más que el rompecabezas genealógico, empieza por "San Junipero" o "USS Callister".',
    ],
    affinity: 73,
    cover: '/recomendacion/black-mirror.png',
    platform: { name: 'Netflix', url: 'https://www.netflix.com/title/70264888' },
    tags: ['Antología', 'Distopía'],
  },
  {
    id: 'the-leftovers',
    title: 'The Leftovers',
    years: '2014-2017',
    hook: 'El 2% de la humanidad desaparece sin explicación. Los que quedan tienen que aprender a vivir con el vacío.',
    body: [
      'De Damon Lindelof (Lost). No es ciencia ficción sobre el misterio en sí, sino sobre el duelo, la fe y la obsesión por encontrarle sentido a lo inexplicable.',
      'Comparte con DARK esa misma sensación de pueblo pequeño resquebrajado por algo que nadie puede nombrar del todo — y una de las mejores temporadas finales de la televisión reciente.',
    ],
    affinity: 87,
    cover: '/recomendacion/the-leftovers.jpg',
    platform: { name: 'HBO Max', url: 'https://www.hbomax.com/es' },
    tags: ['Misterio', 'Drama existencial'],
  },
  {
    id: 'cronocrimenes',
    title: 'Los Cronocrímenes',
    years: '2007',
    hook: 'Bucle temporal español, low-fi y perturbador: cada vuelta atrás complica más lo que el protagonista intenta arreglar.',
    body: [
      'Héctor descubre una máquina del tiempo en el bosque de su casa y, al intentar corregir un error, se convierte en la causa de todo lo que temía.',
      'Con presupuesto mínimo y una lógica de causalidad cerrada y exacta, es de lo más cercano que existe al pulso de DARK en formato película.',
    ],
    affinity: 81,
    cover: '/recomendacion/cronocrimenes.jpg',
    platform: { name: 'Físico / Import', url: 'https://www.amazon.es' },
    tags: ['Viajes en el tiempo', 'Española'],
  },
  {
    id: 'dark-city',
    title: 'Dark City',
    years: '1998',
    hook: 'Una ciudad que se reconstruye cada medianoche mientras sus habitantes duermen, y un hombre que empieza a recordar demasiado.',
    body: [
      'Alex Proyas construye un noir de ciencia ficción sobre identidad, memoria manipulada y una verdad oculta bajo la superficie de lo cotidiano.',
      'Su estética de sombras y neón, y su obsesión por lo que de verdad nos hace quienes somos, resuenan directamente con el Mundo de Adam y Eva.',
    ],
    affinity: 76,
    cover: '/recomendacion/dark-city.jpg',
    platform: { name: 'Físico / Import', url: 'https://www.amazon.es' },
    tags: ['Noir', 'Identidad'],
  },
  {
    id: 'mr-robot',
    title: 'Mr. Robot',
    years: '2015-2019',
    hook: 'Nada es lo que parece, nadie es del todo quien dice ser — y la realidad se agrieta episodio a episodio.',
    body: [
      'Elliot, un ingeniero de seguridad con problemas de salud mental, se ve arrastrado a una conspiración que pone en duda su propia percepción de los hechos.',
      'Comparte con DARK el gusto por la narración poco fiable y los giros que obligan a reconstruir todo lo visto hasta entonces.',
    ],
    affinity: 78,
    cover: '/recomendacion/mr-robot.jpg',
    platform: { name: 'Amazon Prime Video', url: 'https://www.primevideo.com' },
    tags: ['Thriller psicológico', 'Identidad'],
  },
];

export const platformFilters: StreamingPlatform[] = [
  'Netflix',
  'HBO Max',
  'Amazon Prime Video',
  'Movistar Plus+',
  'Físico / Import',
];
