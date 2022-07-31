// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req, res) => {
  res.statusCode = 200
  res.json({ EasterEgg: 'You have found my easter egg! Send me a message to fetch your price.' })
}
