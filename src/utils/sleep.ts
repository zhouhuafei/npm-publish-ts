sleep.timer = null

function sleep (ms: number) {
  return new Promise(resolve => {
    sleep.timer = setTimeout(resolve, ms)
  })
}

export { sleep }
