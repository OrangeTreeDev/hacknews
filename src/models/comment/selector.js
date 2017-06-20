
export function selectItemById(items, id) {

  if (items ){
    return items[id];
  }else {
    return null;
  }
}
