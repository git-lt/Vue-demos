export const cinemaGroupObj = state => {
  let districtName, districtGroup = {}, items = state.cinemas

  for(let i in items){
    districtName = items[i]['district']['name']

    if(districtGroup[districtName] && Array.isArray(districtGroup[districtName])){
       districtGroup[districtName].push(items[i])
    }else{
      districtGroup[districtName] = [items[i]]
    }
  }

  return districtGroup || {}
}
