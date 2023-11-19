export function filterdata(searchText, restruants) {
  const filterdata = restruants.filter((restruant) =>
    restruant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
}
