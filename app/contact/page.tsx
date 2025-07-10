"use client";

import { Button} from "@/components/ui/button";
import { Input} from "@/components/ui/input";
import { Textarea} from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { title } from "process";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 852 3021 7420",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ivanseptaa@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "DKI Jakarta",
  },
]

import {motion} from "framer-motion";

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity:0 }}
    animate={{
      opacity:1,
      transition: {delay: 2.4, duration: 0.4,  ease: "easeIn" }}}
    className="py-6 ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">

            <div className="xl:w-[54%] oreder-2 xl:order-none">

            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">lets Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit nisi expedita laboriosam recusandae? At deserunt cum numquam aliquam commodi!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone Number"/>
              </div>
              <Select onValueChange={(value) => console.log(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Machine Learning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            <Textarea className="h-[200px]" placeholder="Type your message here"/>
            <Button
              variant="accentBlack"
              size="md"
              className="max-w-40 w-full cursor-pointer"
            >
              Send Message
            </Button>
            </form>

            </div>

            <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 ">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[22px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
    </motion.section>
    );
  }
export default Contact;
