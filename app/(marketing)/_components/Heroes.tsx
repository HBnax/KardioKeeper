import Image from "next/image";

export function Heroes () {
return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
        </div>
      </div>
    </div>
)
}

/*
<Image className="object-contain dark:hidden" src='/db_dark.png' alt="Documents" fill />
          <Image className="object-contain hidden dark:block" src='/db_light.png' alt="Documents" fill />
*/