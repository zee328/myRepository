//looping through objects (keys, vales)
const openingHours = {
    Monday: { open: 9, close: 17 },
    Tuesday: { open: 9, close: 17 },
    Wednesday: { open: 9, close: 17 },
    Thursday: { open: 9, close: 17 },
    Friday: { open: 9, close: 18 },
    Saturday: { open: 10, close: 16 },
    Sunday: { open: 0, close: 0 }
  };
  
  console.log(Object.keys(openingHours));  
const values=Object.values(openingHours)[2];
  console.log(values);  
  const entries=Object.entries(openingHours);
  for (const [key, {open,close}] of entries)  
    
    
    console.log(`on ${key} we open at ${open} and close at ${close}`);
