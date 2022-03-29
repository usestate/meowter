export const sleep = <Data>(delay: number, data: Data): Promise<Data> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
