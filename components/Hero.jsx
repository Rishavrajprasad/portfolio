import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Badge from "./Badge";
import Socials from "./Socials";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex max-w-[900px] flex-col justify-center mx-auto xl:mx-0 text-center">
            <div className="text-lg uppercase font-semibold text-primary tracking-[2px]">
              Hello
            </div>
            <h1 className="h1 mb-4">My name is Rishav Raj Prasad</h1>
            <p className="description max-w-[800px] mx-auto xl:mx-0">
              An eager young student seeking a bachelor of technology in
              computer science and engineering who is constantly eager to try
              new things that can help me better my abilities. It will be
              exciting to have the chance to improve both society and myself.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto mb-10">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={15} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={15} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto "
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
