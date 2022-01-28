const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== " ") {
    records[id][prop] = value;
    console.log(records[id]);
  } else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
    let addTracsVal = [];
    addTracsVal.push(value);
    records[id][prop] = addTracsVal;
  } else if (prop == "tracks" && value !== " ") {
    records[id][prop].push(value);
    console.log(records[id]);
  } else if (value == " ") {
    delete records[id][prop];
  }

  return records;
}

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(updateRecords(recordCollection, 5439, "tracks", "ABBA"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "First love"));
console.log(updateRecords(recordCollection, 2468, "tracks", " "));
