function ninenine(dan: number) {
  for (let i = 1; i <= dan; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

ninenine(9);
