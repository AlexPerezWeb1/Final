
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "DUREX",
          bio: "El condon que te proporciona mucha durabilidad y con toda la proteccion asegurada DUREX el mejor condon que podrias usar",
          img: "assets/img/durex.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "GOLD",
          bio: "Gold el condon que te garantiza la mejor experiencia sexual mediante el deporte que mas te gusta no puedes quedarte con las ganas",
          img: "assets/img/gold.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "KAMASUTRA",
          bio: "Que mejor que confiarle tu futuro a los mejores condones que te apuestan a disfrutar un sexo seguro y libre de contagios que no quisieras tener",
          img: "assets/img/kamasutra.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "MASCULAN",
          bio: "Ademas de que incluye un retardante poderoso no podrias encontra un mejor preservative quien te da la confiabilidad durante toda la noche",
          img: "assets/img/masculan.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "MAXMEN",
          bio: "Maxmen quiere cuidarte como si fueras tu mismo hasta en los momentos de calentura que no piensas en nada mas que en tu placer sexual no puedes obtener mayor seguridad si no es con maxmen",
          img: "assets/img/maxmen.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "PANTERA",
          bio: "Pantera es una de las mas reconocidos preservativos evaluado mundualmente te proteje un 99% sin dudar usa pantera y planifica cuando expandirte y no te arriesgues con algo barato recuerda lo barato cuesta caro",
          img: "assets/img/pantera.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "TULIPAN",
          bio: "Encuentra nuestro condones y la variedad de ellos en las distintas farmacias autorizadas no juegues con algo tan importante como tu futuro planifica y avita contagios sexuales no dejes que te engañen y no tengas miedo de usar condon",
          img: "assets/img/tulipan.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    
    
    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};