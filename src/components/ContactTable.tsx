import { Contact } from "@/types/Contact"

type Props = {
    contacts: Contact[];
}

export const ContactTable = ({ contacts }: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800 text-white">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">JobTitle</th>
                </tr>

            </thead>

            <tbody>
                {contacts.map((contact) => 
    
                    <tr key={contact.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
                        <td className="p-3 flex items-center ">
                            <img className="w-10 h-10 rounded-full mr-3" src={contact.avatar} alt={contact.name} />
                            <div className="font-bold">{contact.name}</div>
                        </td>

                        <td className="p-3">{contact.email}</td>

                        <td>{contact.phone}</td>
                        <td>{contact.jobTitle}</td>
                    </tr>
                
                
                )}

                
            </tbody>
        </table>
    )
}