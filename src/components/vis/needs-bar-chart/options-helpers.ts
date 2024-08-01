export const getQuarterOption = (date: Date): string => {
    const year = date.getFullYear()
    const quarter = 'Q' + Math.floor((date.getMonth() + 3) / 3)
  
    console.log(date.getFullYear())
    console.log(date.getMonth())
    console.log(date.getMonth() + 3)
    console.log((date.getMonth() + 3) / 3)
    console.log(Math.floor((date.getMonth() + 3) / 3))
    console.log(Math.floor((date.getMonth() + 3) / 3))
  
    return `${year} ${quarter}`
  }
  