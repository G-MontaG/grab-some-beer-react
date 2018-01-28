function nameCompare(item1, item2) {
  if (item1.name === item2.name) {
    return 0.5;
  }
  return 0;
}

function getEqualityRating(item1, item2) {
  let equalityRating = 0;
  equalityRating += nameCompare(item1, item2);
  return equalityRating;
}

export default function joinLists(lists) {
  let resultOfJoin = [];
  const copyGoogleSearchResults = [].concat(lists.googleSearchResults);
  lists.foursquareSearchResults.map((foursquareItem) => {
    const founditem = copyGoogleSearchResults.find((googleItem) => {
      return getEqualityRating(foursquareItem, googleItem) > 0.5;
    });
    console.log(founditem);
    if (founditem) {
      resultOfJoin.push([foursquareItem, founditem]);
      // delete founditem from copyGoogleSearchResults
      return null;
    }
    resultOfJoin.push(foursquareItem);
    return null;
  });
  resultOfJoin = [].concat(resultOfJoin, copyGoogleSearchResults);

  return resultOfJoin;
}
