export type RelationshipType = 'couple' | 'parentChild';

export type FamilyRelationship = {
  id: string;
  type: RelationshipType;
  from: string;
  to: string;
  familyId?: string;
};

export type CharacterGalleryImage = {
  src: string;
  alt: string;
  stageTitle?: string;
  effect?: 'temporal';
};

export type CharacterStage = {
  title: string;
  timeline: string;
  text: string;
  img: string;
  gallery?: CharacterGalleryImage[];
};

export type FamilyCharacter = {
  id: string;
  name: string;
  avatar: string;
  stages: CharacterStage[];
  gallery?: CharacterGalleryImage[];
};

export type Family = {
  id: string;
  name: string;
  subtitle: string;
  accent: string;
  cover: string;
  generations: FamilyCharacter[][];
};

export const familiasData: Family[] = [
  // ================= KAHNWALD =================
  {
    id: 'kahnwald',
    name: 'Kahnwald',
    subtitle: 'El tiempo como condena',
    accent: '#c8a96e',
    cover: '/Familias/Familia1/principal.jpg',
    generations: [
      [
        {
          id: 'ines',
          name: 'Ines Kahnwald',
          avatar: '/Familias/Familia1/ines.jpg',
          stages: [
            {
              title: 'Ines Kahnwald',
              timeline: '1953',
              text: 'Interpretada por Lena Urzendowsky. En su juventud, Ines es una chica amable e ingenua que comienza a interesarse por la enfermería, soñando con <span class="magic-highlight">un futuro tranquilo</span> en el pueblo de Winden.',
              img: '/Familias/Familia1/ines_1953.jpg',
            },
            {
              title: 'La Enfermera',
              timeline: '1986',
              text: 'Trabaja en el hospital de Winden. Conoce a un desorientado niño que dice venir del futuro y llamarse <span class="magic-highlight">Mikkel Nielsen</span>. Tras encariñarse profundamente con él, decide adoptarlo para evitar que lo envíen a un orfanato.',
              img: '/Familias/Familia1/ines_meetsmikkel.jpg',
            },
            {
              title: 'El Engaño',
              timeline: '2019',
              text: 'Se revela que Ines drogaba a <span class="magic-highlight">Michael</span> con pastillas para dormir para mantenerlo sumiso y evitar que intentara huir de vuelta a las cuevas. Tras el trágico suicidio de su hijo adoptivo, es ella quien <span class="magic-highlight">esconde la carta de despedida</span>.',
              img: '/Familias/Familia1/ines.jpg',
            },
            {
              title: 'La Carta Guardada',
              timeline: '2019',
              text: 'Guarda durante años, sin abrirla, la carta con la advertencia "No abrir antes del 4 de Noviembre" — un último acto de obediencia hacia el hijo que <span class="magic-highlight">nunca entendió del todo</span>.',
              img: '/Familias/Familia1/ines_letter.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'mikkel',
          name: 'Michael / Mikkel',
          avatar: '/Familias/Familia1/mikkel.jpg',
          stages: [
            {
              title: 'Mikkel Nielsen',
              timeline: '2019',
              text: 'Hijo menor de Ulrich y Katharina. Un niño fascinado por la magia y por su ídolo <span class="magic-highlight">Harry Houdini</span>. Una noche, explorando las cuevas de Winden con sus hermanos y Jonas, <span class="magic-highlight">desaparece misteriosamente sin dejar rastro</span>.',
              img: '/Familias/Familia1/mikkel.jpg',
            },
            {
              title: 'El Pequeño Ilusionista',
              timeline: '2019',
              text: 'Practica trucos de escapismo copiados de sus vídeos de Houdini, convencido de que algún día será capaz de <span class="magic-highlight">escapar de cualquier cosa</span> — una obsesión infantil que resulta trágicamente profética.',
              img: '/Familias/Familia1/mikkel_ilusionista.jpg',
            },
            {
              title: 'Perdido en el tiempo',
              timeline: '1986',
              text: 'Aparece aterrorizado 33 años en el pasado. Tras no encontrar a su familia y sufrir un accidente, es ingresado en el hospital. La enfermera <span class="magic-highlight">Ines Kahnwald</span> se hace cargo de él, creciendo bajo su nueva identidad.',
              img: '/Familias/Familia1/mikkel_perdido.jpg',
            },
            {
              title: 'La Adaptación',
              timeline: '1986 - 1990s',
              text: 'Crece atrapado tres décadas antes de su tiempo, obligado a esconder que sabe cosas que "todavía no han pasado". El trauma de la desaparición y el <span class="magic-highlight">secreto de su origen</span> lo convierten en un niño introvertido y observador.',
              img: '/Familias/Familia1/4.jpg',
            },
            {
              title: 'El Reencuentro Imposible',
              timeline: '1990s',
              text: 'Cruza más de una vez con su propia madre biológica, <span class="magic-highlight">Katharina</span>, sin poder revelarle jamás quién es realmente ni que ella, sin saberlo, ya lo dio a luz una vez en el futuro.',
              img: '/Familias/Familia1/mikkel_katharina.jpg',
            },
            {
              title: 'Michael Kahnwald',
              timeline: '2019',
              text: 'Convertido en un artista solitario y melancólico, casado con Hannah y padre de Jonas. Es el <span class="magic-highlight">detonante absoluto del nudo</span>: el 21 de junio se suicida ahorcándose en su estudio, dejando el famoso sobre con la advertencia: "No abrir antes del 4 de Noviembre".',
              img: '/Familias/Familia1/michael_goodbye.jpg',
            },
            {
              title: 'El Padre Distante',
              timeline: '2000s - 2019',
              text: 'Nunca logra tender un puente real con Jonas. Su propio trauma —haber vivido una infancia robada— lo deja incapaz de ofrecer la cercanía que su hijo necesita, sembrando sin querer <span class="magic-highlight">la misma soledad</span> que él mismo cargó.',
              img: '/Familias/Familia1/michael_padre_distante.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'Inexistente',
              text: 'En el mundo paralelo de Eva, Jonas no existe para guiarlo a la cueva. Por lo tanto, nunca viaja al pasado y <span class="magic-highlight">sigue siendo el niño Mikkel</span>, evitando la creación de la rama Kahnwald.',
              img: '/Familias/Familia1/mikkel_mundo_eva.jpg',
            },
          ],
        },
        {
          id: 'hannah',
          name: 'Hannah Krüger',
          avatar: '/Familias/Familia1/hanna.png',
          stages: [
            {
              title: 'Hannah Krüger',
              timeline: '1986',
              text: 'Desde niña desarrolla una obsesión enfermiza y tóxica por <span class="magic-highlight">Ulrich Nielsen</span>. Guiada por los celos al verle con Katharina, llega al punto de mentir a la policía acusando a Ulrich de violación.',
              img: '/Familias/Familia1/hannah_1986.jpg',
            },
            {
              title: 'La Actriz Frustrada',
              timeline: '1986',
              text: 'Sueña con dejar Winden y convertirse en actriz, pero sus ambiciones quedan enterradas bajo la obsesión por Ulrich y, más tarde, bajo un matrimonio con Michael construido sobre <span class="magic-highlight">un amor a medias</span>.',
              img: '/Familias/Familia1/hannah_actriz.jpg',
            },
            {
              title: 'La Traición',
              timeline: '2019',
              text: 'Viuda de Michael y madre de Jonas. Trabaja como masajista y mantiene una <span class="magic-highlight">aventura clandestina con Ulrich</span>, chantajeando además a Aleksander Tiedemann para encubrir sus actos.',
              img: '/Familias/Familia1/hannah_traicion.jpg',
            },
            {
              title: 'Viaje a 1954',
              timeline: '1954',
              text: 'Roba la máquina del tiempo y viaja al pasado buscando a Ulrich en el manicomio, solo para regodearse y <span class="magic-highlight">abandonarlo a su suerte</span>. Allí conoce a Egon Tiedemann, con quien engendra a su hija Silja.',
              img: '/Familias/Familia1/hannah_1954.jpg',
            },
            {
              title: 'La Abuela Oculta',
              timeline: 'Generaciones',
              text: 'Su hija Silja, criada por los Tiedemann, tendrá más tarde descendencia con Bartosz — convirtiendo a Hannah, sin que nadie en Winden llegue a saberlo jamás, en <span class="magic-highlight">la bisabuela de Noah</span>.',
              img: '/Familias/Familia1/hannah_abuela.jpg',
            },
            {
              title: 'El Regreso',
              timeline: '1986 - 2019',
              text: 'Vuelve a su presente tras abandonar a Ulrich en el manicomio, cargando en silencio con el secreto de la hija que dejó atrás en 1954, sin saber jamás <span class="magic-highlight">qué fue de Silja</span>.',
              img: '/Familias/Familia1/hannah_regreso.jpg',
            },
            {
              title: 'La Madre Distante',
              timeline: '2019',
              text: 'Su relación con Jonas nunca es cálida: entre el duelo por Michael y sus propios secretos, apenas logra ofrecerle el consuelo que su hijo necesita tras el suicidio de su padre, dejándolo <span class="magic-highlight">emocionalmente a la deriva</span>.',
              img: '/Familias/Familia1/hannah_madre_distante.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'El Matrimonio',
              text: 'En esta realidad alternativa su deseo adolescente se cumple: <span class="magic-highlight">está casada con Ulrich</span> y espera un hijo. Sin embargo, el karma actúa y sufre sospechando de su infidelidad con Charlotte.',
              img: '/Familias/Familia1/hannah_mundo_eva.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'jonas',
          name: 'Jonas Kahnwald',
          avatar: '/Familias/Familia1/jonas.jpg',
          stages: [
            {
              title: 'El Protagonista',
              timeline: '2019',
              text: 'El icónico chico del <span class="magic-highlight">chubasquero amarillo</span>. Trata de recuperarse de la muerte de su padre mientras está profundamente enamorado de <span class="magic-highlight">Martha Nielsen</span>. Al descubrir que ella es técnicamente su tía, su realidad colapsa.',
              img: '/Familias/Familia1/jonas.jpg',
            },
            {
              title: 'La Búsqueda de Mikkel',
              timeline: '2019',
              text: 'Convencido de que puede salvar al pequeño Mikkel desaparecido, desciende una y otra vez a las cuevas de Winden guiado por un extraño mapa. Cada intento lo acerca más a la verdad que nadie más está preparado para aceptar: <span class="magic-highlight">el tiempo no es lineal</span>.',
              img: '/Familias/Familia1/jonas_busqueda.jpg',
            },
            {
              title: 'El Forastero',
              timeline: '2052',
              text: 'Tras quedar atrapado en el futuro post-apocalíptico, se endurece y se convierte en un <span class="magic-highlight">viajero solitario</span>. Intenta destruir el agujero de gusano, ignorando que es precisamente su intento de destruirlo lo que <span class="magic-highlight">crea el portal</span>.',
              img: '/Familias/Familia1/jonas_forastero.jpg',
            },
            {
              title: 'El Túnel de 1888',
              timeline: '1888',
              text: 'Arrastrado más atrás de lo que jamás imaginó, llega a un Winden aún sin electrificar y se une a la excavación del túnel bajo la mina, codo con codo con un joven <span class="magic-highlight">Noah</span> sin saber todavía en quién se convertirá.',
              img: '/Familias/Familia1/1.jpg',
            },
            {
              title: 'Adam',
              timeline: '1921',
              text: 'Con el rostro desfigurado por los incontables viajes temporales, Jonas pierde toda esperanza. Funda la orden <span class="magic-highlight">Sic Mundus</span>. Su objetivo muta drásticamente: ya no quiere salvar su mundo, sino aniquilar la existencia misma.',
              img: '/Familias/Familia1/jonas_adam.jpg',
            },
            {
              title: 'El Titiritero',
              timeline: 'Décadas',
              text: 'Desde las sombras de Sic Mundus, Adam mueve los hilos de generaciones enteras: envía cartas, orquesta encuentros y empuja a Hannah, a Noah y al propio Jonas más joven hacia los puntos exactos que <span class="magic-highlight">perpetúan el bucle</span> que él mismo desprecia.',
              img: '/Aclaraciones/Final/4.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'La Inexistencia',
              text: 'Al no viajar Mikkel en el mundo de Eva, <span class="magic-highlight">Jonas nunca nace</span> en esta realidad. Sin embargo, su ausencia no detiene el ineludible apocalipsis.',
              img: '/Aclaraciones/Final/3.jpg',
            },
            {
              title: 'El Origen',
              timeline: 'La Luz',
              text: 'En un acto de sacrificio final, acepta que él y Martha son "el error" de la matriz. Viajan al Mundo Origen, salvan a la familia Tannhaus y <span class="magic-highlight">se desvanecen lentamente</span> en polvo de estrellas.',
              img: '/Aclaraciones/Final/1.jpg',
            },
          ],
        },
      ],
    ],
  },
  // ================= NIELSEN =================
  {
    id: 'nielsen',
    name: 'Nielsen',
    subtitle: 'La locura y la pérdida',
    accent: '#7eb8d4',
    cover: '/Familias/Familia2/inicio.jpg',
    generations: [
      [
        {
          id: 'tronte',
          name: 'Tronte Nielsen',
          avatar: '/Familias/Familia2/11.jpg',
          stages: [
            {
              title: 'El Niño Marcado',
              timeline: '1953',
              text: 'Hijo de Agnes Nielsen y El Desconocido. Llega a Winden tras pasar años en un orfanato. Muestra <span class="magic-highlight">terribles quemaduras</span> en los brazos, ocultando un pasado de abusos.',
              img: '/Familias/Familia2/11.jpg',
            },
            {
              title: 'El Periodista',
              timeline: '1986',
              text: 'Casado con Jana, su familia se rompe en mil pedazos cuando <span class="magic-highlight">su hijo Mads desaparece</span>. Mantiene una aventura en secreto con Claudia Tiedemann.',
              img: '/Familias/Familia2/tronte_1986.jpg',
            },
            {
              title: 'El Búnker',
              timeline: '2020',
              text: 'Guiado por la Claudia del futuro, se ve obligado a mover el cadáver de su propio hijo por el bosque. Más tarde, toma la dura decisión de <span class="magic-highlight">asfixiar a Regina Tiedemann</span> para liberarla de su sufrimiento.',
              img: '/Familias/Familia2/tronte_bunker.jpg',
            },
            {
              title: 'Tres Edades',
              timeline: 'Retrato',
              text: 'Del niño marcado por el orfanato al hombre que carga con secretos de generaciones enteras: su rostro a través de las décadas resume el <span class="magic-highlight">peso del tiempo</span> sobre los Nielsen.',
              img: '/Familias/Familia2/tronte_ages.jpg',
            },
          ],
        },
        {
          id: 'jana',
          name: 'Jana Nielsen',
          avatar: '/Familias/Familia2/12.jpg',
          stages: [
            {
              title: 'La Niña de Winden',
              timeline: '1953',
              text: 'Crece en el Winden de posguerra sin sospechar aún el peso que la desaparición de un hijo tendrá algún día sobre ella — la misma <span class="magic-highlight">mirada seria</span> que conservará toda su vida ya asoma en su infancia.',
              img: '/Familias/Familia2/jana_1953.jpg',
            },
            {
              title: 'Jana Nielsen',
              timeline: '1986',
              text: 'Madre de Ulrich y Mads. La repentina desaparición de su hijo pequeño la consume, sumiéndola en una profunda depresión de la que <span class="magic-highlight">nunca se recupera</span>.',
              img: '/Familias/Familia2/12.jpg',
            },
            {
              title: 'La Testigo',
              timeline: '2019',
              text: 'Aún guarda la esperanza de que Mads siga vivo. Asegura haber visto a un <span class="magic-highlight">"hombre con una cabeza enorme"</span> (Helge) y a un sacerdote, afirmando obsesivamente que "todo está conectado".',
              img: '/Familias/Familia2/jana_testigo.jpg',
            },
            {
              title: 'El Velatorio',
              timeline: '1986',
              text: 'En el velatorio simbólico de Mads, se enfrenta a Tronte al descubrir su <span class="magic-highlight">aventura con Claudia Tiedemann</span>, obligándolo a elegir entre su familia rota y su amante. Su dolor nunca encuentra un cierre real.',
              img: '/Familias/Familia2/15.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'ulrich',
          name: 'Ulrich Nielsen',
          avatar: '/Familias/Familia2/1.jpg',
          stages: [
            {
              title: 'Ulrich Nielsen',
              timeline: '1986',
              text: 'Un joven rebelde obsesionado con el punk y la frase <span class="magic-highlight">"No Future"</span>. Su vida despreocupada se detiene en seco tras la desaparición de su hermano Mads.',
              img: '/Familias/Familia2/1.jpg',
            },
            {
              title: 'El Amor No Correspondido',
              timeline: '1986',
              text: 'Ignora por completo la obsesión que Hannah siente por él, entregado por completo a <span class="magic-highlight">Katharina</span> — una indiferencia que, años después, tendrá un coste altísimo.',
              img: '/Familias/Familia2/ulrich_amor.jpg',
            },
            {
              title: 'El Comisario',
              timeline: '2019',
              text: 'Oficial de policía casado con Katharina, pero mantiene una aventura con <span class="magic-highlight">Hannah</span>. Cuando su hijo Mikkel desaparece, su desesperación lo consume.',
              img: '/Familias/Familia2/ulrich_comisario.jpg',
            },
            {
              title: 'El Padre Desesperado',
              timeline: '2019',
              text: 'Convencido de que el desaparecido Erik Obendorf y su propio hijo Mikkel están conectados, empieza a atar cabos imposibles. Su obsesión por resolver el caso <span class="magic-highlight">destruye lo poco que quedaba de su matrimonio</span>.',
              img: '/Familias/Familia2/ulrich_padre_desesperado.jpg',
            },
            {
              title: 'El Hallazgo Macabro',
              timeline: '1953',
              text: 'Viajando al pasado en busca de respuestas, encuentra los restos de su propio hermano <span class="magic-highlight">Mads</span>, muerto desde hace décadas — la prueba irrefutable de que el tiempo en Winden no perdona a nadie.',
              img: '/Familias/Familia2/ulrich_hallazgo.jpg',
            },
            {
              title: 'El Prisionero',
              timeline: '1953 - 1987',
              text: 'Ataca brutalmente al niño Helge Doppler para "cambiar el futuro". Es arrestado por Egon Tiedemann y pasa <span class="magic-highlight">34 años encerrado en un psiquiátrico</span> como "El Asesino de Niños".',
              img: '/Familias/Familia2/ulrich_prisionero.jpg',
            },
            {
              title: '34 Años de Encierro',
              timeline: '1953 - 1987',
              text: 'Envejece entre rejas sin que nadie le crea, repitiendo una historia sobre <span class="magic-highlight">viajes en el tiempo</span> que solo confirma, a ojos de todos, su propia locura.',
              img: '/Familias/Familia2/ulrich_34anos.jpg',
            },
            {
              title: 'Sin Cierre',
              timeline: '1987',
              text: 'Katharina viaja en secreto hasta el pasado para rescatarlo, pero muere antes de lograrlo, asesinada por su propia madre. Ulrich jamás llega a saberlo: pasa el resto de su encierro <span class="magic-highlight">sin la más mínima idea</span> de que ella lo intentó.',
              img: '/Familias/Familia2/ulrich_sincierre.jpg',
            },
          ],
        },
        {
          id: 'katharina',
          name: 'Katharina',
          avatar: '/Familias/Familia2/3.jpg',
          stages: [
            {
              title: 'Katharina Albers',
              timeline: '1986',
              text: 'Una adolescente agresiva que sufre horribles abusos físicos por parte de su propia madre, Helene, lo que la lleva a hacer bullying a otros compañeros como Regina.',
              img: '/Familias/Familia2/3.jpg',
            },
            {
              title: 'La Hija de Helene',
              timeline: '1986',
              text: 'Vive aterrorizada en su propia casa, marcada por la violencia de su madre. Ese dolor no resuelto la convierte, paradójicamente, en la <span class="magic-highlight">verdugo de sus compañeros</span> antes de encontrar en Ulrich un refugio.',
              img: '/Familias/Familia2/katharina_hija_helene.jpg',
            },
            {
              title: 'Sospechas',
              timeline: '2019',
              text: 'Empieza a notar las ausencias y mentiras de Ulrich. La certeza de que le oculta algo —aunque no imagina que se trata de <span class="magic-highlight">Hannah</span>— la corroe silenciosamente incluso antes de la desaparición de Mikkel.',
              img: '/Familias/Familia2/katharina_sospechas.jpg',
            },
            {
              title: 'La Directora',
              timeline: '2019',
              text: 'Madre protectora de Magnus, Martha y Mikkel. Tras descubrir los viajes temporales y la infidelidad de Ulrich, su único objetivo es <span class="magic-highlight">recuperar a su familia</span>.',
              img: '/Familias/Familia2/katharina_directora.jpg',
            },
            {
              title: 'Madre de Tres',
              timeline: '2019',
              text: 'Hace equilibrios entre un Magnus rebelde, una Martha inquieta y un Mikkel soñador, intentando sostener a la familia unida mientras Winden entero parece <span class="magic-highlight">desmoronarse a su alrededor</span>.',
              img: '/Familias/Familia2/katharina_madre_tres.jpg',
            },
            {
              title: 'El Plan Desesperado',
              timeline: '1987',
              text: 'Cruza al pasado a través de la cueva. No logra encontrar a Mikkel, pero sí rastrea a Ulrich, encerrado en el psiquiátrico, y le perdona por su infidelidad antes de trazar un plan para <span class="magic-highlight">sacarlo de allí</span>.',
              img: '/Familias/Familia2/katharina_plan.jpg',
            },
            {
              title: 'Muerte en el Lago',
              timeline: '1987',
              text: 'Al intentar robarle una tarjeta de acceso a su propia madre —una Helene joven que no la reconoce como su hija del futuro— es <span class="magic-highlight">asesinada a golpes con una piedra</span>. Su cuerpo nunca es identificado.',
              img: '/Familias/Familia2/13.jpg',
            },
            {
              title: 'El Colgante de San Cristóbal',
              timeline: '1987',
              text: 'Junto a sus restos se halla un colgante de San Cristóbal que llevaba consigo — la única pista física de una desaparición que <span class="magic-highlight">nadie en 1987 sabe interpretar</span>.',
              img: '/Familias/Familia2/7.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'magnus',
          name: 'Magnus Nielsen',
          avatar: '/Familias/Familia2/8.jpg',
          stages: [
            {
              title: 'Magnus Nielsen',
              timeline: '2019',
              text: 'El hermano mayor. Oculta su vulnerabilidad bajo una fachada rebelde. Se enamora perdidamente de <span class="magic-highlight">Franziska Doppler</span>, con quien forma un vínculo inquebrantable.',
              img: '/Familias/Familia2/8.jpg',
            },
            {
              title: 'La Confrontación',
              timeline: '2019',
              text: 'Junto a Martha, se enfrenta a un Ulrich desesperado por encontrar a Mikkel, exigiéndole respuestas sobre los secretos que el propio Ulrich <span class="magic-highlight">no está dispuesto a compartir</span>.',
              img: '/Familias/Familia2/magnus_confronta_ulrich.jpg',
            },
            {
              title: 'Sic Mundus',
              timeline: '1888 - 1921',
              text: 'Viaja al siglo XIX huyendo del apocalipsis. Crece resentido pero fiel a Jonas, convirtiéndose finalmente en uno de los fundadores de Sic Mundus junto a su amada Franziska.',
              img: '/Familias/Familia2/magnus_sicmundus.jpg',
            },
            {
              title: 'La Sombra de Adam',
              timeline: '1921',
              text: 'Ya adulto y curtido por décadas en el pasado, reaparece junto a Franziska como uno de los dos miembros de Sic Mundus que ayudan a <span class="magic-highlight">Adam a abrir el agujero de gusano</span>, desencadenando la reacción en cadena que lleva al colapso de la central nuclear de Winden.',
              img: '/Familias/Familia2/magnus_1921.jpg',
            },
          ],
        },
        {
          id: 'martha',
          name: 'Martha / Eva',
          avatar: '/Familias/Familia2/4.jpg',
          stages: [
            {
              title: 'Martha Nielsen',
              timeline: '2019',
              text: 'Hija mediana de Katharina y Ulrich. Siente una conexión irrompible con Jonas. En el mundo de Adam, es asesinada por él mismo para forzar el ciclo.',
              img: '/Familias/Familia2/4.jpg',
            },
            {
              title: 'El Amor Imposible',
              timeline: '2019',
              text: 'Corresponde el amor de Jonas sin saber, al principio, que es técnicamente <span class="magic-highlight">su tía</span>: hija de Ulrich y Katharina, y por tanto hermana menor de Mikkel. Cuando la verdad sale a la luz, ninguno de los dos es capaz de renunciar al vínculo.',
              img: '/Familias/Familia2/5.jpg',
            },
            {
              title: 'La Muerte en la Iglesia',
              timeline: '2020',
              text: 'En el mundo de Adam, es asesinada a sangre fría por un Jonas mucho más viejo y desesperado, dentro de la vieja iglesia de Winden — un asesinato calculado para <span class="magic-highlight">forzar el nacimiento de Eva</span> en el mundo paralelo.',
              img: '/Familias/Familia2/martha_muerte_iglesia.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'La Sustituta',
              text: 'En su mundo paralelo, Jonas no existe. Al encontrar a un Jonas del otro universo, entiende la verdad del nudo.',
              img: '/Familias/Familia2/martha_mundo_eva.jpg',
            },
            {
              title: 'La Otra Martha',
              timeline: 'Cruce de Mundos',
              text: 'Descubre que no es la única Martha: existe otra versión de sí misma en un tercer mundo, prueba viviente de que la realidad se ha <span class="magic-highlight">ramificado mucho más allá</span> de Adam y Eva.',
              img: '/Familias/Familia2/9.jpg',
            },
            {
              title: 'Eva',
              timeline: 'Líder de Erit Lux',
              text: 'Su yo anciana se opone frontalmente a Adam. Su único objetivo es <span class="magic-highlight">preservar el nudo infinito</span> para asegurar que su hijo, El Desconocido, siga naciendo eternamente.',
              img: '/Familias/Familia2/14.jpg',
            },
            {
              title: 'La Alianza',
              timeline: 'El Origen',
              text: 'Rompe con la agenda de su propia versión anciana (Eva) y se une a Jonas: juntos concluyen que ni Adam ni Eva deberían existir, y que la única salida es <span class="magic-highlight">viajar al Mundo Origen</span>.',
              img: '/Familias/Familia2/martha_alianza.jpg',
            },
            {
              title: 'El Origen',
              timeline: 'La Luz',
              text: 'Junto a Jonas, acepta ser "el error" que nunca debió existir. Ambos se desvanecen lentamente en polvo de estrellas tras <span class="magic-highlight">salvar a la familia Tannhaus</span> del accidente que originó todo.',
              img: '/Aclaraciones/Final/2.jpg',
            },
          ],
        },
      ],
    ],
  },
  // ================= DOPPLER =================
  {
    id: 'doppler',
    name: 'Doppler',
    subtitle: 'El secreto y la traición',
    accent: '#a87c4f',
    cover: '/Familias/Familia3/inicio.jpg',
    generations: [
      [
        {
          id: 'bernd',
          name: 'Bernd Doppler',
          avatar: '/Familias/Familia3/12.jpg',
          stages: [
            {
              title: 'Bernd Doppler',
              timeline: '1953 - 1986',
              text: 'Fundador y primer director de la <span class="magic-highlight">Central Nuclear de Winden</span>. Su máxima preocupación es encubrir un misterioso accidente y los residuos radioactivos amarillos escondidos en las cuevas.',
              img: '/Familias/Familia3/12.jpg',
            },
            {
              title: 'El Padre Cojo',
              timeline: '1953',
              text: 'Camina apoyado en un bastón por una cojera nunca explicada. A diferencia de Greta, trata a Helge con cariño genuino, acariciándole el rostro y preguntándole por su día mientras ella lo somete a un trato mucho más frío.',
              img: '/Familias/Familia3/5.jpg',
            },
            {
              title: 'Las Fotografías',
              timeline: '1986',
              text: 'Ya anciano, revisa viejos retratos familiares mientras empaqueta su despacho tras ceder la dirección de la central a Claudia — un repaso silencioso a <span class="magic-highlight">generaciones enteras de Dopplers</span>.',
              img: '/Familias/Familia3/bernd_fotografias.jpg',
            },
            {
              title: 'El Retiro',
              timeline: '1986',
              text: 'Ya en silla de ruedas, recibe visitas en su elegante salón sin que nadie sospeche que guarda un secreto capaz de <span class="magic-highlight">reescribir todo el árbol Doppler-Tiedemann</span>.',
              img: '/Familias/Familia3/bernd_retirado.jpg',
            },
            {
              title: 'El Secreto Final',
              timeline: 'Mundo Origen',
              text: 'Al final de la serie, una sutil fotografía revela que Bernd es, sorprendentemente, el padre biológico de <span class="magic-highlight">Regina Tiedemann</span> junto a Claudia.',
              img: '/Familias/Familia3/bernd_secreto.jpg',
            },
          ],
        },
        {
          id: 'greta',
          name: 'Greta Doppler',
          avatar: '/Familias/Familia3/13.jpg',
          stages: [
            {
              title: 'Greta Doppler',
              timeline: '1953',
              text: 'Esposa de Bernd Doppler y madre de Helge. Lo educa con férrea disciplina religiosa y constantes abusos físicos. Llega a confesarle a Noah que cree que Helge <span class="magic-highlight">"no fue concebido con amor"</span>.',
              img: '/Familias/Familia3/13.jpg',
            },
            {
              title: 'El Castigo',
              timeline: '1953',
              text: 'Cuando Helge llega a casa embarrado tras jugar en el bosque, lo agarra bruscamente por la oreja y lo obliga a desnudarse en la entrada — una disciplina fría muy distinta al <span class="magic-highlight">cariño que Bernd sí le ofrece</span>.',
              img: '/Familias/Familia3/greta_oreja.jpg',
            },
            {
              title: 'La Confesión a Noah',
              timeline: '1953',
              text: 'En la penumbra del salón familiar, se sincera con el joven párroco Noah sobre sus dudas más oscuras respecto a Helge, sin imaginar en quién <span class="magic-highlight">se convertirá ese sacerdote</span> con el tiempo.',
              img: '/Familias/Familia3/greta_noah.jpg',
            },
            {
              title: 'La Desaparición',
              timeline: '1953',
              text: 'Cuando Helge desaparece en el bosque, insinúa a Noah que Bernd no es el verdadero padre del niño, y que Helge es fruto de una violación. Confiesa incluso haber deseado alguna vez que <span class="magic-highlight">Dios se lo llevara</span>.',
              img: '/Familias/Familia3/10.jpg',
            },
            {
              title: 'El Regreso',
              timeline: '1954',
              text: 'Cuando Helge regresa meses después, físicamente marcado y emocionalmente destrozado, se arrodilla ante él para comprobar que es real, agradeciendo entre lágrimas que <span class="magic-highlight">se lo hayan devuelto</span>.',
              img: '/Familias/Familia3/11.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'helge',
          name: 'Helge Doppler',
          avatar: '/Familias/Familia3/9.jpg',
          stages: [
            {
              title: 'El Niño Atacado',
              timeline: '1953',
              text: 'Un niño solitario con una colección de piñas del bosque. Ulrich Nielsen lo ataca con una piedra dejándolo al borde de la muerte y causándole graves deformidades en el rostro.',
              img: '/Familias/Familia3/helge_1953.jpg',
            },
            {
              title: 'El Umbral',
              timeline: '1953',
              text: 'Malherido y ensangrentado, es llevado a través del pasaje de las cuevas hacia un lugar que no debería existir todavía: el <span class="magic-highlight">búnker con papel pintado infantil</span>. Su primer contacto con el bucle que lo consumirá durante décadas.',
              img: '/Familias/Familia3/helge_umbral.jpg',
            },
            {
              title: 'El Secuaz',
              timeline: '1986',
              text: 'Manipulado y convertido en el sirviente de Noah. Es quien secuestra a los niños y limpia el <span class="magic-highlight">espeluznante búnker con papel pintado infantil</span>.',
              img: '/Familias/Familia3/helge_1986.jpg',
            },
            {
              title: 'El Búnker de Noah',
              timeline: '1986',
              text: 'Ayuda a Noah a preparar la silla de electroshocks con la que "cura" a las víctimas de sus experimentos. Su rostro desfigurado y su mirada vacía delatan que <span class="magic-highlight">ya no queda nada del niño</span> que fue.',
              img: '/Familias/Familia3/helge_bunker_noah.jpg',
            },
            {
              title: 'El Peso de la Culpa',
              timeline: '1986',
              text: 'Entre las paredes turquesa del búnker, algo de humanidad sobrevive: los remordimientos lo asaltan cada vez con más fuerza, aunque nunca <span class="magic-highlight">encuentra el valor de desobedecer a Noah</span>.',
              img: '/Familias/Familia3/helge_culpa.jpg',
            },
            {
              title: 'Las Tareas Sucias',
              timeline: '1986',
              text: 'Se encarga de ocultar cualquier rastro del búnker en el bosque, cargando con guantes de goma la evidencia de un secreto que <span class="magic-highlight">ni el propio Winden sospecha</span> que existe bajo sus pies.',
              img: '/Familias/Familia3/helge_tareas.jpg',
            },
            {
              title: 'El Padre Ausente',
              timeline: '1987',
              text: 'Su hijo Peter, ya adulto, lo visita cargado de resentimiento. La relación entre ambos nunca se repara: Helge es incapaz de ofrecerle explicaciones que <span class="magic-highlight">justifiquen tantos años de distancia</span>.',
              img: '/Familias/Familia3/helge_peter.jpg',
            },
            {
              title: 'Tick Tock',
              timeline: '2019',
              text: 'Encerrado en un geriátrico, perdiendo la cabeza, solo repite: <span class="magic-highlight">"Tick, tack... Va a volver a pasar"</span>. Intenta suicidarse chocando su coche de frente contra su propia versión de 1986.',
              img: '/Familias/Familia3/helge_2019.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'peter',
          name: 'Peter Doppler',
          avatar: '/Familias/Familia3/4.jpg',
          stages: [
            {
              title: 'Peter Doppler',
              timeline: '2019',
              text: 'Psicólogo atormentado que reprime su homosexualidad. Es el primero en encontrar el cadáver de Mads cayendo de la nada en el búnker, viéndose obligado a <span class="magic-highlight">encubrir la verdad</span>.',
              img: '/Familias/Familia3/peter_bunker.jpg',
            },
            {
              title: 'Juventud en Winden',
              timeline: '1987',
              text: 'Crece como hijo de Helge, marcado por la distancia de un padre cada vez más ausente. Esa herencia de silencios lo empuja hacia una vida adulta construida sobre <span class="magic-highlight">secretos que jamás comparte</span>.',
              img: '/Familias/Familia3/peter_juventud.jpg',
            },
            {
              title: 'El Amor Prohibido',
              timeline: '2019',
              text: 'Mantiene una relación clandestina con Benedict, incapaz de vivir abiertamente su sexualidad en el pueblo que lo vio crecer. Su matrimonio con Charlotte se sostiene sobre <span class="magic-highlight">una mentira compartida</span>.',
              img: '/Familias/Familia3/peter_benedict.jpg',
            },
            {
              title: 'El Sacrificio',
              timeline: '2020',
              text: 'Sobrevive al apocalipsis. Mientras busca suministros, muere heroicamente asesinado por un saqueador al interponerse para <span class="magic-highlight">proteger a su hija Elisabeth</span>.',
              img: '/Familias/Familia3/peter_sacrificio.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'El Párroco',
              text: 'En el mundo paralelo, la vida de Peter toma un camino muy diferente: se convierte en el párroco de la iglesia de Winden, pero sigue manteniendo sus inclinaciones reprimidas.',
              img: '/Familias/Familia3/peter_mundo_eva.jpg',
            },
          ],
        },
        {
          id: 'charlotte',
          name: 'Charlotte Doppler',
          avatar: '/Familias/Familia3/2.jpg',
          stages: [
            {
              title: 'Charlotte Doppler',
              timeline: '1986 - 2019',
              text: 'Jefa de policía metódica, obsesionada con los pájaros muertos. Fue criada por el relojero <span class="magic-highlight">H.G. Tannhaus</span> sin conocer su verdadero origen familiar.',
              img: '/Familias/Familia3/2.jpg',
            },
            {
              title: 'La Nieta Adoptiva',
              timeline: '1986',
              text: 'Crece en la relojería de Tannhaus, rodeada de engranajes y teorías sobre agujeros negros, sin sospechar que el hombre que la crió es, en realidad, <span class="magic-highlight">la pieza clave de su propio origen</span>.',
              img: '/Familias/Familia3/charlotte_nieta.jpg',
            },
            {
              title: 'La Jefa de Policía',
              timeline: '2019',
              text: 'Al frente de la comisaría de Winden, dirige personalmente los interrogatorios sobre las desapariciones. Su obsesión metódica por los detalles —como los pájaros que caen muertos del cielo— <span class="magic-highlight">esconde una intuición que ni ella misma comprende</span>.',
              img: '/Familias/Familia3/charlotte_jefa.jpg',
            },
            {
              title: 'Alianza con Katharina',
              timeline: '2019',
              text: 'Une fuerzas con Katharina Nielsen para investigar la desaparición de Mikkel. Ninguna de las dos imagina todavía cuánto <span class="magic-highlight">sus familias están ya entrelazadas</span> por generaciones de secretos.',
              img: '/Familias/Familia3/charlotte_katharina.jpg',
            },
            {
              title: 'La Gran Paradoja',
              timeline: '2020',
              text: 'Descubre el secreto más retorcido del árbol de Winden: sus padres son el asesino Noah y <span class="magic-highlight">su propia hija, Elisabeth Doppler</span>.',
              img: '/Familias/Familia3/1.jpg',
            },
            {
              title: 'La Niña Robada',
              timeline: '1971',
              text: 'De bebé nace en el bosque de un Winden postapocalíptico, hija de Noah y Elisabeth. Poco después de nacer, es secuestrada por versiones ancianas de sí misma y de su madre, que la entregan al relojero <span class="magic-highlight">H.G. Tannhaus en 1971</span>, cerrando así el bucle de su propio origen.',
              img: '/Familias/Familia3/3.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'franziska',
          name: 'Franziska',
          avatar: '/Familias/Familia3/6.jpg',
          stages: [
            {
              title: 'Franziska Doppler',
              timeline: '2019',
              text: 'Hija mayor de Peter y Charlotte. Gimnasta rítmica y rebelde que esconde fajos de billetes en las vías del tren. Se enamora perdidamente de <span class="magic-highlight">Magnus Nielsen</span>.',
              img: '/Familias/Familia3/franziska_2019.jpg',
            },
            {
              title: 'La Devota',
              timeline: '1921',
              text: 'Tras huir del apocalipsis al pasado, envejece apoyando incondicionalmente a la causa destructiva de Adam en la oscura guarida de Sic Mundus.',
              img: '/Familias/Familia3/franziska_1921.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'El Silencio',
              text: 'En el mundo de Eva, el destino juega a la inversa: Franziska es sordomuda en lugar de su hermana Elisabeth.',
              img: '/Familias/Familia3/franziska_eva.jpg',
            },
          ],
        },
        {
          id: 'elisabeth',
          name: 'Elisabeth Doppler',
          avatar: '/Familias/Familia3/8.jpg',
          stages: [
            {
              title: 'Elisabeth Doppler',
              timeline: '2019',
              text: 'La hija menor de Charlotte y Peter. Sordomuda e inteligente. Conoce al misterioso Noah en el bosque, quien en lugar de secuestrarla le regala un reloj de bolsillo dorado.',
              img: '/Familias/Familia3/elisabeth_opening.jpg',
            },
            {
              title: 'El Reloj de Bolsillo',
              timeline: '2019',
              text: 'Guarda con cariño el extraño regalo de Noah, sin saber que ese reloj dorado es un objeto que <span class="magic-highlight">viaja en bucle a través de generaciones</span> de la familia Doppler.',
              img: '/Familias/Familia3/elisabeth_reloj.jpg',
            },
            {
              title: 'La Adolescente Endurecida',
              timeline: '2020',
              text: 'Crece rápido en un Winden cada vez más oscuro, marcada por el apocalipsis que se avecina. Su mirada seria ya anticipa a la <span class="magic-highlight">líder implacable</span> en la que se convertirá.',
              img: '/Familias/Familia3/elisabeth_adolescente.jpg',
            },
            {
              title: 'La Superviviente',
              timeline: '2053',
              text: 'Se convierte en una figura militar, fría y despiadada, que lidera a los pocos supervivientes en un culto alrededor de la profecía del paraíso prometido.',
              img: '/Familias/Familia3/elisabeth_superviviente.jpg',
            },
            {
              title: 'El Bucle del Origen',
              timeline: 'El Nudo',
              text: 'Conoce al joven Noah tras el apocalipsis. Se enamoran y tienen una bebé: <span class="magic-highlight">Charlotte</span>. La niña es secuestrada y entregada al relojero, cerrando la paradoja madre-hija.',
              img: '/Familias/Familia3/elisabeth_bucle.jpg',
            },
          ],
        },
      ],
    ],
  },
  // ================= TIEDEMANN =================
  {
    id: 'tiedemann',
    name: 'Tiedemann',
    subtitle: 'El poder y su precio',
    accent: '#8fbc8f',
    cover: '/Familias/Familia4/inicio.jpg',
    generations: [
      [
        {
          id: 'egon',
          name: 'Egon Tiedemann',
          avatar: '/Familias/Familia4/10.jpg',
          stages: [
            {
              title: 'El Oficial Ciego',
              timeline: '1953',
              text: 'Jefe de policía recto y alcohólico. Arresta al Ulrich del futuro convencido de que es un asesino en serie infanticida. Ignora por completo que <span class="magic-highlight">su mujer le está siendo infiel</span>.',
              img: '/Familias/Familia4/egon_1953.jpg',
            },
            {
              title: 'El Joven Egon',
              timeline: 'Antes de 1953',
              text: 'Antes de convertirse en el severo jefe de policía de Winden, ya carga con la rigidez y el sentido del deber que definirán toda su carrera — un hombre formado en <span class="magic-highlight">tiempos duros</span>, incapaz de mostrar debilidad.',
              img: '/Familias/Familia4/egon_joven.jpg',
            },
            {
              title: 'El Inspector',
              timeline: '1986',
              text: 'Obsesionado con la desaparición de Mads y la maldad de Ulrich Nielsen. Pasa a su jubilación desarrollando cáncer y problemas de alcoholismo, pero finalmente descubre el secreto de los viajes en el tiempo.',
              img: '/Familias/Familia4/egon_1986.jpg',
            },
            {
              title: 'Mundo de Eva',
              timeline: 'Décadas',
              text: 'En la realidad alternativa de Eva, sobrevive muchos años más de lo que le correspondía, envejeciendo entre las ruinas de un Winden distinto — <span class="magic-highlight">una vida entera que nunca debió tener</span>.',
              img: '/Familias/Familia4/egon_eva.jpg',
            },
            {
              title: 'La Muerte Trágica',
              timeline: '1987',
              text: 'Intenta revelar al mundo el agujero de gusano. En un forcejeo físico con su propia hija Claudia, sufre una caída fatal, dándose cuenta mientras muere que su hija es la culpable ("El Demonio Blanco").',
              img: '/Familias/Familia4/egon_muerte.jpg',
            },
          ],
        },
        {
          id: 'doris',
          name: 'Doris Tiedemann',
          avatar: '/Familias/Familia4/13.jpg',
          stages: [
            {
              title: 'El Matrimonio con Egon',
              timeline: '1953',
              text: 'Recién casada, sonríe para las visitas mientras se acostumbra al papel de esposa del rígido jefe de policía de Winden — una vida ordenada que pronto <span class="magic-highlight">empezará a asfixiarla</span>.',
              img: '/Familias/Familia4/doris_matrimonio.jpg',
            },
            {
              title: 'Doris Tiedemann',
              timeline: '1953',
              text: 'Casada con Egon, asfixiada por la rutina de una ama de casa de los años 50. Su vida cambia cuando alquila una habitación a la elegante y misteriosa <span class="magic-highlight">Agnes Nielsen</span>.',
              img: '/Familias/Familia4/doris_agnes.jpg',
            },
            {
              title: 'Amor Prohibido',
              timeline: '1954',
              text: 'Se enamora profundamente de Agnes, manteniendo una aventura prohibida hasta que Egon lo descubre y ella toma la decisión de abandonar a su marido.',
              img: '/Familias/Familia4/doris_amor.jpg',
            },
            {
              title: 'La Madre Ausente',
              timeline: '1954',
              text: 'Su marcha deja a la pequeña <span class="magic-highlight">Claudia</span> creciendo prácticamente sola junto a un padre entregado al trabajo y al alcohol, una ausencia que marcará el carácter frío y calculador de su hija en la edad adulta.',
              img: '/Familias/Familia4/3.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'claudia',
          name: 'Claudia Tiedemann',
          avatar: '/Familias/Familia4/8.jpg',
          stages: [
            {
              title: 'La Niña de los Tiedemann',
              timeline: '1953',
              text: 'Crece junto a un joven Tronte Nielsen, que se aloja en su casa familiar. Observadora y precoz, ya entonces muestra la <span class="magic-highlight">curiosidad implacable</span> que definirá el resto de su vida.',
              img: '/Familias/Familia4/claudia_1953.jpg',
            },
            {
              title: 'La Directora',
              timeline: '1986',
              text: 'Una mujer inteligente y fría. Se convierte en la primera mujer directora de la planta nuclear de Winden. Descubre los incidentes radioactivos y, más tarde, el libro de viajes en el tiempo.',
              img: '/Familias/Familia4/claudia_directora.jpg',
            },
            {
              title: 'El Demonio Blanco',
              timeline: '2020',
              text: 'Abandona su vida para estudiar la "Partícula de Dios". Entiende la batalla entre la luz (Eva) y la sombra (Adam) y comienza a viajar entre mundos con su fiel perro Gretchen.',
              img: '/Familias/Familia4/claudia_demonio.jpg',
            },
            {
              title: 'La Anciana Errante',
              timeline: 'Décadas',
              text: 'Envejece saltando entre líneas temporales durante años, siempre un paso por detrás de la verdad completa, hasta que finalmente comprende la <span class="magic-highlight">pieza que le faltaba</span> del rompecabezas.',
              img: '/Familias/Familia4/claudia_2019.jpg',
            },
            {
              title: 'La Verdad Absoluta',
              timeline: 'El Origen',
              text: 'Descubre la pieza faltante del puzle. Ni el mundo de Adam ni el de Eva deberían existir. Su único objetivo de vida ha sido <span class="magic-highlight">salvar a su hija Regina</span> del cáncer terminal, lo cual solo es posible destruyendo los dos universos paralelos.',
              img: '/Familias/Familia4/claudia_verdad.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'regina',
          name: 'Regina Tiedemann',
          avatar: '/Familias/Familia4/1.1.jpg',
          stages: [
            {
              title: 'El Bullying',
              timeline: '1986',
              text: 'Una joven solitaria aterrorizada por los abusos de Ulrich y Katharina, quienes la atan a un árbol en el bosque. Es salvada y consolada por un misterioso joven con pasaporte falso: Aleksander.',
              img: '/Familias/Familia4/regina_bullying.jpg',
            },
            {
              title: 'El Matrimonio',
              timeline: '1993',
              text: 'Se casa con Aleksander en la pequeña iglesia de Winden, sin sospechar jamás la identidad oculta que su marido carga desde que llegó al pueblo con <span class="magic-highlight">un pasaporte que no era el suyo</span>.',
              img: '/Familias/Familia4/regina_matrimonio.jpg',
            },
            {
              title: 'La Enfermedad',
              timeline: '2019',
              text: 'Dueña del único hotel de Winden. Desarrolla cáncer de mama avanzado que merma su esperanza de vida. Su madre la aísla en el búnker para salvarla del Apocalipsis.',
              img: '/Familias/Familia4/regina_enfermedad.jpg',
            },
            {
              title: 'La Carta del Diagnóstico',
              timeline: '2019',
              text: 'Recibe por correo la citación del centro de mamografías que confirmará lo que ya temía. Es el primer paso de una enfermedad que <span class="magic-highlight">Claudia hará lo imposible por revertir</span>.',
              img: '/Familias/Familia4/regina_diagnostico.jpg',
            },
            {
              title: 'La Causa Final',
              timeline: 'Mundo Origen',
              text: 'En el mundo puro (Mundo de Origen), los accidentes radioactivos provocados por la planta nuclear nunca existieron, por lo que ella nunca desarrolló cáncer y <span class="magic-highlight">vive felizmente</span> junto a sus amigos.',
              img: '/Familias/Familia4/regina_causa_final.jpg',
            },
          ],
        },
        {
          id: 'aleksander',
          name: 'Aleksander Tiedemann',
          avatar: '/Familias/Familia4/2.jpg',
          stages: [
            {
              title: 'Boris Niewald',
              timeline: '1986',
              text: 'Llega herido y armado a Winden huyendo de un crimen en Marburg. Oculta su identidad asumiendo el pasaporte de una de sus víctimas: <span class="magic-highlight">Aleksander Köhler</span>.',
              img: '/Familias/Familia4/aleksander_1986.jpg',
            },
            {
              title: 'El Director',
              timeline: '2019',
              text: 'Ascendió en la planta nuclear ocultando los barriles amarillos para Claudia Tiedemann. Al igual que su mentora, trata de mantener en silencio los secretos tóxicos de Winden.',
              img: '/Familias/Familia4/aleksander_director.jpg',
            },
            {
              title: 'El Nuevo Nombre',
              timeline: '1986',
              text: 'El pasaporte falso a nombre de Aleksander Köhler, expedido en Marburgo, se convierte en el documento que sostiene toda su vida en Winden — la única prueba física de <span class="magic-highlight">una identidad construida sobre una mentira</span>.',
              img: '/Familias/Familia4/aleksander_nombre.jpg',
            },
            {
              title: 'El Pasaporte Enterrado',
              timeline: '1986',
              text: 'Hannah Kahnwald lo sorprende enterrando en el bosque una bolsa con un arma y un pasaporte a nombre de <span class="magic-highlight">Boris Niewald</span>, cambiándolo por otro emitido en Marburg a nombre de Aleksander Köhler — el momento exacto en que borra su identidad anterior para siempre.',
              img: '/Familias/Familia4/5.jpg',
            },
          ],
        },
      ],
      [
        {
          id: 'bartosz',
          name: 'Bartosz Tiedemann',
          avatar: '/Familias/Familia4/6.jpg',
          stages: [
            {
              title: 'El Peón',
              timeline: '2019',
              text: 'Hijo de Regina y Aleksander. Tras la desaparición de Jonas y las desgracias del pueblo, cae en las redes manipuladoras de Noah, quien le convence de trabajar para Sic Mundus.',
              img: '/Familias/Familia4/bartosz_peon.jpg',
            },
            {
              title: 'El Exiliado',
              timeline: '1890',
              text: 'Queda atrapado en el pasado trabajando en la excavación del túnel de Sic Mundus. Conoce a Silja y descubre horrorizado que <span class="magic-highlight">él mismo engendró a Noah</span> y a Agnes.',
              img: '/Familias/Familia4/bartosz_exiliado.jpg',
            },
            {
              title: 'El Nacimiento de Hanno',
              timeline: '1902',
              text: 'Junto a Silja, recibe a su primer hijo: Hanno, el niño que crecerá para convertirse en <span class="magic-highlight">Noah</span>. Un momento de ternura genuina en medio de una vida atrapada fuera de su tiempo.',
              img: '/Familias/Familia4/bartosz_hanno.jpg',
            },
            {
              title: 'Acepta su Destino',
              timeline: '1904 - 1921',
              text: 'Resignado a no volver jamás a 2019, deja de luchar contra su nueva vida y acepta el peso de las decisiones que lo trajeron hasta aquí, endureciéndose año tras año en el <span class="magic-highlight">Winden del pasado</span>.',
              img: '/Familias/Familia4/bartosz_destino.jpg',
            },
            {
              title: 'La Muerte Irónica',
              timeline: '1921',
              text: 'En una trágica ironía del destino, un anciano y desencantado Bartosz es <span class="magic-highlight">asesinado a pico por su propio hijo</span>, el joven Noah, demostrando su devoción a Adam.',
              img: '/Familias/Familia4/bartosz_muerte.jpg',
            },
          ],
        },
      ],
    ],
  },
  // ================= ADICIONALES =================
  {
    id: 'adicionales',
    name: 'Adicionales',
    subtitle: 'Fuera del tiempo',
    accent: '#b8a0c8',
    cover: '/Familias/Familia5/inicio.jpg',
    generations: [
      [
        {
          id: 'tannhaus',
          name: 'H.G. Tannhaus',
          avatar: '/Familias/Familia5/inicio.png',
          stages: [
            {
              title: 'El Relojero',
              timeline: '1953 - 1986',
              text: 'El excéntrico relojero de Winden y autor del libro "Un Viaje a Través del Tiempo". Repara los dispositivos extraños de los viajeros y acaba construyendo la mismísima máquina del tiempo de latón.',
              img: '/Familias/Familia5/tannhaus_relojero.jpg',
            },
            {
              title: 'El Accidente',
              timeline: '12 de noviembre, 1986',
              text: 'Un recorte de periódico documenta el choque que le arrebata a su hijo Marek, su nuera y su nieta — la tragedia real que en el Mundo Origen <span class="magic-highlight">nunca llega a ocurrir</span>, pero que aquí lo destroza para siempre.',
              img: '/Familias/Familia5/tannhaus_accidente.jpg',
            },
            {
              title: 'El Creador Trágico',
              timeline: 'Mundo Origen',
              text: 'En el Mundo Origen, pierde a su hijo Marek, su nuera y su nieta en un accidente en 1971. El dolor lo lleva a construir la primera máquina. Al activarla, destruye su universo y <span class="magic-highlight">crea el bucle de Jonas y Martha</span>.',
              img: '/Familias/Familia5/tannhaus_familia.jpg',
            },
            {
              title: 'El Autor Anónimo',
              timeline: '1986',
              text: 'Es también el adoptivo abuelo de Charlotte Doppler, a quien recoge de niña sin conocer su verdadero origen. Le enseña sobre agujeros negros, el ciclo de 33 años y el espaciotiempo, sin saber que ella misma es <span class="magic-highlight">producto de sus propios experimentos</span>.',
              img: '/Familias/Familia5/tannhaus_autor.jpg',
            },
          ],
        },
        {
          id: 'desconocido',
          name: 'El Desconocido',
          avatar: '/Familias/Familia5/desconocido.jpg',
          stages: [
            {
              title: 'La Anomalía',
              timeline: 'Eternidad',
              text: 'Fruto del amor imposible entre Jonas y Martha de dos mundos distintos. Se mueve eternamente sincronizado con sus versiones de niño, adulto y anciano. Jamás se le da un nombre.',
              img: '/Familias/Familia5/desconocido_anomalia.jpg',
            },
            {
              title: 'El Rostro Sin Nombre',
              timeline: 'El Bucle',
              text: 'Su labio leporino es la única marca que lo distingue en cada época que habita — la cicatriz física de <span class="magic-highlight">una existencia que nunca debió empezar</span>.',
              img: '/Familias/Familia5/desconocido_rostro.jpg',
            },
            {
              title: 'El Arquitecto del Dolor',
              timeline: 'El Bucle',
              text: 'Su labio leporino lo delata. Extorsiona y asesina para asegurar los planos de la central nuclear. Es el encargado de <span class="magic-highlight">escribir la libreta de cuero</span> garantizando que el ciclo de desgracias se repita.',
              img: '/Familias/Familia5/desconocido_arquitecto.jpg',
            },
            {
              title: 'La Inexistencia',
              timeline: 'Mundo Origen',
              text: 'Cuando Jonas y Martha viajan al Mundo Origen y evitan el accidente que mata a la familia de Tannhaus, la máquina del tiempo nunca se construye. Sin bucle que lo sostenga, <span class="magic-highlight">deja de existir</span> junto con Adam y Eva.',
              img: '/Familias/Familia5/desconocido_inexistencia.jpg',
            },
          ],
        },
      ],
    ],
  },
];

export const relationshipData: FamilyRelationship[] = [
  { id: 'kahnwald-mikkel-hannah', type: 'couple', from: 'mikkel', to: 'hannah', familyId: 'kahnwald' },
  { id: 'kahnwald-ines-mikkel', type: 'parentChild', from: 'ines', to: 'mikkel', familyId: 'kahnwald' },
  { id: 'kahnwald-mikkel-jonas', type: 'parentChild', from: 'mikkel', to: 'jonas', familyId: 'kahnwald' },
  { id: 'kahnwald-hannah-jonas', type: 'parentChild', from: 'hannah', to: 'jonas', familyId: 'kahnwald' },

  { id: 'nielsen-tronte-jana', type: 'couple', from: 'tronte', to: 'jana', familyId: 'nielsen' },
  { id: 'nielsen-tronte-ulrich', type: 'parentChild', from: 'tronte', to: 'ulrich', familyId: 'nielsen' },
  { id: 'nielsen-jana-ulrich', type: 'parentChild', from: 'jana', to: 'ulrich', familyId: 'nielsen' },
  { id: 'nielsen-ulrich-katharina', type: 'couple', from: 'ulrich', to: 'katharina', familyId: 'nielsen' },
  { id: 'nielsen-ulrich-magnus', type: 'parentChild', from: 'ulrich', to: 'magnus', familyId: 'nielsen' },
  { id: 'nielsen-katharina-magnus', type: 'parentChild', from: 'katharina', to: 'magnus', familyId: 'nielsen' },
  { id: 'nielsen-ulrich-martha', type: 'parentChild', from: 'ulrich', to: 'martha', familyId: 'nielsen' },
  { id: 'nielsen-katharina-martha', type: 'parentChild', from: 'katharina', to: 'martha', familyId: 'nielsen' },
  { id: 'nielsen-ulrich-mikkel', type: 'parentChild', from: 'ulrich', to: 'mikkel', familyId: 'nielsen' },
  { id: 'nielsen-katharina-mikkel', type: 'parentChild', from: 'katharina', to: 'mikkel', familyId: 'nielsen' },

  { id: 'doppler-bernd-greta', type: 'couple', from: 'bernd', to: 'greta', familyId: 'doppler' },
  { id: 'doppler-bernd-helge', type: 'parentChild', from: 'bernd', to: 'helge', familyId: 'doppler' },
  { id: 'doppler-greta-helge', type: 'parentChild', from: 'greta', to: 'helge', familyId: 'doppler' },
  { id: 'doppler-helge-peter', type: 'parentChild', from: 'helge', to: 'peter', familyId: 'doppler' },
  { id: 'doppler-peter-charlotte', type: 'couple', from: 'peter', to: 'charlotte', familyId: 'doppler' },
  { id: 'doppler-peter-franziska', type: 'parentChild', from: 'peter', to: 'franziska', familyId: 'doppler' },
  { id: 'doppler-charlotte-franziska', type: 'parentChild', from: 'charlotte', to: 'franziska', familyId: 'doppler' },
  { id: 'doppler-peter-elisabeth', type: 'parentChild', from: 'peter', to: 'elisabeth', familyId: 'doppler' },
  { id: 'doppler-charlotte-elisabeth', type: 'parentChild', from: 'charlotte', to: 'elisabeth', familyId: 'doppler' },

  { id: 'tiedemann-egon-doris', type: 'couple', from: 'egon', to: 'doris', familyId: 'tiedemann' },
  { id: 'tiedemann-egon-claudia', type: 'parentChild', from: 'egon', to: 'claudia', familyId: 'tiedemann' },
  { id: 'tiedemann-doris-claudia', type: 'parentChild', from: 'doris', to: 'claudia', familyId: 'tiedemann' },
  { id: 'tiedemann-claudia-regina', type: 'parentChild', from: 'claudia', to: 'regina', familyId: 'tiedemann' },
  { id: 'tiedemann-regina-aleksander', type: 'couple', from: 'regina', to: 'aleksander', familyId: 'tiedemann' },
  { id: 'tiedemann-regina-bartosz', type: 'parentChild', from: 'regina', to: 'bartosz', familyId: 'tiedemann' },
  { id: 'tiedemann-aleksander-bartosz', type: 'parentChild', from: 'aleksander', to: 'bartosz', familyId: 'tiedemann' },

  { id: 'global-mikkel-jonas', type: 'parentChild', from: 'mikkel', to: 'jonas' },
  { id: 'global-hannah-jonas', type: 'parentChild', from: 'hannah', to: 'jonas' },
  { id: 'global-ulrich-mikkel', type: 'parentChild', from: 'ulrich', to: 'mikkel' },
  { id: 'global-katharina-mikkel', type: 'parentChild', from: 'katharina', to: 'mikkel' },
  { id: 'global-ulrich-martha', type: 'parentChild', from: 'ulrich', to: 'martha' },
  { id: 'global-katharina-martha', type: 'parentChild', from: 'katharina', to: 'martha' },
  { id: 'global-peter-charlotte', type: 'couple', from: 'peter', to: 'charlotte' },
  { id: 'global-regina-aleksander', type: 'couple', from: 'regina', to: 'aleksander' },
  { id: 'global-regina-bartosz', type: 'parentChild', from: 'regina', to: 'bartosz' },
  { id: 'global-aleksander-bartosz', type: 'parentChild', from: 'aleksander', to: 'bartosz' },
  { id: 'global-jonas-desconocido', type: 'parentChild', from: 'jonas', to: 'desconocido' },
  { id: 'global-martha-desconocido', type: 'parentChild', from: 'martha', to: 'desconocido' },
];
