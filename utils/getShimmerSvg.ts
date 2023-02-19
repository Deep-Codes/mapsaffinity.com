const getShimmerSvg = (width: number, height: number): string =>
  `<svg
  width='${width}'
  height='${height}'
  version='1.1'
  xmlns='http://www.w3.org/2000/svg'
  xmlnsXlink='http://www.w3.org/1999/xlink'
>
  <defs>
    <linearGradient id='g'>
      <stop stop-color='var(--gray2)' offset='10%' />
      <stop stop-color='var(--gray3)' offset='50%' />
      <stop stop-color='var(--gray2)' offset='90%' />
    </linearGradient>
  </defs>
  <rect width='${width}' height='${height}' fill='var(--gray2)' />
  <rect id='r' width='${width}' height='${height}' fill='url(#g)' />
  <animate
    xlinkHref='#r'
    attributeName='x'
    from='-100%'
    to='100%'
    dur='1s'
    repeatCount='indefinite'
  />
</svg>`;

export default getShimmerSvg;
