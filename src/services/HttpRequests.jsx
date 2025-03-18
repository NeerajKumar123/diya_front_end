
export const fetchEvents = async () => {
    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfKK_yE0EXwLW15V9lGcCEqCAqxbTKJu7J8raeaeF6RkAg1KZ7oZICmfoD8THJ7apm6FabpWdLvwW1/pub?gid=575383444&output=csv"; // Replace {SHEET_ID} with actual ID
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1); // Header hata diya    
    return rows.map(row => {
      const columns = row.split(",");
      let date = `${columns[2]},${columns[3]}`.replace(/"/g,"")
      let venue = `${columns[5]}}`.replace(/"/g,"")
      let chiefGuest = `${columns[10]},${columns[11]},${columns[12]}`.replace(/"/g,"")

      return {
        id: columns[0],
        name: columns[1],
        date,
        time: columns[4],
        venue,
        description: columns[7],
        organizer: columns[8],
        image: columns[9],
        chiefGuest
      };
    });
  };

  export const fetchNews = async () => {
    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfKK_yE0EXwLW15V9lGcCEqCAqxbTKJu7J8raeaeF6RkAg1KZ7oZICmfoD8THJ7apm6FabpWdLvwW1/pub?gid=562365707&output=csv"; // Replace {SHEET_ID} with actual ID
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1); // Header hata diya    
    return rows.map(row => {
      const columns = row.split(",");      
      return {
        id: columns[0],
        title: columns[1],
        description: columns[2],
        imageUrl: columns[3],
        publishedDate: columns[4]
      };
    });
  };

  export const fetchGallary = async () => {
    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfKK_yE0EXwLW15V9lGcCEqCAqxbTKJu7J8raeaeF6RkAg1KZ7oZICmfoD8THJ7apm6FabpWdLvwW1/pub?gid=1675686659&output=csv"; // Replace {SHEET_ID} with actual ID
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1); // Header hata diya    
    return rows.map(row => {
      const columns = row.split(",");      
      return {
        imageName: columns[0],
        imageUrl: columns[1]
           };
    });
  };