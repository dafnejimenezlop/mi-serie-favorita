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

/** Fotogramas y fotografías — assets ya presentes en public/galeria/. */
export const galleryImages: { src: string; alt: string }[] = Array.from(
  { length: 16 },
  (_, i) => ({
    src: `/galeria/${i + 1}.jpg`,
    alt: `Fotograma de DARK ${i + 1}`,
  }),
);
