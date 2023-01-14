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

  //  console.log(kodemiamentores(dataArray));

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

    const mentorsArray = [
      {
        name: "Ivan Diaz",
        scores: [
          {
            signature: "HTML",
            score: 8
          },
          // {
          //   signature: "CSS",
          //   score: 10
          // },
          {
            signature: "JS",
            score: 8
          },
          {
            signature: "ReactJS",
            score: 8
          }
        ]
      },
      {
        name: "Alan Medina",
        scores: [
          {
            signature: "HTML",
            score: 8
          },
          {
            signature: "CSS",
            score: 7
          },
          {
            signature: "JS",
            score: 10
          },
          {
            signature: "ReactJS",
            score: 10
          }
        ]
      },
      {
        name: "Elvira Camarillo",
        scores: [
          {
            signature: "HTML",
            score: 9
          },
          {
            signature: "CSS",
            score: 9
          },
          {
            signature: "JS",
            score: 10
          },
          {
            signature: "ReactJS",
            score: 9
          }
        ]
      },
      {
        name: "Alejandra Paez",
        scores: [
          {
            signature: "HTML",
            score: 8
          },
          {
            signature: "CSS",
            score: 10
          },
          {
            signature: "JS",
            score: 9
          },
          {
            signature: "ReactJS",
            score: 10
          }
        ]
      },
      {
        name: "Alejandra Paez",
        scores: [
          {
            signature: "HTML",
            score: 10
          },
          {
            signature: "CSS",
            score: 10
          },
          {
            signature: "JS",
            score: 9
          },
          {
            signature: "ReactJS",
            score: 10
          }
        ]
      }
    ];
    // Tomando en cuenta la estructura de datos de mentorsArray debes crear un arreglo nuevo con el promedio de cada mentor 
    // output:
    // const newArray = [
    //   {
    //     name:'ivan',
    //     average: 9,
    //   },
    //   {
    //     name:'Alan',
    //     average: 9,
    //   },
    // ]

    const getAverageByMentor = (mentores) =>{
      // itera el array por mentor para poder sacar las propiedades que necesitamos
      const mentorList = mentores.map((item)=>{
        let average = 0;
      // itera el  elemento score que es otro array para poder sacar el promedio
        item.scores.forEach((resultado) => {
          average += resultado.score;
        });
      //creamos el objeto que vamos a regresar a el nuevo array mentorList 
        const mentorResult = {
          name: item.name,
          average: average / item.scores.length
        };
        return mentorResult;
      });
      return mentorList;
    };

    //  console.log(getAverageByMentor(mentorsArray));

    // usar el filter para regresar mentores que empiecen con la letra A
    const mentoresConA = mentorsArray.filter((item)=> item.name[0].toUpperCase() === "A" );

    //  console.log(mentoresConA);

    // obneter un array con las asignaturas por mentor 
    const getSignatureByMentor = (mentores) =>{
     const mentorList = mentores.map((item)=>{
       const signatures = [];
        item.scores.forEach(element => {
          signatures.push(element.signature)
        });
        const mentorSignatures = {
          name: item.name,
          signatures: signatures
        };
        return mentorSignatures
    });
      return mentorList
    };

    //  console.log(getSignatureByMentor(mentorsArray));

    const mentorSignatures = getSignatureByMentor(mentorsArray);
    
    //filtrar el array por materia para que te muestre que profesores la imparten
    function signature(array , text){
      const filterSignature = [];
      array.forEach(element => {
          element.signatures.filter((item)=>{
            if(item === text.toUpperCase()){
              filterSignature.push(element.name);
            }
          })
      });
      
      return filterSignature;
    }

    console.log(signature(mentorSignatures,'css'));