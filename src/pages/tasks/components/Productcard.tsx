import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Button } from '@/components/custom/button'
import { Card, CardHeader } from '@/components/ui/card'

export function ProductCarousal() {
  return (
    <Card className='mb-4 mt-4 flex flex-col p-4'>
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
      <div className='mb-1 flex items-center'>
        <span className='text-yellow-500'>★★★★★</span>
        <span className='ml-2 text-gray-600'>(131)</span>
      </div>
      <Button className='w-fit rounded-lg bg-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-400 hover:text-gray-100'>
        Edit Product
      </Button>
    </Card>
  )
}
