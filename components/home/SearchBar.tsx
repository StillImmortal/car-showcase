"use client"

import { SearchBarInputs } from '@/types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SiVolkswagen } from "react-icons/si"
import { LuChevronsUpDown, LuCheck } from "react-icons/lu"
import { Button } from '../ui/button'
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { manufacturers } from '@/constants'
import { isEqualStrings } from '@/utils'

const SearchBar = () => {
  const form = useForm<SearchBarInputs>()

  const handleSearch = () => {}

  const onSubmit: SubmitHandler<SearchBarInputs> = (data) => {}

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
          control={form.control}
          name="manufacturer"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[280px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                    >
                      <span className='flex items-center gap-2'>
                        <SiVolkswagen />
                        {field.value
                          ? manufacturers.find(
                              (manufacturer) => isEqualStrings(manufacturer, field.value)
                            )
                          : "Volkswagen"}
                      </span>
                      <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] max-h-[320px] overflow-y-auto p-0 z-10">
                  <Command>
                    <CommandInput placeholder="Search manufacturer..." />
                    <CommandEmpty>No manufacturer found.</CommandEmpty>
                    <CommandGroup>
                      {manufacturers.map((manufacturer) => (
                        <CommandItem
                          value={manufacturer}
                          key={manufacturer}
                          onSelect={(value) => {
                            form.setValue("manufacturer", value)
                          }}
                        >
                          <LuCheck
                            className={cn(
                              "mr-2 h-4 w-4",
                              isEqualStrings(manufacturer, field.value)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {manufacturer}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>

  //  <Form {...form}>
  //     <form
  //       className=''
  //       onSubmit={form.handleSubmit(onSubmit)}
  //     >
  //       <FormField 
  //         control={form.control}
  //         name="query"
  //         render={({ field }) => (
  //           <FormItem>
  //             <FormControl>
  //               <Input className='placeholder:text-gray-600 rounded border-transparent bg-gray-100' placeholder='Toyota' {...field} />
  //             </FormControl>
  //             {/* <FormDescription className='text-gray-800'>
  //               Search a mark of your car.
  //             </FormDescription> */}
  //             <FormMessage />
  //           </FormItem>
  //         )}
  //       />
  //     </form>
  //  </Form>
  )
}

export default SearchBar