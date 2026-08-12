export type Song = {
  id: string;
  title: string; // Bengali
  titleRoman: string; // Romanized, used as "artist" line style subtitle
  src: string; // /public/audio/<id>.mp3 — drop your files in with matching names
  cover: string;
  duration: number; // seconds, placeholder until real files are wired in
};

export const songs: Song[] = [
  { id: "bajlo-tomar-alor-benu", title: "বাজলো তোমার আলোর বেণু", titleRoman: "Bajlo Tomar Alor Benu", src: "/audio/bajlo-tomar-alor-benu.mp3", cover: "/covers/default.svg", duration: 245 },
  { id: "jaago-durga", title: "জাগো দুর্গা", titleRoman: "Jaago Durga", src: "/audio/jaago-durga.mp3", cover: "/covers/default.svg", duration: 232 },
  { id: "aaj-agomoni-abahane", title: "আজ আগমনী আবাহনে", titleRoman: "Aaj Agomoni Abahane", src: "/audio/aaj-agomoni-abahane.mp3", cover: "/covers/default.svg", duration: 258 },
  { id: "esho-maa-durga", title: "এসো মা দুর্গা", titleRoman: "Esho Maa Durga", src: "/audio/esho-maa-durga.mp3", cover: "/covers/default.svg", duration: 221 },
  { id: "dhire-dhire-elo-ma", title: "ধীরে ধীরে এলো মা", titleRoman: "Dhire Dhire Elo Ma", src: "/audio/dhire-dhire-elo-ma.mp3", cover: "/covers/default.svg", duration: 267 },
  { id: "ogo-amar-agomoni", title: "ওগো আমার আগমনী", titleRoman: "Ogo Amar Agomoni", src: "/audio/ogo-amar-agomoni.mp3", cover: "/covers/default.svg", duration: 213 },
  { id: "maa-asche", title: "মা আসছে", titleRoman: "Maa Asche", src: "/audio/maa-asche.mp3", cover: "/covers/default.svg", duration: 198 },
  { id: "ayi-giri-nandini", title: "অয়ি গিরি নন্দিনী", titleRoman: "Ayi Giri Nandini (Mahishasura Mardini)", src: "/audio/ayi-giri-nandini.mp3", cover: "/covers/default.svg", duration: 312 },
  { id: "ya-devi-sarva-bhuteshu", title: "যা দেবী সর্বভূতেষু", titleRoman: "Ya Devi Sarva Bhuteshu", src: "/audio/ya-devi-sarva-bhuteshu.mp3", cover: "/covers/default.svg", duration: 187 },
  { id: "jago-tumi-jago", title: "জাগো তুমি জাগো", titleRoman: "Jago Tumi Jago", src: "/audio/jago-tumi-jago.mp3", cover: "/covers/default.svg", duration: 226 },
  { id: "anandaloke-mangalaloke", title: "আনন্দলোকে মঙ্গলালোকে", titleRoman: "Anandaloke Mangalaloke", src: "/audio/anandaloke-mangalaloke.mp3", cover: "/covers/default.svg", duration: 204 },
  { id: "durge-durgati-nashini", title: "দুর্গে দুর্গতিনাশিনী", titleRoman: "Durge Durgati Nashini", src: "/audio/durge-durgati-nashini.mp3", cover: "/covers/default.svg", duration: 239 },
  { id: "maa-go-tumi-sarbojonin", title: "মা গো তুমি সর্বজনীন", titleRoman: "Maa Go Tumi Sarbojonin", src: "/audio/maa-go-tumi-sarbojonin.mp3", cover: "/covers/default.svg", duration: 251 },
  { id: "abar-elo-je-sharat", title: "আবার এলো যে শরৎ", titleRoman: "Abar Elo Je Sharat", src: "/audio/abar-elo-je-sharat.mp3", cover: "/covers/default.svg", duration: 217 },
  { id: "sharod-prate-amar-raat-pohalo", title: "শারদ প্রাতে আমার রাত পোহালো", titleRoman: "Sharod Prate Amar Raat Pohalo", src: "/audio/sharod-prate-amar-raat-pohalo.mp3", cover: "/covers/default.svg", duration: 263 },
  { id: "esho-esho-amar-ghore-maa", title: "এসো এসো আমার ঘরে মা", titleRoman: "Esho Esho Amar Ghore Maa", src: "/audio/esho-esho-amar-ghore-maa.mp3", cover: "/covers/default.svg", duration: 195 },
  { id: "maa-tumi-ele", title: "মা তুমি এলে", titleRoman: "Maa Tumi Ele", src: "/audio/maa-tumi-ele.mp3", cover: "/covers/default.svg", duration: 208 },
  { id: "bolo-durga-mai-ki-joy", title: "বলো দুর্গা মাই কি জয়", titleRoman: "Bolo Durga Mai Ki Joy", src: "/audio/bolo-durga-mai-ki-joy.mp3", cover: "/covers/default.svg", duration: 229 },
  { id: "shono-shono-agomonir-bani", title: "শোনো শোনো আগমনীর বাণী", titleRoman: "Shono Shono Agomonir Bani", src: "/audio/shono-shono-agomonir-bani.mp3", cover: "/covers/default.svg", duration: 241 },
  { id: "agomoni-gaan-traditional", title: "আগমনী গান – লোকধারা", titleRoman: "Agomoni Gaan (Traditional Bengali Folk)", src: "/audio/agomoni-gaan-traditional.mp3", cover: "/covers/default.svg", duration: 276 },
];
