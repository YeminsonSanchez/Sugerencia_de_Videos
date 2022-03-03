const url_Id = (() => {
  const private_url_Id = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };
  return {
    public_url_Id: (url, id) => {
      private_url_Id(url, id);
    },
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }
  setInicio = () => {
    return console.log(
      `Este método es para realizar un cambio en la URL del video`
    );
  };
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia = (url, id) => {
    url_Id.public_url_Id(url, id);
  };
  setInicio = (time) => {
    let start = document.getElementById(this.id);
    return start.setAttribute("src", `${this.getUrl()}?start=${time}`);
  };
}

let movie = new Reproductor(
  "https://www.youtube.com/embed/5yCRhFLwUjg",
  "peliculas"
);
let music = new Reproductor(
  "https://www.youtube.com/embed/QTFHQ2LWbG8",
  "musica"
);
let series = new Reproductor(
  "https://www.youtube.com/embed/Fky9_0KrQMU",
  "series"
);
movie.playMultimedia(movie.getUrl(), movie.id);
music.playMultimedia(music.getUrl(), music.id);
series.playMultimedia(series.getUrl(), series.id);

music.setInicio(92);
