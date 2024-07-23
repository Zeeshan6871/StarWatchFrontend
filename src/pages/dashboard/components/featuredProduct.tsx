import { CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function FeaturedProduct() {
  return (
    <div className='flex flex-col items-center p-4'>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='flex justify-center '>
              <img
                src='images/watch.png'
                alt='Product'
                className='mb-4 h-auto w-full'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 ' />
        <CarouselNext className='absolute right-4 ' />
      </Carousel>
      <CardHeader className='mb-1 p-0 text-sm font-semibold sm:text-lg'>
        Apple Watch Series 4
      </CardHeader>
      <p className='mb-1 text-lg text-blue-500'>$120.00</p>
    </div>
  )
}
