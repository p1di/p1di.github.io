// Provider Manager for Netflix App

const STORAGE_KEY = 'pd4k_custom_providers';

const DEFAULT_PROVIDERS = [
  {
    name: "PrimeSrc (Default)",
    movie: "https://primesrc.me/embed/movie?tmdb={id}",
    tv: "https://primesrc.me/embed/tv?tmdb={id}&season={season}&episode={episode}"
  },
  {
    name: "Videasy",
    movie: "https://player.videasy.net/movie/{id}?overlay=true&color=E50914",
    tv: "https://player.videasy.net/tv/{id}/{season}/{episode}?overlay=true&episodeSelector=true&autoplayNextEpisode=true&color=E50914"
  },
  {
    name: "VidKing (Own)",
    movie: "https://www.vidking.net/embed/movie/{id}",
    tv: "https://www.vidking.net/embed/tv/{id}/{season}/{episode}"
  },
  {
    name: "VidSrc.me",
    movie: "https://vidsrc.me/embed/movie/{id}",
    tv: "https://vidsrc.me/embed/tv/{id}/{season}/{episode}"
  },
  {
    name: "VidLink",
    movie: "https://vidlink.pro/movie/{id}?ads=0",
    tv: "https://vidlink.pro/tv/{id}/{season}/{episode}?ads=0"
  },
  {
    name: "SmashyStream",
    movie: "https://embed.smashystream.com/playere.php?tmdb={id}",
    tv: "https://embed.smashystream.com/playere.php?tmdb={id}&season={season}&episode={episode}&btPosition=10"
  },
  {
    name: "123Embed",
    movie: "https://play2.123embed.net/movie/{id}",
    tv: "https://play2.123embed.net/tv/{id}/{season}/{episode}"
  },
  {
    name: "111Movies",
    movie: "https://111movies.com/movie/{id}?autoplay=1",
    tv: "https://111movies.com/tv/{id}/{season}/{episode}?autoplay=1"
  },
  {
    name: "Vidzee",
    movie: "https://player.vidzee.wtf/embed/movie/{id}",
    tv: "https://player.vidzee.wtf/embed/tv/{id}/{season}/{episode}"
  },
  {
    name: "RGShows",
    movie: "https://rgshows.ru/player/movie/api4/index.html?id={id}",
    tv: "https://rgshows.ru/player/series/api4/index.html?id={id}&s={season}&e={episode}"
  },
  {
    name: "2Embed",
    movie: "https://www.2embed.cc/embed/{id}",
    tv: "https://www.2embed.cc/embedtv/{id}&s={season}&e={episode}"
  },
  {
    name: "VidFast",
    movie: "https://vidfast.pro/movie/{id}",
    tv: "https://vidfast.pro/tv/{id}/{season}/{episode}"
  },
  {
    name: "VidSrc.su",
    movie: "https://vidsrc.su/embed/movie/{id}",
    tv: "https://vidsrc.su/embed/tv/{id}/{season}/{episode}"
  }
];

const SITE_PROVIDERS = {
  "moviesdrive": "https://new6.moviesdrives.my",
  "HDHUB4u": "https://new3.hdhub4u.cl",
  "4khdhub": "https://4khdhub.one",
  "MultiMovies": "https://multimovies.makeup",
  "bollyflix": "https://bollyflix.at",
  "UHDMovies": "https://uhdmovies.casa",
  "moviesmod": "https://moviesmod.army",
  "topMovies": "https://moviesleech.bar",
  "hdmovie2": "https://hdmo2.com",
  "vegamovies": "https://vegamovies.navy",
  "rogmovies": "https://rogmovies.rest",
  "luxmovies": "https://luxmovies1.shop",
  "movierulzhd": "https://123moviesfree9.cv",
  "extramovies": "https://extramovies.miami",
  "banglaplex": "https://banglaplex.lat",
  "toonstream": "https://toon-stream.site",
  "telugumv": "https://telugumv.net",
  "filmycab": "https://filmycab.co",
  "tellyhd": "https://tellyhd.im",
  "filmyfiy": "https://filmyfly.soy",
  "hindmoviez": "https://hindmovie.icu",
  "tamilblasters": "https://www.1tamilblasters.pro",
  "hubcloud": "https://hubcloud.cx",
  "movienestbd": "https://movienestbd.pics",
  "movies4u": "https://new1.movies4u.clinic",
  "cinevood": "https://cinevoodc.com",
  "dudefilms": "https://dudefilms.living",
  "fibwatch": "https://fibwatch.art",
  "fibtoon": "https://fibtoon.top",
  "fibdrama": "https://fibdrama.top",
  "xprimehub": "https://xprimehub.bond",
  "m4ufree": "https://ww4.m4ufree.lat",
  "pencurimoviesubmalay": "https://pencurimoviesubmalay26.site/movies/100-degree-celsius-part-1/",
  "zinkmovies": "https://new3.zinkmovies.today",
  "cinefreak": "https://cinefreak.nl"
};

function getCustomProviders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getAllProviders() {
  const custom = getCustomProviders();
  return [...DEFAULT_PROVIDERS, ...custom];
}

function addCustomProvider(name, movieUrlPattern, tvUrlPattern) {
  if (!name || !movieUrlPattern) return false;
  const custom = getCustomProviders();
  custom.push({
    name: `[Custom] ${name}`,
    movie: movieUrlPattern,
    tv: tvUrlPattern || movieUrlPattern
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
  return true;
}
