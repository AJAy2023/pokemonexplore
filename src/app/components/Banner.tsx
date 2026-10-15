import Image from  "next/image"

export default function Banner()
{

    return (

         <div className="flex justify-center items-center py-4 sm:py-6 md:py-8">
      <Image
        src="/assets/pokemon_logo_PNG5.png"
        alt="Pokemon Explorer"
        width={400}
        height={200}
        className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto "
        priority
      />
    </div>
    )
}