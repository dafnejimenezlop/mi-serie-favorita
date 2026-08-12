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
 * Se excluyen 6.jpg, 9.jpg y 24.jpg (llevan el logo de Netflix visible en
 * la esquina, lo que choca con el aviso de "sitio no afiliado" del footer).
 * `featured: true` marca los fotogramas con más peso narrativo para el
 * mosaico editorial (ver Galeria.astro), que les da más espacio en el grid.
 */
export const galleryImages: { src: string; alt: string; featured?: boolean }[] = [
  { src: '/galeria/1.jpg', alt: 'Jonas y Martha frente a la entrada de la cueva de Winden', featured: true },
  { src: '/galeria/2.jpg', alt: 'Jonas caminando de noche hacia la cueva, con su chubasquero amarillo' },
  { src: '/galeria/3.jpg', alt: 'Franziska, Magnus y Martha frente a las puertas del búnker' },
  { src: '/galeria/4.jpg', alt: 'Bartosz, Martha y Magnus observando con inquietud' },
  { src: '/galeria/5.jpg', alt: 'Un niño amordazado y conectado a una misteriosa máquina del tiempo', featured: true },
  { src: '/galeria/7.jpg', alt: 'Un viajero recorre las ruinas de Winden tras el apocalipsis' },
  { src: '/galeria/8.jpg', alt: 'Charlotte Doppler frente al tablón de investigación de los desaparecidos' },
  { src: '/galeria/10.jpg', alt: 'Vista aérea de la central nuclear de Winden en ruinas', featured: true },
  { src: '/galeria/11.jpg', alt: 'Un superviviente con máscara de gas en el búnker de 2052' },
  { src: '/galeria/12.jpg', alt: 'Franziska, Elisabeth y Yasin en el claro del bosque' },
  { src: '/galeria/13.jpg', alt: 'Mikkel examinando mapas y anotaciones sobre los viajes en el tiempo' },
  { src: '/galeria/14.jpg', alt: 'Egon Tiedemann interrogando a un joven Ulrich en 1953' },
  { src: '/galeria/15.jpg', alt: 'Una joven Claudia en la entrada de la cueva, en 1954', featured: true },
  { src: '/galeria/16.jpg', alt: 'Noah conectando hilos rojos en su tablón de pistas' },
  { src: '/galeria/17.jpg', alt: 'Regina y Aleksander Tiedemann en un momento de tensión' },
  { src: '/galeria/18.jpg', alt: 'Agnes y Doris Tiedemann observando con desconfianza en 1954' },
  { src: '/galeria/19.jpg', alt: 'Los cinco amigos de Winden reunidos de noche en el bosque' },
  { src: '/galeria/20.jpg', alt: 'H.G. Tannhaus escribiendo una fecha en la pared del búnker', featured: true },
  { src: '/galeria/21.jpg', alt: 'Egon y Helge Doppler en la sala común del sanatorio' },
  { src: '/galeria/22.jpg', alt: 'Adam y sus seguidores de Sic Mundus en la biblioteca de 1921' },
  { src: '/galeria/23.jpg', alt: 'Mikkel, disfrazado de esqueleto, desayunando junto a Ulrich' },
  { src: '/galeria/OIP.jpg', alt: 'Un joven Helge Doppler frente al muro cubierto de conejos del hospital' },
];
