const minEqualityRating = 0.49;

function nameCompare(item1, item2) {
  const item1Name = item1.name.toLowerCase();
  const item2Name = item2.name.toLowerCase();
  if (item1Name === item2Name) {
    return 0.5;
  } else if (item1Name.includes(item2Name) || item2Name.includes(item1Name)) {
    return 0.25;
  }
  return 0;
}

function phoneCompare(item1, item2) {
  if (!item1.contact.phone || !item2.contact.phone) {
    return 0;
  }
  const item1Phone = item1.contact.phone.split(',')[0].replace('+38', '').replace('(', '').replace(')', '');
  const item2Phone = item2.contact.phone.split(',')[0].replace('+38', '').replace('(', '').replace(')', '');
  if (item1Phone === item2Phone) {
    return 0.25;
  } else if (item1Phone.includes(item2Phone) || item2Phone.includes(item1Phone)) {
    return 0.25;
  }
  return 0;
}

function isNear(item1, item2) {
  const itemsDiff = Math.abs(item1 - item2);
  return itemsDiff <= 0.5;
}

function locationCompare(item1, item2) {
  const item1Lat = item1.location.lat;
  const item2Lat = item2.location.lat;
  const item1Lng = item1.location.lng;
  const item2Lng = item2.location.lng;
  if (item1Lat === item2Lat) {
    if (item1Lng === item2Lng) {
      return 0.5;
    } else if (isNear(item1Lng, item2Lng)) {
      return 0.25;
    }
    return 0;
  } else if ((item1Lng === item2Lng)) {
    if (item1Lat === item2Lat) {
      return 0.5;
    } else if (isNear(item1Lat, item2Lat)) {
      return 0.25;
    }
    return 0;
  } else if (isNear(item1Lat, item2Lat) && isNear(item1Lng, item2Lng)) {
    return 0.25;
  } else if (isNear(item1Lat, item2Lat) || isNear(item1Lng, item2Lng)) {
    return 0.15;
  }
  return 0;
}

function getEqualityRating(item1, item2) {
  let equalityRating = 0;
  equalityRating += nameCompare(item1, item2);
  equalityRating += phoneCompare(item1, item2);
  equalityRating += locationCompare(item1, item2);
  return equalityRating;
}

function mixArrays(array1, array2) {
  const newArray = [];
  const largeArray = array1.length > array2.length ? array1 : array2;
  const smallArray = array1.length > array2.length ? array2 : array1;

  largeArray.map((lgItem, index) => {
    newArray.push(lgItem);
    if (smallArray[index]) {
      newArray.push(smallArray[index]);
    }
    return undefined;
  });

  return newArray;
}

export default function joinLists(lists) {
  let resultOfJoin = [];

  let copyGoogleSearchResults = [...lists.googleSearchResults];
  let copyFacebookSearchResults = [...lists.facebookSearchResults];

  lists.foursquareSearchResults.map((foursquareItem) => {
    const foundItemIndex = copyGoogleSearchResults.findIndex(googleItem => getEqualityRating(foursquareItem, googleItem) > minEqualityRating);
    if (foundItemIndex > -1 && copyGoogleSearchResults[foundItemIndex]) {
      resultOfJoin.push([foursquareItem, copyGoogleSearchResults[foundItemIndex]]);
      copyGoogleSearchResults = [...copyGoogleSearchResults.slice(0, foundItemIndex), ...copyGoogleSearchResults.slice(foundItemIndex + 1)];
      return undefined;
    }
    resultOfJoin.push(foursquareItem);
    return undefined;
  });
  resultOfJoin = mixArrays(resultOfJoin, copyGoogleSearchResults);

  resultOfJoin.map((resultsItem, resultsItemIndex) => {
    let foundItemIndex = null;
    if (Array.isArray(resultsItem)) {
      const foundItemIndex1 = copyFacebookSearchResults.findIndex(facebookItem => getEqualityRating(resultsItem[0], facebookItem) > minEqualityRating);
      const foundItemIndex2 = copyFacebookSearchResults.findIndex(facebookItem => getEqualityRating(resultsItem[1], facebookItem) > minEqualityRating);
      foundItemIndex = foundItemIndex1 > -1 ? foundItemIndex1 : foundItemIndex2;
    } else {
      foundItemIndex = copyFacebookSearchResults.findIndex(facebookItem => getEqualityRating(resultsItem, facebookItem) > minEqualityRating);
    }
    if (foundItemIndex > -1 && copyFacebookSearchResults[foundItemIndex]) {
      resultOfJoin[resultsItemIndex] = [...Array.isArray(resultsItem) ? resultOfJoin[resultsItemIndex] : [resultOfJoin[resultsItemIndex]], copyFacebookSearchResults[foundItemIndex]];
      copyFacebookSearchResults = [...copyFacebookSearchResults.slice(0, foundItemIndex), ...copyFacebookSearchResults.slice(foundItemIndex + 1)];
      return undefined;
    }
    return undefined;
  });
  return [...resultOfJoin, ...copyFacebookSearchResults];
}
