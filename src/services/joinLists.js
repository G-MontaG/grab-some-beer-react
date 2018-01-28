const minEqualityRating = 0;

function nameCompare(item1, item2) {
  const longerStr = item1.name.length >= item2.name.length ? item1.name : item2.name;
  const shorterStr = item1.name.length >= item2.name.length ? item2.name : item1.name;
  longerStr.toLowerCase();
  shorterStr.toLowerCase();
  if (longerStr === shorterStr) {
    return 0.5;
  } else if (longerStr.includes(shorterStr)) {
    return 0.25;
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
  // copy google list because we will remove elements in compare process
  // and we need to save original list
  const copyGoogleSearchResults = [].concat(lists.googleSearchResults);
  lists.foursquareSearchResults.push({ name: 'Fake' });
  copyGoogleSearchResults.push({ name: 'The Fake' });
  lists.foursquareSearchResults.map((foursquareItem) => {
    const foundItemIndex = copyGoogleSearchResults.findIndex((googleItem) => {
      return getEqualityRating(foursquareItem, googleItem) > minEqualityRating;
    });
    console.log('copyGoogleSearchResults', copyGoogleSearchResults);
    console.log('founditem', copyGoogleSearchResults[foundItemIndex]);
    if (copyGoogleSearchResults[foundItemIndex]) {
      resultOfJoin.push([foursquareItem, copyGoogleSearchResults[foundItemIndex]]);
      copyGoogleSearchResults.splice(foundItemIndex, 1);
      console.log('copyGoogleSearchResults', copyGoogleSearchResults);
      return null;
    }
    resultOfJoin.push(foursquareItem);
    return null;
  });
  resultOfJoin = [].concat(resultOfJoin, copyGoogleSearchResults);
  console.log('resultOfJoin', resultOfJoin);
  return resultOfJoin;
}
