

const SHEET_CSV_BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA48OeTJXWm8Aow4ArLDH-6QoliYOFuI1jCA0_67FywMDh8q-D5InKkvlR8Nw8VXZpdwvsxunkeS4p/pub?output=csv"
const GID_CONTACT_US = "0"
const GID_SUPPORT_US = "657081804"
const GID_NEWS = "562365707"
const GID_EVENT = "575383444"
const GID_GALLARY = "1675686659"

export const fetchEvents = async () => {
    const SHEET_CSV_URL = `${SHEET_CSV_BASE_URL}&gid=${GID_EVENT}`
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1); // Header hata diya    
    return rows.map(row => {
      const columns = row.split(",");

      return {
        id: columns[0],
        name: columns[1].replaceAll(/comma/g, ','),
        date:columns[2].replaceAll(/comma/g, ','),
        time: columns[3].replaceAll(/comma/g, ','),
        venue:columns[4].replaceAll(/comma/g, ','),
        description: columns[5].replaceAll(/comma/g, ','),
        organizer: columns[6].replaceAll(/comma/g, ','),
        image: columns[7],
        chiefGuest:columns[8].replaceAll(/comma/g, ',')
      };
    });
  };

  // https://docs.google.com/spreadsheets/d/e/2PACX-1vQA48OeTJXWm8Aow4ArLDH-6QoliYOFuI1jCA0_67FywMDh8q-D5InKkvlR8Nw8VXZpdwvsxunkeS4p/pub?output=csv

  export const fetchNews = async () => {
    const SHEET_CSV_URL = `${SHEET_CSV_BASE_URL}&gid=${GID_NEWS}`
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1); // Header hata diya  
    return rows.map(row => {
      const columns = row.split(","); 
      return {
        id: columns[0],
        title: columns[1].replaceAll(/comma/g, ','),
        description: columns[2].replaceAll(/comma/g, ','),
        imageUrl: columns[3],
      };
    });
  };

  export const fetchGallary = async () => {
    const SHEET_CSV_URL = `${SHEET_CSV_BASE_URL}&gid=${GID_GALLARY}`
    const timestamp = new Date().getTime(); // Random value har request ke liye
    const response = await fetch(`${SHEET_CSV_URL}&t=${timestamp}`);
    const text = await response.text();
   // CSV ko JSON me convert karna
    const rows = text.split("\n").slice(1);  
    return rows.map(row => {
      const columns = row.split(",");  
      return {
        imageName: columns[0],
        imageUrl: columns[1]
           };
    });
  };