let dataArray = [
    ['Elda ', 'Corona'],
    ['Manuel', 'Mendoza'],
    ['Rafael', 'Quintero'],
    ['Elvira', 'Camarillo'],
    ['Ivan', 'Diaz'],
    ['Alan', 'Medina']
  ];
  
  // const output = [
  //   {
  //     name: 'Elda',
  //     apellido: 'Corona'
  //   },
  //   {
  //     name: 'Manuel',
  //     apellido: 'Mendoza'
  //   },
  //   {
  //     name: 'Rafael',
  //     apellido: 'Quintero'
  //   }
  // ];

  function mentor(persona){
    this.name = persona[0],
    this.apellido = persona[1]
  }

  const kodemiamentores =(array)=>{
    const newArray = [];
    array.forEach(element => {
        const persona = new mentor(element);
        newArray.push(persona)
    });
    return newArray;
  }

  console.log(kodemiamentores(dataArray));

    // Ejercicio de arreglo de canciones

    let songsData = [
        {
          name: "Kashmir",
          band: "Led Zeppelin",
          releaseYear: "1980",
          statistics: {
            likes: 20000,
            reproductions: 8000,
          }
        },
        {
          name: "Smells Like Teen Spirit",
          band: "Nirvana",
          releaseYear: "1989",
          statistics: {
            likes: 25000,
            reproductions: 100000,
          }
        }, {
          name: "So What",
          band: "Metallica",
          releaseYear: "1990",
          statistics: {
            likes: 12000,
            reproductions: 95000,
          }
        }, {
          name: "Nothing Else Matters",
          band: "Metallica",
          releaseYear: "1992",
          statistics: {
            likes: 128000,
            reproductions: 915000,
          }
        }, {
          name: "Daze",
          band: "Poets_of_the_Fall",
          releaseYear: "2014",
          statistics: {
            likes: 3548413,
            reproductions: 87095138,
          }
        }, {
          name: "The Sweet Scape",
          band: "Poets_of_the_fall",
          releaseYear: "2018",
          statistics: {
            likes: 26268856,
            reproductions: 2424568,
          }
        }
      ];

    //   Agrupar las canciones por nombres de la bandas, que no esten repetidas
      function banda(nombreBanda){
        this.name = nombreBanda.band;
      }
    const arrayPorBandas = (array) =>{
        
    }