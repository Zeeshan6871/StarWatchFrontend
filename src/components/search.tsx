import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <div className='relative w-full'>
      <svg
        className='absolute left-3 top-1/2 -translate-y-1/2 transform'
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g opacity='0.5'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.69366 12.5352C12.4235 11.375 13.696 8.22157 12.5358 5.49174C11.3757 2.7619 8.22221 1.48942 5.49237 2.64957C2.76253 3.80972 1.49005 6.96318 2.6502 9.69302C3.81036 12.4229 6.96382 13.6953 9.69366 12.5352Z'
            stroke='hsl(var(--muted-foreground))'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.3904 11.3896L15.5557 15.5555'
            stroke='hsl(var(--muted-foreground))'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </svg>
      <Input
        type='search'
        placeholder='Search'
        className='rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none'
      />
    </div>
  )
}
