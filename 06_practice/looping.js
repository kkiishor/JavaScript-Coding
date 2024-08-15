const items = [
    {
      name: "The Great Gatsby",
      genre: "Novel",
      published: 1925
    },
    {
      name: "Star Wars: A New Hope",
      genre: "Science Fiction",
      published: 1977
    },
    {
      name: "Mona Lisa",
      genre: "Portrait",
      published: 1503
    },
    {
      name: "The Dark Knight",
      genre: "Action",
      published: 2008
    },
    {
      name: "Bohemian Rhapsody",
      genre: "Rock Music",
      published: 1975
    }
  ];
  

//   console.log(items);

const arr = items.filter((item) => item.published >= 2000)

console.log(arr)
  
