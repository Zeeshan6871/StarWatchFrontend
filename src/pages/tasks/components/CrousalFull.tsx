import { Button } from '@/components/custom/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselFull() {
  return (
    <Carousel className='h-[346px] max-w-full'>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className='h-[346px] bg-blue-500 pl-10 pt-[50px] text-white sm:pl-16 md:pl-16 lg:pl-16 xl:pl-[120px]'>
              <div className='flex flex-col gap-4'>
                <CardDescription className='text-xs text-white sm:text-sm md:text-base lg:text-lg'>
                  September 12-22
                </CardDescription>
                <CardTitle className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                  Enjoy free home
                </CardTitle>
                <CardTitle className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                  delivery in this summer
                </CardTitle>
                <CardDescription className='text-xs text-white sm:text-sm md:text-base lg:text-lg'>
                  Designer Dresses - Pick from trendy Designer Dress.
                </CardDescription>
                <Button className='w-fit bg-orange-400 hover:bg-orange-300'>
                  Get Started
                </Button>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 md:left-8 lg:left-10' />
      <CarouselNext className='absolute right-4 md:right-8 lg:right-10' />
    </Carousel>
  )
}
