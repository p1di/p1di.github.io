// Provider Manager for Netflix App

const STORAGE_KEY = 'pd4k_custom_providers';

const DEFAULT_PROVIDERS = [
  {
    name: "Videasy (Default)",
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
    name: "PrimeSrc",
    movie: "https://primesrc.me/embed/movie?tmdb={id}",
    tv: "https://primesrc.me/embed/tv?tmdb={id}&season={season}&episode={episode}"
  },
  {
    name: "MultiEmbed",
    movie: "https://multiembed.mov/?video_id={id}&tmdb=1",
    tv: "https://multiembed.mov/?video_id={id}&tmdb=1&s={season}&e={episode}&server=2"
  },
  {
    name: "GoDrivePlayer",
    movie: "https://godriveplayer.com/player.php?type=movie&tmdb={id}",
    tv: "https://godriveplayer.com/player.php?type=series&tmdb={id}&season={season}&episode={episode}"
  },
  {
    name: "MoviesAPI Club",
    movie: "https://moviesapi.club/movie/{id}",
    tv: "https://moviesapi.club/tv/{id}-{season}-{episode}"
  },
  {
    name: "Filmku",
    movie: "https://filmku.stream/embed/movie/{id}",
    tv: "https://filmku.stream/embed/{id}/{season}/{episode}"
  },
  {
    name: "Vid.Techneo",
    movie: "https://vid.techneo.fun/tmdb/movie/{id}",
    tv: "https://vid.techneo.fun/tmdb/tv/{id}/{season}/{episode}"
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
    name: "VidSrc.vip",
    movie: "https://vidsrc.vip/embed/movie/{id}",
    tv: "https://vidsrc.vip/embed/tv/{id}/{season}/{episode}"
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
    name: "FrEmbed (French)",
    movie: "https://frembed.club/api/film.php?id={id}",
    tv: "https://frembed.club/api/serie.php?id={id}&sa={season}&epi={episode}"
  },
  {
    name: "Superflix (Portuguese)",
    movie: "https://superflixapi.digital/filme/{id}",
    tv: "https://superflixapi.digital/serie/{id}/{season}/{episode}"
  },
  {
    name: "2Embed",
    movie: "https://www.2embed.cc/embed/{id}",
    tv: "https://www.2embed.cc/embedtv/{id}&s={season}&e={episode}"
  },
  {
    name: "Vidora",
    movie: "https://vidora.su/movie/{id}&autoplay=true",
    tv: "https://vidora.su/tv/{id}/{season}/{episode}&autoplay=true"
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
  },
  {
    name: "PStream",
    movie: "https://iframe.pstream.mov/embed/tmdb-movie-{id}",
    tv: "https://iframe.pstream.mov/embed/tmdb-tv-{id}/{season}/{episode}"
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
    name: `⭐ ${name}`,
    movie: movieUrlPattern,
    tv: tvUrlPattern || movieUrlPattern
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
  return true;
}
