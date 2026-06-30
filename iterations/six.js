  const myNums = [1,2,3,4,5,6,7,8,9]

  const newNums = myNums.filter( (nums) => {
    return nums > 4
  })

  const newNumss =[]

  myNums.forEach((nums) => {
    if(nums>4) {
        newNumss.push(nums)
    }
  })

  console.log(newNums)
  console.log(newNumss)