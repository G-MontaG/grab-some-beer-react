export default function joinLists(lists) {
  iterator(lists.foursquareSearchResults, lists.googleSearchResults);
  console.log(lists);
}

function nameCompare(item1, item2, parent, index) {
  if (item1.name === item2.name) {
    parent.equalityRank[index] = parent.equalityRank[index] + 0.5;
  }
}

function iterator(list1, list2) {
  const base = Object.assign({}, list1);
  list1.map((item1, index1) => {
    base[index1].equalityRank = {};
    return list2.map((item2, index2) => {
      !base[index1].equalityRank[index2] ? base[index1].equalityRank[index2] = 0 : null;
      return nameCompare(item1, item2, list1[index1], index2);
    });
  });
  return base;
}
