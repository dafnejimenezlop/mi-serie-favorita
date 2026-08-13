// src/data/bandaSonora.ts
// Contenido migrado desde la web anterior (SerieFavorita/videos.html y
// galeria.html): canciones de la banda sonora y una selección de fotogramas.

export type Song = {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  note?: string;
};

export const songs: Song[] = [
  { id: 'goodbye', title: 'Goodbye', artist: 'Apparat', youtubeId: '66VnOdk6oto', note: 'Tema de introducción de la serie' },
  { id: 'irgendwie', title: 'Irgendwie, Irgendwo, Irgendwann', artist: 'Nena', youtubeId: 'oMHLkcc9I9c' },
  { id: 'nightfall', title: 'Nightfall', artist: 'Mimi Page', youtubeId: '-sn8mF4hwpw' },
  { id: 'me-and-the-devil', title: 'Me and the Devil', artist: 'Soap&Skin', youtubeId: '89o-Ew27yUA' },
  { id: 'wonderful-world', title: 'What a Wonderful World', artist: 'Soap&Skin', youtubeId: '1Hgw445fffY' },
  { id: 'done-dying', title: 'When I Was Done Dying', artist: 'Dan Deacon', youtubeId: 'PZqUprA6bKE' },
  { id: 'cow-song', title: 'Cow Song', artist: 'Meredith Monk & Collin Walcott', youtubeId: 'SSaB8mIWee4' },
  { id: 'industry', title: 'Industry', artist: 'Mree', youtubeId: 'pxa99xmquKE' },
  { id: 'body-is-a-cage', title: 'My Body Is a Cage', artist: 'Peter Gabriel', youtubeId: 'Oo1ZLyrrMuY' },
  { id: 'melody-x', title: 'Melody X', artist: 'Bonaparte', youtubeId: 'MMwdP-U4qk4' },
  { id: 'happening-again', title: "It's Happening Again", artist: 'Agnes Obel', youtubeId: 'G11dbfiNv10' },
  { id: 'keep-streets-empty', title: 'Keep the Streets Empty for Me', artist: 'Fever Ray', youtubeId: 'jWFb5z3kUSQ' },
  { id: 'enter-one', title: 'Enter One', artist: 'Sol Seppy', youtubeId: 'fEw_pyK--D4' },
  { id: 'wishing-well', title: 'Wishing Well', artist: 'Stomper', youtubeId: 'QOAFr61SXpc' },
  { id: 'familiar', title: 'Familiar', artist: 'Agnes Obel', youtubeId: 'iMwdTDWXe_k' },
  { id: 'a-quiet-life', title: 'A Quiet Life', artist: 'Teho Teardo & Blixa Bargeld', youtubeId: 'wQ2JntChyEc' },
  { id: 'you-spin-me-round', title: 'You Spin Me Round (Like a Record)', artist: 'Dead or Alive', youtubeId: 'kIrLaccydww' },
  { id: 'shout', title: 'Shout', artist: 'Tears for Fears', youtubeId: 'Ye7FKc1JQe4' },
];

/**
 * Fotogramas y fotografías — assets ya presentes en public/galeria/.
 * Se excluyen 6.jpg, 8.jpg y 24.jpg (llevan el logo de Netflix visible en
 * la esquina, lo que choca con el aviso de "sitio no afiliado" del footer).
 * `featured: true` marca los fotogramas con más peso narrativo para el
 * mosaico editorial (ver Galeria.astro), que les da más espacio en el grid.
 *
 * Cada alt se verificó viendo el fotograma real (no de memoria): los
 * personajes solo se nombran cuando la identificación es prácticamente
 * segura (looks/vestuario icónicos de la serie); el resto usa descripción
 * neutra de la escena para no afirmar algo que no se puede confirmar.
 */
export const galleryImages: { src: string; alt: string; featured?: boolean }[] = [
  { src: '/galeria/1.jpg', alt: 'Dos jóvenes cara a cara frente a la boca de la cueva de Winden; ella lleva el icónico chubasquero amarillo', featured: true },
  { src: '/galeria/2.jpg', alt: 'Un adolescente pelirrojo, amordazado, conectado a un extraño artefacto por una figura encapuchada' },
  { src: '/galeria/3.jpg', alt: 'Jonas camina solo de noche por un sendero del bosque, junto a un cartel de "zona cerrada"', featured: true },
  { src: '/galeria/4.jpg', alt: 'Tres adolescentes en alerta frente a unas puertas, con gesto de tensión' },
  { src: '/galeria/5.jpg', alt: 'Tres jóvenes observando algo con inquietud entre la multitud' },
  { src: '/galeria/7.jpg', alt: 'Una figura con equipo de protección camina por una carretera junto a bloques de edificios en ruinas y humeantes' },
  { src: '/galeria/9.jpg', alt: 'Vista aérea de la central nuclear de Winden, arrasada dentro de un cráter calcinado', featured: true },
  { src: '/galeria/10.jpg', alt: 'Primer plano de un rostro tras la visera de un traje de protección, iluminado en tonos fríos' },
  { src: '/galeria/11.jpg', alt: 'Tres jóvenes en un claro al atardecer; una de ellas, con el ojo amoratado, sostiene a otra más pequeña' },
  { src: '/galeria/12.jpg', alt: 'Un joven arrodillado examina mapas y dibujos a mano con la luz de una linterna' },
  { src: '/galeria/13.jpg', alt: 'Dos hombres en el umbral de una puerta, observados por un policía de espaldas' },
  { src: '/galeria/14.jpg', alt: 'Una joven con capucha roja mira hacia atrás, recelosa, a la entrada de una cueva' },
  { src: '/galeria/15.jpg', alt: 'Ulrich conecta hilos rojos junto a un titular de periódico: "¿Dónde está Mikkel?"' },
  { src: '/galeria/16.jpg', alt: 'Mikkel, disfrazado de esqueleto, desayuna junto a Ulrich', featured: true },
  { src: '/galeria/17.jpg', alt: 'Una mujer abraza con fuerza a un hombre en una habitación con un póster de "The Great Houdini"' },
  { src: '/galeria/18.jpg', alt: 'Dos mujeres con vestidos de época, de pie una junto a la otra en una sala elegante' },
  { src: '/galeria/19.jpg', alt: 'Los cinco amigos de Winden, empapados, reunidos de noche en una carretera del bosque', featured: true },
  { src: '/galeria/20.jpg', alt: 'Un tablón de investigación cubierto de fotos y notas, con "¿Aleksander Köhler?" escrito arriba' },
  { src: '/galeria/21.jpg', alt: 'Dos jóvenes rodeados de pósters de bandas, uno con chubasquero amarillo y otro con jersey estampado' },
  { src: '/galeria/22.jpg', alt: 'Un hombre, de espaldas y sin camisa, graba una fecha en una pared de hormigón' },
  { src: '/galeria/23.jpg', alt: 'Dos hombres mayores conversan en una sala común iluminada por el sol' },
  { src: '/galeria/OIP.jpg', alt: 'Un niño señala una mano tendida a través de un muro cubierto de papel con estampado de conejos' },
];
