import { ContactTable } from "@/components/ContactTable";
import { contacts } from "@/data/contacts";

export default function Home() {
  return (

    <ContactTable contacts={contacts}/>

  )
}
